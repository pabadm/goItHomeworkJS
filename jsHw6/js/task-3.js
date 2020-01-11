'use strict';

//Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (users, gender) => {
    return users
        .filter(user => user.gender === gender)
        .map(user => user.name)};

console.log(getUsersWithGender(users, 'male'));