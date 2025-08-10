const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const label = document.getElementById('label');
const messages = document.getElementById('messages');

const userName = prompt('Enter your name');
label.textContent = userName.toUpperCase();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', { userName: userName, message: input.value });
    input.value = '';
  }
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.textContent = msg.userName + ': ' + msg.message;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
