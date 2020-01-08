////////////////////////////////дополнительное

const sharm = 15;
const hurgada = 25;
const taba = 6;

let places = Number(prompt('введите число мест'));
let choise = null;
let vacation = null;

if(places === null){
    choise = null; //вывод происходит в конце
}else if(places <= 0){
    choise = -2;    //чтобы срабатывал else
}
else if(places <= taba){
    choise = Number(prompt('Есть места в 3-ех группах(1 - taba, 2 - sharm, 3 - hurgaba)'));
///////////////Этот скрипт я копировал несколько раз
    if (choise === 1){
        vacation = 'taba';
    }else if(choise === 2){
        vacation = 'sharm';
    }else if(choise === 3){
        vacation = 'hurgaba';
    }
////////////////////
}else if(places <= sharm){
    choise = Number(prompt('Есть места в 2-ух группах(1 - sharm, 2 - hurgaba)'));
/////////////////////////////
    if (choise === 1){
        vacation = 'sharm';
    }else if(choise === 2){
        vacation = 'hurgaba';
    }
//////////////////////////
}else if(places <= hurgaba){
    choise = confirm('Есть места в 1-ой группе(hurgaba),вы согласны?');
///////////////////////////////////    
    if (choise === true){
        vacation = 'hurgaba';
    }
//////////////////////////////////////////   
}

if (choise === true || choise === 1 || choise === 2 || choise === 3){
    alert(`Приятного отдыха в ${vacation}`);
}else if(choise === false || choise === null){
    alert('Нам очень жаль, приходите еще!');
}else{
    alert('Неверное значение');
}

