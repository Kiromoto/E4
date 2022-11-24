// Задание 5.
// Переписать консольное приложение из предыдущего юнита на классы.
//     Общие требования:
//     Имена классов, свойств и методов должны быть информативными;
//     Соблюдать best practices;
//     Использовать синтаксис ES6.


class ElectricAppliance {
    constructor() {
        this.deviceName = undefined;
        this.devicePower = undefined;
        this.switched = false;
        this.deviceType = undefined;
    };

    switchOn() {
        this.switched = true
    };

    switchOff() {
        this.switched = false
    };

    setDeviceName(deviceName) {
        this.deviceName = deviceName;
    };

    setDevicePower(devicePower) {
        this.devicePower = devicePower;
    };

    setDeviceType(deviceType) {
        this.deviceType = deviceType;
    };
}

class KitchenApp extends ElectricAppliance {
    constructor(deviceName, devicePower, switched, deviceType) {
        super(deviceName, devicePower, switched, deviceType);
        this.funcDelayedStart = false;
    };

    switchWithTimeout(timeout) {
        if (this.funcDelayedStart) {
            console.log('The countdown has begun!')
            const deviceName = this.deviceName;
            setTimeout(function () {
                console.log(`${deviceName} starts working!`);
                this.switched = true;
            }, timeout * 1000);
        } else {
            console.log(`Have not start delay function!`)
        }
        ;
    };
}

class ComputersApp extends ElectricAppliance {
    constructor(comptype, deviceName, devicePower, switched, deviceType) {
        super(deviceName, devicePower, switched, deviceType);
        this.compType = comptype;
        this.sleepMode = false;
    }

    sleepModeOn() {
        this.sleepMode = true;
        console.log(`SleepMode is activate!`)
    };

    sleepModeOff() {
        this.sleepMode = false;
    };
}


class LightingApp extends ElectricAppliance {
    constructor(lightingType, deviceName, devicePower, switched, deviceType) {
        super(deviceName, devicePower, switched, deviceType);
        this.lightingType = lightingType;
        this.mounted = false;
        this.mountLocation = undefined;
    };

    mount(location) {
        this.mounted = true;
        this.mountLocation = location;
    };
}


const comp1 = new ComputersApp('PC tower');
comp1.setDeviceName('Computer 1');
comp1.setDeviceType('ComputersApp')
comp1.setDevicePower(350);
console.log(comp1);


const multicooker = new KitchenApp();
multicooker.funcDelayedStart = true;
multicooker.setDeviceName('multicooker');
multicooker.setDevicePower(250);
multicooker.setDeviceType('KitchenApp');

console.log(multicooker);
multicooker.switchWithTimeout(10);

const lamp1 = new LightingApp('LED lamp');
lamp1.setDeviceName('chandelier');
lamp1.setDevicePower(95);
lamp1.setDeviceType('LightingApp');
lamp1.mount('ceiling')

console.log(lamp1);

comp1.switchOn();
lamp1.switchOn();
comp1.sleepModeOn()

console.log(`Общее электропотребление включенных приборов составляет: ${comp1.devicePower + lamp1.devicePower} Вт`);

