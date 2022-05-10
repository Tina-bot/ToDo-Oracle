export default (date) => {
    const dateElement = document.createElement('li');
    dateElement.classList.add('date');
    dateElement.innerHTML = date;
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-calendar');
    dateElement.appendChild(icon);
    return dateElement;
};
