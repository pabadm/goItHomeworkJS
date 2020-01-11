'use strict';
//Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = users => {
//     return users.reduce((allSkills, user)=> allSkills.push(...user.skills),[]);
// };

const getSortedUniqueSkills = users =>
    users.reduce((allSkills, user) => {
        allSkills.push(...user.skills);

        return allSkills.sort();
    }, []);

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
