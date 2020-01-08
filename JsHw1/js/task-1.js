const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

let authorisation = prompt('enter login');

if(authorisation === adminLogin){
    authorisation = prompt('enter password')


    if(authorisation === adminPassword){
        alert('Добро пожаловать')
    }else if(authorisation === null){
        alert('Отменено пользователем');
    }else{
        alert('Неверное значение')
    }

    
}else if(authorisation === null){
    alert('Отменено пользователем');
}else{
    alert('Неверное значение')
}

