function rocketClick() {
    if(window.screen['width'] > 1200) {
    document.querySelector(".main__rocket-img").style.transform = 'rotate(10deg) translate(500px, -1800px)';
}
    popup.style.visibility = 'visible'
    popup_body.style.top = '0px'
    
}
function check() {
    alert('chgeck')
}
function hiddenPopup() {
    popup_body.style.top = '-750px'
    popup.style.visibility = 'hidden'
    document.querySelector(".main__rocket-img").style.transform = 'rotate(10deg) translate(0px, 0px)';
}

function hiddenPopupWithout(event) {
    if (event.target.classList[0] == 'popup') {
        popup_body.style.top = '-750px'
        popup.style.visibility = 'hidden'
        document.querySelector(".main__rocket-img").style.transform = 'rotate(10deg) translate(0px, 0px)';
    }
}

function openReg(event) {
    if(event.target.classList[2] != "a__focus") {
    a_reg.classList.toggle('a__focus')
    a_login.classList.toggle('a__focus')
    popup_auth.style.visibility = 'hidden'
    popup_auth.style.position = 'absolute'
    popup_reg.style.left = '0px'
    popup_auth.style.right = '500px'
    popup_reg.style.visibility = 'visible'
    }
}

function openLogin() {
    if(event.target.classList[2] != "a__focus") {
    a_reg.classList.toggle('a__focus')
    a_login.classList.toggle('a__focus')
    popup_reg.style.visibility = 'hidden'
    popup_auth.style.position = 'relative'
    popup_auth.style.right = '0px'
    popup_reg.style.left = '500px'
    popup_auth.style.visibility = 'visible'
    }
}



document.addEventListener("DOMContentLoaded", function (event) {

    let btn_start = document.querySelector(".main__btn-start");

    popup = document.querySelector(".popup");
    popup_body = document.querySelector(".popup__body");
    popup_close = document.querySelector(".popup__close")

    a_login = document.querySelector(".a__login")
    a_reg = document.querySelector(".a__reg")

    popup_reg = document.querySelector(".wrapper-form-reg")
    popup_auth = document.querySelector(".wrapper-form")




    btn_start.addEventListener("click", rocketClick)

    popup_close.addEventListener("click", hiddenPopup)
    // popup.addEventListener('click', hiddenPopupWithout)

    a_login.addEventListener("click", openLogin)
    a_reg.addEventListener("click", openReg)


})