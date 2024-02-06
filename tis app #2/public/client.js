var socket = io(); // Создаем сокетное соединение с server.js

// Отправляем событие startTimer на сервер, при клике на кнопку "Включить таймер"
document.getElementById('startTimer').addEventListener('click', function() {
    socket.emit('startTimer');
});

// Отправляем событие stopTimer на сервер, при клике на кнопку "Выключить таймер"
document.getElementById('stopTimer').addEventListener('click', function(event) {
    socket.emit('stopTimer');
});

// Меняем количество секунд на странице при помощи обработчика timerUpdate 
socket.on('timerUpdate', function(count) {
    document.getElementById('timer').textContent = count;
});