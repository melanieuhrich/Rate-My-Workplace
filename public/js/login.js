const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    // const passconfirm = document.querySelector('#password-confirm').value.trim();
    // const firstName = document.querySelector('#first-name').value.trim();
    // const lastName = document.querySelector('#last-name').value.trim();

    // const passTrue = false;
    // if(password === passconfirm){
    //     return passTrue = true;
    // }
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);