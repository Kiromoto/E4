// Задание 3.
// Написать функцию, которая создает пустой объект, но без прототипа.

function newEmptyObject() {
    return Object.create(null)
}

a = newEmptyObject()

console.log(Object.getPrototypeOf(a))
