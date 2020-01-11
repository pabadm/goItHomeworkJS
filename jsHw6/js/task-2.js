'use strict';

//Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color);

};
console.log(getUsersWithEyeColor(users, 'blue'))