// const express = require('express');
// const app = express();

// app.use('/index', function (request, response) {
//     response.redirect('https://xsltdev.ru');
// });

// app.listen(3000);

const express = require('express');
const app = express();

app.use('/home/bar', function (request, response) {
    response.redirect('/about');
});

app.use('/about', function (request, response) {
    response.send('<h1>About</h1>');
});

app.listen(3000);