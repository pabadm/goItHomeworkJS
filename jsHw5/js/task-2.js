'use strict';

class User {
    constructor(name, age, followers){
        this.name = name;
        this.age = age;
        this.followers = followers;
        this.getInfo = function(){
            console.log(`User ${name} is ${age} years old and has ${followers} followers`)
        }
    }
}
const mango = new User('Mango', 2, 20);
mango.getInfo();
const poly = new User('Poly', 3, 17);
poly.getInfo();