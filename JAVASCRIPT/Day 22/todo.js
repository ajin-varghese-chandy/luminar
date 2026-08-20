function addTask() {
    let task = taskInput.value.trim();

    if (task === "") {
        alert('your task is empty')
        return;
    }

    let li = document.createElement('li');

    li.innerHTML = `


<li ondblclick="editTask(this)" class="group mt-2 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-1 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">


    <button
        type="button"
        class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-slate-300 transition hover:border-blue-500 hover:bg-blue-500"
    >
        <img
            src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/check.svg"
            alt="Complete"
            class="h-2 w-2 opacity-0 invert group-hover:opacity-100"
        />
    </button>


    <div class="flex min-w-0 flex-1 items-center gap-3">

        <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <img
                src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/clipboard-check.svg"
                alt="Task"
                class="h-4 w-4"
            />
        </div>

        <span class="truncate text-sm font-medium text-slate-700">
            ${task}
        </span>
    </div>


    <div class="flex shrink-0 items-center gap-1 ">

    
        <button
            type="button"
            onclick="editTask(this.closest('li'))"
            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-blue-50 hover:text-blue-500"
            aria-label="Edit task"
        >
            <img
                src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/pencil.svg"
                alt="Edit"
                class="h-4 w-4"
            />
        </button>

      
        <button
         onclick="removeTask(this)"
            type="button"
            class="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-red-50 hover:text-red-500"
            aria-label="Delete task"
        >
            <img
                src="https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/trash-2.svg"
                alt="Delete"
                class="h-4 w-4"
            />
        </button>

    </div>
</li>
    
    `

    taskList.appendChild(li);
    taskInput.value = "";
}

function editTask(li) {
    const span = li.querySelector('span');
    const newTask = prompt('Edit your task', span.textContent);

    if (newTask !== null && newTask.trim() !== '') {
        span.textContent = newTask.trim();
    }
}

function removeTask(btn) {
    btn.closest('li').remove();
}