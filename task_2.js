// Задание 2.
// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного
// объекта свойство с данным именем. Функция должна возвращать true или false.

const objFirst = {
    name: 'First',
    count: 850,
    rating: 2,
    showtime: 120,
    title: 'All obout objects!',
};

function checkingPropertyExists(str, obj) {
    console.log(str in obj)
}

checkingPropertyExists('title', objFirst);
checkingPropertyExists('only', objFirst);
