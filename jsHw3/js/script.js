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



const isLoginUnique = (logins,newLogin) => {
    if(isLoginValid() === true){
        if(logins.includes(newLogin) === true ){
            return false;
        }else{
            return true;
        } 
    } else{
        return false
    }
} 

const addLogin = (logins,newLogin) =>{
    if (isLoginUnique() === true){
        logins.push(newLogin);
        console.log(logins);
    }
}



isLoginValid(login);
isLoginUnique(logins,login);
addLogin(logins,login);
console.log(logins);

