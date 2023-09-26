const express = require('express');
const app = express();

app.use(function (request, response) {
    response.sendFile(__dirname + '/index.html');
    response.sendStatus(200).send('Ресурс не найден!');
});

app.listen(3000);