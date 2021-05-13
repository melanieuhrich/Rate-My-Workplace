var loginFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  console.log(name, password)
    if (name && password) {
      const response = await fetch('/query/users/login', {
        method: 'POST',
        body: JSON.stringify({ name, password }),
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
    .getElementById('login-submit')
    .addEventListener('click', loginFormHandler);