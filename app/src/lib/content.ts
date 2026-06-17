import path from "path"
import fs from "fs/promises"

const PARENT_ROOT = path.resolve(process.cwd(), "..")

export interface DayMeta {
  slug: string
  title: string
  month: string
  dayNumber: number
  path: string
  monthDir: string
}

export interface DayContent {
  meta: DayMeta
  markdown: string
}

function extractTitle(markdown: string): string {
  const match = markdown.match(/^#\s+(.+)/m)
  return match ? match[1].trim() : "Untitled"
}

async function findReadme(dir: string): Promise<string | null> {
  for (const name of ["README.md", "readme.md", "index.md"]) {
    try {
      const p = path.join(dir, name)
      await fs.access(p)
      return p
    } catch {}
  }
  return null
}

export async function getAllDays(): Promise<DayMeta[]> {
  const entries = await fs.readdir(PARENT_ROOT, { withFileTypes: true })
  const days: DayMeta[] = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const monthDir = entry.name
    const month = monthDir.toLowerCase()

    const dayEntries = await fs.readdir(path.join(PARENT_ROOT, monthDir), {
      withFileTypes: true,
    })

    for (const dayEntry of dayEntries) {
      if (!dayEntry.isDirectory()) continue
      const dayPath = path.join(PARENT_ROOT, monthDir, dayEntry.name)

      const readmePath = await findReadme(dayPath)
      if (!readmePath) continue

      const content = await fs.readFile(readmePath, "utf-8")
      const title = extractTitle(content)

      const dayNumber = parseInt(dayEntry.name.split(" ").pop() || "0", 10)
      const slug = `${month}-day-${dayNumber}`

      days.push({ slug, title, month, dayNumber, path: dayEntry.name, monthDir })
    }
  }

  days.sort((a, b) => a.dayNumber - b.dayNumber)
  return days
}

export async function getDayBySlug(slug: string): Promise<DayContent | null> {
  const days = await getAllDays()
  const day = days.find((d) => d.slug === slug)
  if (!day) return null

  const dir = path.join(PARENT_ROOT, day.monthDir, day.path)
  const readmePath = await findReadme(dir)
  if (!readmePath) return null

  const markdown = await fs.readFile(readmePath, "utf-8")
  return { meta: day, markdown }
}

export async function getImage(slug: string, imagePath: string): Promise<Uint8Array | null> {
  const days = await getAllDays()
  const day = days.find((d) => d.slug === slug)
  if (!day) return null

  const fullPath = path.join(PARENT_ROOT, day.monthDir, day.path, imagePath)
  try {
    return await fs.readFile(fullPath)
  } catch {
    return null
  }
}

export function getContentRoot(): string {
  return PARENT_ROOT
}
