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

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <div class="name">${name}</div>
      <div class="due-date">${dueDate}</div>
      <button
        class="delete-button js-delete-button"
      >
        Delete
      </button>
    `;
    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });
}

document.querySelector(".js-add-button").addEventListener("click", () => {
  addTodo();
});
