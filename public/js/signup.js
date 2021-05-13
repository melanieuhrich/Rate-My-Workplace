// const router = require("../../controllers/api/user-routes");
// const { User } = require("../../models");

var signupFormHandler = async(event) => {
    event.preventDefault();
    //console.log('hit the sign up button')
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const passConfirm = document.querySelector('#passCon-signup').value.trim();
    const name = document.querySelector('#user-signup').value.trim();
    // const passTrue = false;

    // if (password === passConfirm){
    //     alert('Passwords match!');
    //     return passTrue = true;
    // } else if (password !== passConfirm){
    //     alert('Passwords do not match, please try again.')
    //     return;
    // }
    if (!checkPassword(password, passConfirm)){
        console.log('password do not match!');
        return;
    }

    if (email && password && name) {
        const response = await fetch('/query/users/', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
          });

          if (response.ok) {
            document.location.replace('/');
          } else {
            alert('Failed to create account.');
          }
    }

}

function checkPassword(p1, p2){
    if (p1 === p2){
        return true;
    }else {
        return false;
    }
}

document
    .getElementById('signup-submit')
    .addEventListener('click', signupFormHandler);