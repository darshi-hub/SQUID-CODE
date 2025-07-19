const socket = io();
const room = 'squad_room'; // or dynamic per alliance
socket.emit('joinRoom', room);

socket.on('message', data => {
  const p = document.createElement('p');
  p.className = 'glitch';
  p.textContent = `${data.user}: ${data.text}`;
  document.getElementById('messages').append(p);
});

document.getElementById('sendBtn').onclick = () => {
  const text = document.getElementById('msgInp').value;
  socket.emit('message', {room, user: sessionStorage.username, text});
};
