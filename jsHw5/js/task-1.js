'use strict';

const Account = function(login, email){
    this.login = login;
    this.email = email;
    this.getInfo = function() {
        console.log(`${this.login} ${this.email}`);
    }
}

const dog = new Account('dog','email');
dog.getInfo();