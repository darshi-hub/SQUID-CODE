document.getElementById('authForm').onsubmit = async e => {
  e.preventDefault();
  const user = {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    role:     document.getElementById('role').value
  };
  const res = await fetch('/api/auth/signup', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body:JSON.stringify(user)
  });
  if (res.ok) window.location = '/games.html';
  else alert('Auth failed');
};
