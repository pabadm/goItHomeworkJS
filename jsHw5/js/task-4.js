'use strict';

class StringBuilder {
    constructor(value){
        this._value = value;
    }
    get value(){
        return this._value;
    }
    append(str) {
        // без переменных не получалось
        let arrValue = this._value.split('');
        arrValue.push(str);
        let finishedValue = arrValue.join('');
        this._value = finishedValue;
    }
    prepend(str){
        let arrValue = this._value.split('');
        arrValue.unshift(str);
        let finishedValue = arrValue.join('');
        this._value = finishedValue;
    }
    pad(str){
        this.append(str);
        this.prepend(str);
    }
}


const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='