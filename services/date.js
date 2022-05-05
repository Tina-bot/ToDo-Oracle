export const uniqueDates = (tasks) => {
    const unique = [];
    tasks.forEach(task => {
        if (!unique.includes(task.date)) unique.push(task.date);
    });
    return unique;
}

export const orderDates = (dates) => {
    return dates.sort((a,b) => {
        const firstDate = moment(a, "DD/MM/YYYY");
        const secondDate = moment(b, "DD/MM/YYYY");
        return firstDate.diff(secondDate);
    } );
}