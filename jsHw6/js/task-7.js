'use strict';

//Получить общую сумму баланса (поле balance) всех пользователей.


const calculateTotalBalance = users => {
    return users.reduce((acc, user) => user.balance + acc, 0);
};
console.log(calculateTotalBalance(users)); // 20916