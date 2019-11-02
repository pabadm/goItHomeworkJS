'use strict';


const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const login = (prompt('login'));

const isLoginValid = newLogin =>{
    
    if (newLogin.length >= 4 && newLogin.length <= 16) {
        return true;
    } else{
        return false;
    }
}



const isLoginUnique = (newLogin) => {
    if(isLoginValid(login) === true){
        if(logins.includes(newLogin) === true ){
            return false;
        }else{
            return true;
        } 
    } else{
        return false
    }
} 

const addLogin = (newLogin) =>{
    if (isLoginUnique(login) === true){
        logins.push(newLogin);
        console.log(logins);
    } else if(isLoginValid(login)=== false){
        console.log('login isnt valid');
    }else if(isLoginUnique(login)===false){
        console.log('login isnt unique');
    }
}




addLogin(login);


