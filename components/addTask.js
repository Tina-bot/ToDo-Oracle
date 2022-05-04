import checkComplete from "./checkComplete.js";
import deleteIcon from "./deleteIcon.js";

export const addTask = (event) => {
    event.preventDefault();

    const list = document.querySelector("[data-form-list]");
    const inputValue = document.querySelector("[data-form-input]").value;
    const dateValue = document.querySelector("[data-form-date]").value;
    const date = moment(dateValue).format("DD/MM/YYYY HH:mm");

    if (inputValue === "" || dateValue === "") {
        const alert = document.createElement("div");
        const alertIcon = document.createElement("i");
        alertIcon.classList.add("fas", "fa-exclamation-triangle");
        alert.classList.add("alert", "alert-danger");
        alert.textContent = "Please fill all fields";
        alert.appendChild(alertIcon);
        document.querySelector("[data-form-alert]").appendChild(alert);

        setTimeout(() => {
            alert.remove();
        }, 30000);

    } else {
        const taskObject = {
            inputValue,
            date,
        };

        const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
        taskList.push(taskObject);
        localStorage.setItem("tasks", JSON.stringify(taskList));

        const task = createTask(taskObject);
        list.appendChild(task);
    }
};

export const createTask = ({ inputValue, date }) => {

    const task = document.createElement("li");
    task.classList.add("card");

    const dateElement = document.createElement("H3");
    dateElement.innerText = date;

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