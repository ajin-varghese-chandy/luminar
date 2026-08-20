


let todos = [];
let currentFilter = 'all';
let searchTerm = '';
let isBusy = false;
let editingId = null;
let deletingId = null;

let listEl = document.getElementById('todoList');
let skeletonEl = document.getElementById('skeleton');
let errorBoxEl = document.getElementById('errorBox');
let errorMsgEl = document.getElementById('errorMsg');
let retryBtn = document.getElementById('retryBtn');
let emptyEl = document.getElementById('empty');
let emptyMsgEl = document.getElementById('emptyMsg');
let searchInput = document.getElementById('searchInput');
let filterButtons = document.querySelectorAll('.filter-btn');
let addButton = document.getElementById('addTodoBtn');
let statTotalEl = document.getElementById('statTotal');
let statDoneEl = document.getElementById('statDone');
let statLeftEl = document.getElementById('statLeft');
let formEl = document.getElementById('todoForm');
let modalTitleEl = document.getElementById('todoModalLabel');
let titleInput = document.getElementById('todoTitle');
let doneInput = document.getElementById('todoDone');
let submitBtn = document.getElementById('submitBtn');
let submitTxt = submitBtn.querySelector('.btn-txt');
let submitSpinner = submitBtn.querySelector('.spinner');
let deleteTitleEl = document.getElementById('deleteTitle');
let confirmDeleteBtn = document.getElementById('confirmDelete');
let delTxt = confirmDeleteBtn.querySelector('.btn-txt');
let delSpinner = confirmDeleteBtn.querySelector('.spinner');
let toastWrap = document.getElementById('toast');
const API = 'https://jsonplaceholder.typicode.com/todos';
const STORE_KEY = 'todoboard';

let todoModal = new bootstrap.Modal('#todoModal', { backdrop: 'static' });
let deleteModal = new bootstrap.Modal('#deleteModal', { backdrop: 'static' });

function escapeHTML(text) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    if (char === '&') result += '&amp;';
    else if (char === '<') result += '&lt;';
    else if (char === '>') result += '&gt;';
    else if (char === '"') result += '&quot;';
    else if (char === "'") result += '&#39;';
    else result += char;
  }
  return result;
}

function saveStore() {
  try {
    let data = JSON.stringify({
      todos: todos,
      filter: currentFilter,
      search: searchTerm
    });
    localStorage.setItem(STORE_KEY, data);
  } catch (error) {
    console.warn('localStorage unavailable', error);
  }
}

function loadStore() {
  try {
    let raw = localStorage.getItem(STORE_KEY);
    if (raw === null) return null;
    let data = JSON.parse(raw);
    if (!Array.isArray(data.todos)) return null;
    return data;
  } catch (error) {
    return null;
  }
}

function isRemoteTodo(id) {
  return id <= 200;
}

function setBusy(value) {
  isBusy = value;
  if (value) {
    document.body.classList.add('is-busy');
  } else {
    document.body.classList.remove('is-busy');
  }
}

function toast(message, kind) {
  if (kind === undefined) kind = 'ok';
  let el = document.createElement('div');
  el.className = 'toast ' + kind;
  el.textContent = message;
  toastWrap.appendChild(el);
  setTimeout(function () {
    el.classList.add('show');
  }, 20);
  setTimeout(function () {
    el.classList.remove('show');
    setTimeout(function () {
      el.remove();
    }, 250);
  }, 2600);
}

function showSkeleton(show) {
  if (show) {
    skeletonEl.classList.remove('hidden');
    listEl.classList.add('hidden');
    emptyEl.classList.add('hidden');
  } else {
    skeletonEl.classList.add('hidden');
    listEl.classList.remove('hidden');
  }
}

function showError(error) {
  errorMsgEl.textContent = 'Could not reach the API — ' + error.message;
  errorBoxEl.classList.remove('hidden');
}

function hideError() {
  errorBoxEl.classList.add('hidden');
}

function setFilterUI(filterName) {
  for (let i = 0; i < filterButtons.length; i++) {
    let button = filterButtons[i];
    if (button.getAttribute('data-filter') === filterName) {
      button.classList.add('is-active');
    } else {
      button.classList.remove('is-active');
    }
  }
}

function setSubmitLoading(value) {
  submitBtn.disabled = value;
  if (value) {
    submitTxt.classList.add('hidden');
    submitSpinner.classList.remove('hidden');
  } else {
    submitTxt.classList.remove('hidden');
    submitSpinner.classList.add('hidden');
  }
}

function setDelLoading(value) {
  confirmDeleteBtn.disabled = value;
  if (value) {
    delTxt.classList.add('hidden');
    delSpinner.classList.remove('hidden');
  } else {
    delTxt.classList.remove('hidden');
    delSpinner.classList.add('hidden');
  }
}

async function readJSON(response) {
  let text = await response.text();
  if (text === '') return null;
  return JSON.parse(text);
}

