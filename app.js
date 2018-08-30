// Add event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    let name = document.getElementById('name');
    let re = /^[a-zA-Z]{2,10}$/i;
 
    if (!re.test(name.value)) {
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip() {
    let zip = document.getElementById('zip');
    let re = /^[0-9]{5}(-[0-9]{4})?$/;
 
    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail() {
    let email = document.getElementById('email');
    // let re = /^([a-zA-Z_\-\.]+)@([a-zA-Z_\-\.]+)\.([a-zA-Z]{2,5})$/;
    let re = /^([\w\-\.]+)@([\w\-\.]+)\.([a-zA-Z]{2,5})$/;
 
    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone() {
    let phone = document.getElementById('phone');
    let re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
 
    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}