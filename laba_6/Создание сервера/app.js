// const http = require('http');

// http.createServer(function (request, response) {
//     console.log('Url: ' + request.url);
//     console.log('Тип запроса: ' + request.method);
//     console.log('User-Agent: ' + request.headers['user-agent']);
//     console.log('Все заголовки');
//     console.log(request.headers);

//     response.setHeader('UserId', 12);
//     response.setHeader('Content-Type', 'text/html; charset=utf-8;');
//     response.write('<h2>Hello world!</h2>');
    
//     response.end();
// }).listen(3000);

const http = require('http');

http.createServer(function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8;');

    if (request.url === '/') {
        response.statusCode = 302;
        response.setHeader('Location', '/newpage');
    } else if (request.url == '/newpage') {
        response.write('<h2>New address</h2>');
    } else {
        response.write('<h2>Not found</h2>');
        response.statusCode = 404;
    }
}).listen(3000);