const todoList = [];

function addTodo() {
  const inputNameElement = document.querySelector(".js-name-input");
  const name = inputNameElement.value;

  const inputDueDateElement = document.querySelector(".js-due-date-input");
  const dueDate = inputDueDateElement.value;

  if (name === "" || dueDate === "") {
    return;
  }

  const todoObject = { name, dueDate };

  todoList.push(todoObject);
  console.log(todoList);

  renderTodoList();

  inputNameElement.value = "";
  inputDueDateElement.value = "";
}

function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];

    const { name, dueDate } = todoObject;

    const html = `
      <div class="name">${name}</div>
      <div class="due-date">${dueDate}</div>
      <button
        onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        "
        class="delete-button"
      >
        Delete
      </button>
    `;
    todoListHTML += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