function getVisibleTodos() {
  let result = [];
  for (let i = 0; i < todos.length; i++) {
    let todo = todos[i];

    let matchesSearch = true;
    if (searchTerm !== '') {
      let title = todo.title.toLowerCase();
      if (title.indexOf(searchTerm) === -1) matchesSearch = false;
    }

    let matchesFilter = true;
    if (currentFilter === 'done' && !todo.completed) matchesFilter = false;
    if (currentFilter === 'todo' && todo.completed) matchesFilter = false;

    if (matchesSearch && matchesFilter) result.push(todo);
  }
  return result;
}

function renderStats() {
  let total = todos.length;
  let done = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].completed) done++;
  }
  statTotalEl.textContent = total;
  statDoneEl.textContent = done;
  statLeftEl.textContent = total - done;
}

function rowHTML(todo) {
  let rowClass = 'todo-row';
  let dotTitle = 'Mark done';
  let tagClass = 'tag warn';
  let tagText = 'open';
  if (todo.completed) {
    rowClass = rowClass + ' is-done';
    dotTitle = 'Mark open';
    tagClass = 'tag ok';
    tagText = 'done';
  }

  let html = '';
  html += '<li class="' + rowClass + '" data-id="' + todo.id + '">';
  html += '<button class="dot" data-action="toggle" type="button" title="' + dotTitle + '">';
  html += '<svg class="chk" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.6" ';
  html += 'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
  html += '<path d="M2.5 8.5 6.5 12.5 13.5 4.5"></path></svg>';
  html += '</button>';
  html += '<div class="todo-main">';
  html += '<p class="todo-title">' + escapeHTML(todo.title) + '</p>';
  html += '<p class="todo-meta">';
  html += '<span class="id">#' + todo.id + '</span>';
  html += '<span class="' + tagClass + '">' + tagText + '</span>';
  html += '</p></div>';
  html += '<div class="todo-actions">';
  html += '<button class="btn-act edit" data-action="edit" type="button">Edit</button>';
  html += '<button class="btn-act del" data-action="del" type="button">Delete</button>';
  html += '</div></li>';
  return html;
}

function renderList() {
  let visible = getVisibleTodos();

  let html = '';
  for (let i = 0; i < visible.length; i++) {
    html += rowHTML(visible[i]);
  }
  listEl.innerHTML = html;

  if (visible.length === 0) {
    emptyEl.classList.remove('hidden');
    if (todos.length === 0) {
      emptyMsgEl.textContent = 'No tasks yet. Add one above — or check the network.';
    } else {
      emptyMsgEl.textContent = 'Nothing matches that search or filter.';
    }
  } else {
    emptyEl.classList.add('hidden');
  }
}

function applyView() {
  renderStats();
  renderList();
  saveStore();
}

async function fetchTodos() {
  setBusy(true);
  hideError();
  showSkeleton(true);
  try {
    let response = await fetch(API);
    if (!response.ok) {
      throw new Error('server responded ' + response.status + ' ' + response.statusText);
    }
    let remoteTodos = await response.json();

    let localTodos = [];
    for (let i = 0; i < todos.length; i++) {
      if (!isRemoteTodo(todos[i].id)) localTodos.push(todos[i]);
    }

    let merged = [];
    for (let i = 0; i < remoteTodos.length; i++) {
      let t = remoteTodos[i];
      merged.push({ id: t.id, title: t.title, completed: !!t.completed });
    }
    for (let i = 0; i < localTodos.length; i++) {
      merged.push(localTodos[i]);
    }

    todos = merged;
    applyView();
  } catch (error) {
    let cached = loadStore();
    if (cached !== null && cached.todos.length > 0) {
      todos = cached.todos;
      if (cached.filter !== undefined) currentFilter = cached.filter;
      if (cached.search !== undefined) searchTerm = cached.search;
      searchInput.value = searchTerm;
      setFilterUI(currentFilter);
      applyView();
    }
    showError(error);
  } finally {
    setBusy(false);
    showSkeleton(false);
  }
}

async function addTodo(title, completed) {
  setBusy(true);
  setSubmitLoading(true);
  hideError();
  try {
    let response = await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title, completed: completed })
    });
    if (!response.ok) {
      throw new Error('POST failed (' + response.status + ')');
    }
    let created = await response.json();
    let todo = { id: created.id, title: title, completed: !!completed };
    todos.unshift(todo);

    currentFilter = 'all';
    searchTerm = '';
    searchInput.value = '';
    setFilterUI('all');
    applyView();
    toast('Added "' + todo.title + '"');
    return true;
  } catch (error) {
    showError(error);
    toast('Add failed: ' + error.message, 'bad');
    return false;
  } finally {
    setBusy(false);
    setSubmitLoading(false);
    todoModal.hide();
  }
}

