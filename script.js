import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";


const btn = document.querySelector("[data-form-btn]");

const addTask = (event) => {
    const list = document.querySelector("[data-form-list]");
    const task = createTask(event);
    list.appendChild(task);

};

const createTask = (event) => {
    event.preventDefault();
    const inputValue = document.querySelector("[data-form-input]").value;
    const date = document.querySelector("[data-form-date]").value;
    const task = document.createElement("li");
    task.classList.add("card");

    const dateElement = document.createElement("H3");
    dateElement.innerText = moment(date).format("DD/MM/YYYY HH:mm");

    const taskContent = document.createElement("div");

    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = inputValue;

    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);

    task.appendChild(taskContent);
    task.appendChild(dateElement);
    task.appendChild(deleteIcon());

    return task;
};

btn.addEventListener("click", addTask);

