// Задание 1.
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только
// собственных свойств. Данная функция не должна возвращать значение.

const objFirst = {
    name: 'First',
    count: 850,
    rating: 2,
    showtime: 120,
    title: 'All obout objects!',
};
const objSecond = Object.create(objFirst);
objSecond.name = 'Second'
objSecond.only = 'Property for only this object';


function showObjectProperties(obj) {
    console.log(`Все свойства объекта: ${obj.name}`)
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ: ${key} - его значение: ${obj[key]}`)
        }
    }
}

showObjectProperties(objFirst);
console.log('__________________________________________________________________')
console.log('__________________________________________________________________')
showObjectProperties(objSecond);
