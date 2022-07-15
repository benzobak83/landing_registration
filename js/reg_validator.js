function nameValid(event) {
    if(username.value.length < 5) {
        err_username.style.visibility='visible'
        err_username.style.right='0.5px'
        return err_username.innerHTML = 'Мин. количество символов: 5'
    } 
    if(/\//g.test(username.value)){
        err_username.style.visibility='visible'
        err_username.style.right='0.5px'
         return err_username.innerHTML = 'Недопустимый ввод'
}
    
    else{
        err_username.style.right='-300px'
         return err_username.style.visibility='hidden'
    }
}

function passwordValid(event) {
    if(password.value.length < 6) {
        err_password.style.visibility='visible'
        err_password.style.right='0.5px'
        return err_password.innerHTML = 'Мин. количество символов: 6'
    } 
    else {
        err_password.style.right='-300px'
        return err_password.style.visibility='hidden'
}
}



function passwordConfirmValid(event) {
    if(password_confirm.value != password.value) {
        err_password_confirm.style.visibility='visible'
        err_password_confirm.style.right='0.5px'
        return err_password_confirm.innerHTML = 'Не совпадают'
    } 
    else {
        err_password_confirm.style.right='-300px'
        return err_password_confirm.style.visibility='hidden'
    }
}

function emailValid(event) {
    if(email.value.length < 6) {
        err_email.style.visibility='visible'
        err_email.style.right='0.5px'
        return err_email.innerHTML = 'Недопустимый ввод'
    } 
    if ((/\w+\@\w+\./gi.test(email.value)) == false) {
        err_email.style.visibility='visible'
        err_email.style.right='0.5px'
        return err_email.innerHTML = 'Недопустимый ввод'
    }
    else{
        err_email.style.right='-300px'
     return err_email.style.visibility='hidden'
    }
}


document.addEventListener("DOMContentLoaded", function (event) {
     username = document.querySelector('#reg__username')
     password = document.querySelector('#reg__password')
     password_confirm = document.querySelector('#reg__password-confirm')
     email = document.querySelector('#reg__email')

     err_username = document.querySelector('.err_login')
     err_password = document.querySelector('.err_pass')
     err_password_confirm = document.querySelector('.err_pass-confirm')
     err_email = document.querySelector('.err_email')

    username.addEventListener('change', nameValid)
    password.addEventListener('change', passwordValid)
    password_confirm.addEventListener('change', passwordConfirmValid)
    email.addEventListener('change', emailValid)

})


