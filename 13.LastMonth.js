function solve([day, month, year]) {
    [day, month, year]=[day, month, year].map(Number);

    let date = new Date(year, month - 1, 0);
    console.log(date.getDate());
}

solve([13, 12, 2004]);