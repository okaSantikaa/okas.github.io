let usernameInput = document.getElementById('usernameInput')
let regUsernameInput = document.getElementById('reg-usernameInput')
let passwordInput = document.getElementById('passwordInput')
let regPasswordInput = document.getElementById('reg-passwordInput')
let admin = document.getElementById('admin');
let user = document.getElementById('user')
let pw = document.getElementById('pw')
let loginButton = document.getElementById('loginButton')
let logoutButton = document.getElementById('logoutButton')
let logButton = document.getElementById('log-button')
let regButton = document.getElementById('reg-button')

admin.style.display = "none";
user.style.display = "none";
logoutButton.style.display = "none";
logButton.style.display = "none";

//register page
function onReg() {
    localStorage.setItem("username", regUsernameInput.value);
    localStorage.setItem("pw", regPasswordInput.value);
    logButton.style.display = ("block")

    if (regUsernameInput.value && regPasswordInput.value) {
        regUsernameInput.style.display = "none"
        regPasswordInput.style.display = "none"
        regButton.style.display = "none"
    }
}

if (localStorage.getItem('username')) {
    regUsernameInput.style.display = "none"
    regPasswordInput.style.display = "none"
    logButton.style.display = "block"
}




//login page
function onLogin() {
    localStorage.getItem('username');
    localStorage.getItem('pw');
    if (usernameInput.value == localStorage.getItem('username') && passwordInput.value == localStorage.getItem('pw')) {
        alert('you loged in')
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
            usernameInput.style.display = "none"
            passwordInput.style.display = "none"
            loginButton.style.display = "none"
            localStorage.setItem("role", "admin");
            user.style.display = "none";
            admin.style.display = "block";
        } else {
            usernameInput.style.display = "none"
            passwordInput.style.display = "none"
            loginButton.style.display = "none"
            localStorage.setItem("role", "user");
            admin.style.display = "none"
            user.style.display = "block"
        }
    } else {
        alert('error')
    }


    if (localStorage.getItem('username')) {
        usernameInput.style.display = "none"
        passwordInput.style.display = "none"
        loginButton.style.display = "none"
        logoutButton.style.display = "block"
        if (localStorage.getItem('role') == "admin") {
            user.style.display = "none";
            admin.style.display = "block";
        } else {
            admin.style.display = "none"
            user.style.display = "block"
        }
    }



}
function onLogout() {

    localStorage.clear();
    location.reload();
}