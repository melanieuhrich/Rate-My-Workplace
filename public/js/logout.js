const logout = async (e) => {
  e.preventDefault();
  console.log('we hit the logout button!')
    const response = await fetch('/query/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  };
    document.getElementById('logout-button').addEventListener('click', logout);
