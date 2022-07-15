function checkerForm(e) {
    let fail = 0
    if(username.value.length < 5) fail++
    if(/\//g.test(username.value)) fail++
    if(password.value.length < 6) fail++
    if(password_confirm.value != password.value) fail++
    if(email.value.length < 6) fail++
    if ((/\w+\@\w+\./gi.test(email.value) == false)) fail++
    if (fail > 0) {
        error_msg.style.visibility='visible'
        error_msg.style.top='0px'
        setTimeout(function(){
            error_msg.style.visibility='hidden'
            error_msg.style.top='-25px'
            
        }, 3000)
        return false
    }
    else return true
    
}






document.addEventListener("DOMContentLoaded", function (event) {

    username = document.querySelector('#reg__username')
    password = document.querySelector('#reg__password')
    password_confirm = document.querySelector('#reg__password-confirm')
    email = document.querySelector('#reg__email')
    error_msg = document.querySelector('.error-form')

    submit = document.querySelector('.reg-submit') 
    submit.addEventListener('click', checkerForm)
})