// Задание 4.
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

// План:
//      Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
//      Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
//      У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//      Создать экземпляры каждого прибора.
//      Вывести в консоль и посмотреть результаты работы, гордиться собой. :)
// Общие требования:
//     Имена функций, свойств и методов должны быть информативными.
//     Соблюдать best practices:
//     использование camelCase нотации для переменных и методов, PascalCase для названия функций-конструкторов и классов;
//      информативные имена (а не a, b);
//      четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
//      использование синтаксиса ES6 (кроме функции-конструкторов) и т. д.

function ElectricAppliance(deviceName, devicePower, deviceType) {
    this.deviceName = deviceName;
    this.devicePower = devicePower;
    this.switched = false;
    this.deviceType = deviceType;
}


ElectricAppliance.prototype.switchOn = function () {
    this.switched = true
};
ElectricAppliance.prototype.switchOff = function () {
    this.switched = false
};
ElectricAppliance.prototype.setDeviceName = function (deviceName) {
    this.deviceName = deviceName;
};
ElectricAppliance.prototype.setDevicePower = function (devicePower) {
    this.devicePower = devicePower;
};
ElectricAppliance.prototype.setDeviceType = function (deviceType) {
    this.deviceType = deviceType;
};

function KitchenApp() {
    this.funcDelayedStart = false;
}

// KitchenApp.prototype.startDelay = function (time) {
//     console.log(`${time}`)
// }


function ComputersApp(comptype) {
    this.compType = comptype;
    this.sleepMode = false;

}

ComputersApp.prototype.sleepModeOn = function () {
    this.sleepMode = true;
    console.log(`SleepMode is activate!`)
};
ComputersApp.prototype.sleepModeOff = function () {
    this.sleepMode = false;
};


function LightingApp(lightingType) {
    this.lightingType = lightingType;
    this.installed = false;
    this.installLocation = undefined;

}

LightingApp.prototype.delayedStart = function (location) {
    this.installed = true;
    this.installLocation = location;
}


KitchenApp.prototype = new ElectricAppliance();
ComputersApp.prototype = new ElectricAppliance();
LightingApp.prototype = new ElectricAppliance();

const comp1 = new ComputersApp('PC tower');
comp1.setDeviceName('Computer 1');
comp1.setDevicePower(350);
console.log(comp1);


const multicooker = new KitchenApp();
multicooker.funcDelayedStart = true;
multicooker.setDeviceName('multicooker');
multicooker.setDevicePower(250);
multicooker.setDeviceType('For cooking');


console.log(multicooker);