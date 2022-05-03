const checkComplete = () => {
    const check = document.createElement("i");
    check.classList.add("far", "fa-check-square", "checkIcon");
    check.addEventListener("click", completeTask);
    return check;
};


const completeTask = (event) => {
    event.target.classList.toggle("fa-check-square");
    event.target.classList.toggle("fa-square");
};

export default checkComplete;