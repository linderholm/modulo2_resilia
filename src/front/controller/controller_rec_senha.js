const emailRec = document.getElementById('emailBoxRec')
const sendForm = document.getElementById('sendForm')


emailRec.addEventListener('blur', function () {
    if (emailRec.value.indexOf('@') == -1 || emailRec.value.indexOf('.') == -1 || emailRec.value.indexOf(" ") > 0 || emailRec.value.length < 10) {
        if (emailRec.classList.contains("is-valid")) {
            emailRec.classList.remove('is-valid')
        }
        emailRec.classList.add('is-invalid');
    } else {
        emailRec.classList.remove('is-invalid')
    }
})

sendForm.addEventListener('click', function (eve) {
    (eve).preventDefault()
    if (!emailRec.classList.contains("is-invalid") && emailRec.value.length > 0) {
        emailRec.classList.add('is-valid')
    }

})