async function updateTodo(id, title, completed) {
  setBusy(true);
  setSubmitLoading(true);
  hideError();
  try {
    let response = await fetch(API + '/' + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title, completed: completed })
    });
    if (!response.ok) {
      throw new Error('PATCH failed (' + response.status + ')');
    }
    let updated = await readJSON(response);
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        if (updated !== null && updated.title !== undefined) {
          todos[i].title = updated.title;
        } else {
          todos[i].title = title;
        }
        todos[i].completed = !!completed;
      }
    }
    applyView();
    toast('Task updated');
    return true;
  } catch (error) {
    showError(error);
    toast('Update failed: ' + error.message, 'bad');
    return false;
  } finally {
    setBusy(false);
    setSubmitLoading(false);
    todoModal.hide();
  }
}

async function deleteTodo(id) {
  setBusy(true);
  setDelLoading(true);
  hideError();
  try {
    let response = await fetch(API + '/' + id, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('DELETE failed (' + response.status + ')');
    }
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        let removed = todos.splice(i, 1);
        toast('Deleted "' + removed[0].title + '"');
        break;
      }
    }
    applyView();
    return true;
  } catch (error) {
    showError(error);
    toast('Delete failed: ' + error.message, 'bad');
    return false;
  } finally {
    setBusy(false);
    setDelLoading(false);
    deleteModal.hide();
  }
}

async function toggleTodo(id) {
  let target = null;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) target = todos[i];
  }
  if (target === null) return;

  target.completed = !target.completed;
  applyView();
  try {
    let response = await fetch(API + '/' + id, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: target.completed })
    });
    if (!response.ok) {
      throw new Error('PATCH failed (' + response.status + ')');
    }
  } catch (error) {
    target.completed = !target.completed;
    applyView();
    toast('Sync failed: ' + error.message, 'bad');
  }
}

function searchTodo(term) {
  searchTerm = term.trim().toLowerCase();
  applyView();
}

function filterTodo(filterName) {
  currentFilter = filterName;
  setFilterUI(filterName);
  applyView();
}

function openAddModal() {
  editingId = null;
  modalTitleEl.textContent = 'New task';
  formEl.reset();
  doneInput.checked = false;
  submitTxt.textContent = 'Add task';
  todoModal.show();
  setTimeout(function () {
    titleInput.focus();
  }, 200);
}

function findTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) return todos[i];
  }
  return null;
}

function openEditModal(id) {
  let target = findTodo(id);
  if (target === null) return;
  editingId = id;
  modalTitleEl.textContent = 'Edit task #' + id;
  titleInput.value = target.title;
  doneInput.checked = target.completed;
  submitTxt.textContent = 'Save changes';
  todoModal.show();
  setTimeout(function () {
    titleInput.focus();
  }, 200);
}

function askDelete(id) {
  let target = findTodo(id);
  if (target === null) return;
  deletingId = id;
  deleteTitleEl.textContent = target.title;
  deleteModal.show();
}

formEl.addEventListener('submit', function (event) {
  event.preventDefault();
  let title = titleInput.value.trim();
  if (title === '') {
    titleInput.classList.add('is-invalid');
    titleInput.focus();
    toast('A title is required', 'bad');
    return;
  }
  titleInput.classList.remove('is-invalid');
  if (editingId === null) {
    addTodo(title, doneInput.checked);
  } else {
    updateTodo(editingId, title, doneInput.checked);
  }
});

titleInput.addEventListener('input', function () {
  titleInput.classList.remove('is-invalid');
});

confirmDeleteBtn.addEventListener('click', function () {
  if (deletingId !== null) deleteTodo(deletingId);
});

listEl.addEventListener('click', function (event) {
  let button = event.target.closest('[data-action]');
  if (button === null || isBusy) return;
  let row = button.closest('.todo-row');
  let id = Number(row.getAttribute('data-id'));
  let action = button.getAttribute('data-action');
  if (action === 'toggle') toggleTodo(id);
  else if (action === 'edit') openEditModal(id);
  else if (action === 'del') askDelete(id);
});

let searchTimer = null;
searchInput.addEventListener('input', function (event) {
  clearTimeout(searchTimer);
  let value = event.target.value;
  searchTimer = setTimeout(function () {
    searchTodo(value);
  }, 220);
});

for (let i = 0; i < filterButtons.length; i++) {
  let button = filterButtons[i];
  button.addEventListener('click', function () {
    filterTodo(button.getAttribute('data-filter'));
  });
}

retryBtn.addEventListener('click', fetchTodos);
addButton.addEventListener('click', openAddModal);

function init() {
  let cached = loadStore();
  if (cached !== null) {
    todos = cached.todos;
    if (cached.filter !== undefined) currentFilter = cached.filter;
    if (cached.search !== undefined) searchTerm = cached.search;
    searchInput.value = searchTerm;
    setFilterUI(currentFilter);
    applyView();
  }
  fetchTodos();
}

init();
