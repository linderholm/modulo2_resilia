const email = document.getElementById("emailBox")
const joinLogin = document.getElementById("join")
const password = document.getElementById("passwordBox")
const bodyPag = document.querySelector('body')
const checkBox = document.getElementById("checkBox")


bodyPag.addEventListener('click', function () {
    joinLogin.setAttribute("disabled", "disabled")
    if (email.value.indexOf('@') !== -1 && email.value.indexOf('.') !== -1 && email.value.length > 10 && password.value.length > 6 && checkBox.checked) {
        return joinLogin.removeAttribute("disabled");
    }
})

email.addEventListener('blur', function () {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 || email.value.indexOf(" ") > 0 || email.value.length < 10) {
        return email.classList.add('is-invalid');
    } else {
        return email.classList.remove('is-invalid');
    }
})
password.addEventListener('blur', function () {
    if (password.value.length > 6) {
        return password.classList.remove('is-invalid');
    } else {
        return password.classList.add('is-invalid')

    }

})
joinLogin.addEventListener('click', function (eve) {
    eve.preventDefault()
})
