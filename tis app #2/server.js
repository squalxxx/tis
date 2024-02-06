const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

// Создаём сервер
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

var timerInterval;
var timerActive = false;

// Обработчик подключения нового клиента
io.on('connection', (socket) => {
    // Обработчик события startTimer от клиента
    socket.on('startTimer', () => { 
        if (!timerActive) {
            timerActive = true;
            io.emit('timerStarted'); // Отправляем событие timerStarted всем клиентам
            startTimer(); // Вызываем функцию запуска таймера
        }
    });

    // Обработчик события stopTimer от клиента
    socket.on('stopTimer', () => {
        if (timerActive) {
            timerActive = false;
            io.emit('timerStopped'); // Отправляем событие timerStopped всем клиентам
            stopTimer(); // Вызываем функцию остановки таймера
        }
    });
});

// Функция для запуска таймера
function startTimer() {
    var count = 0;
    timerInterval = setInterval(() => {
        count++;
        var time = formatTime(count); // Преобразуем времени в формат "00:00:00"
        io.emit('timerUpdate', time); // Отправляем обновление счетчика таймера всем клиентам
    }, 1000);
}

// Функция для остановки таймера
function stopTimer() {
    clearInterval(timerInterval);
}

// Функция для форматирования времени в формат "00:00:00"
function formatTime(time) {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor((time - (hours * 3600)) / 60);
    var seconds = time - (hours * 3600) - (minutes * 60);

    var formattedTime = '';
    if (hours < 10) {
        formattedTime += '0' + hours;
    } else {
        formattedTime += hours;
    }
    formattedTime += ':';

    if (minutes < 10) {
        formattedTime += '0' + minutes;
    } else {
        formattedTime += minutes;
    }
    formattedTime += ':';

    if (seconds < 10) {
        formattedTime += '0' + seconds;
    } else {
        formattedTime += seconds;
    }

    return formattedTime;
}

// Отправляем файл index.html как ответ на запрос (редирект)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});

// Подключаем статические файлы
app.use(express.static(path.join(__dirname, 'public')));

// Запуск сервера
server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
