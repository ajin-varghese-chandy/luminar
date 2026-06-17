import { NextRequest } from "next/server"
import { getImage } from "@/lib/content"

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path: segments } = await params
  if (segments.length < 2) {
    return new Response("Not found", { status: 404 })
  }

  const [slug, ...imageSegments] = segments
  const imageRelPath = imageSegments.join("/")

  const buffer = await getImage(slug, imageRelPath)
  if (!buffer) {
    return new Response("Not found", { status: 404 })
  }

  const ext = imageRelPath.split(".").pop()?.toLowerCase()
  const contentType: Record<string, string> = {
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    svg: "image/svg+xml",
  }

  return new Response(new Uint8Array(buffer), {
    headers: {
      "Content-Type": contentType[ext ?? ""] ?? "application/octet-stream",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
