'use strict';
// получилось по-лагучему
class Car {
    constructor(speed = 0,price,maxSpeed, isOn = false, distance = 0){
        this._speed = speed;
        this._price = price;
        this._maxSpeed = maxSpeed;
        this._isOn = isOn;
        this._distance = distance;
    }
    getSpecs(car){
        console.log(`maxSpeed ${this._maxSpeed}
        speed ${this._speed}
        isOn ${this._isOn}
        distance ${this._distance}
        price ${this._price}`);
    }
    get price(){
        return this._speed;
    }
    set price(value){
        return this._price = value;
    }
    turnOn() {
        this._is0n = true;
        return this._isOn;
    }
    turnOff(){
        this._isOn = false;
        this._speed = 0;
        return this._isOn, this._speed;
    }
    accelerate(value) {
        if(this._speed + value < this._maxSpeed){
            return this._speed += value; 
        }else{
            return this._speed;
        }
    }
    decelerate(value) {
        if(this._speed - value >= 0){
            return this._speed -= value;
        }else{
            return this._speed;
        }
    }
    drive(hours) {
        if(this._turnOn === true){
            return this._distance += this._speed * hours;
        }else{
            return this._distance;
        }
    }
}
// не понимаю как это работает const mustang = new Car({ maxSpeed: 200, price: 2000 });

const mustang = new Car(0, 2000, 200);

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

mustang.getSpecs();
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

mustang.getSpecs();
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000