const express = require('express');
const app = express();
const port = 5001;

const bodyParser = require('body-parser');

app.get('/', function(request, response) {
    return response.send('Hello World!');
});

const todos = [
    {id: 1, text: 'Brush teeth', completed: false},
    {id: 2, text: 'Pet dog', completed: false},
    {id: 3, text: 'Make coffee', completed: false},
    {id: 4, text: 'Write code', completed: false}
];

app.get('/todos', function (request, response) {
    return response.send(todos);
});

app.get('/todos/:id', function (request, response) {
    const id = request.params.id;
    let result = null;
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        if (todo.id == id) {
            result = todo;
        }
    }
    return response.send(result);
});

app.post('/todos', function (request, response) {
    const newId = todos.length + 1;
    const newTodo = {
        id: newId,
        todo: request.body.todo,
        completed: false
    }
    todos.push(newTodo);
    return response.send(todos);
});

app.put('/todos/', function (request, response) {
    let todoToUpdate = todos.find((todo) => {
        return todo.id == request.body.id;
    })

    todoToUpdate = {
        id: request.body.id,
        todo: request.body.todo,
        completed: request.body.completed
    };

    let index = todos.findIndex((todo) => {
        return todo.id == request.body.id;
    });
    todos[index] = todoToUpdate;

    return response.send(todos);
});

app.delete('/todos/:id', function (request, response) {
    let index = todos.findIndex((todo) => {
        return todo.id == request.params.id
    });

    todos.splice(index, 1);

    return response.send(todos);
});

const familys = [
    {id: 1, family: 'Sologub'},
    {id: 2, family: 'Pukas'},
]

app.get('/familys', function (request, response) {
    return response.send(familys);
});

app.get('/familys/:id', function (request, response) {
    const id = request.params.id;
    let result = null;
    for (let i = 0; i < familys.length; i++) {
        const family = familys[i];
        if (family.id == id) {
            result = family;
        }
    }
    return response.send(result);
});

app.post('/familys', function (request, response) {
    const newId = familys.length + 1;
    const newFamily = {
        id: newId,
        family: request.body.family,
    }
    familys.push(newFamily);
    return response.send(familys);
});

app.put('/familys/', function (request, response) {
    let familyToUpdate = familys.find((family) => {
        return family.id == request.body.id;
    })

    familyToUpdate = {
        id: request.body.id,
        family: request.body.family,
    };

    let index = familys.findIndex((family) => {
        return family.id == request.body.id;
    });
    familys[index] = familyToUpdate;

    return response.send(familys);
});

app.delete('/familys/:id', function (request, response) {
    let index = familys.findIndex((family) => {
        return family.id == request.params.id
    });

    familys.splice(index, 1);

    return response.send(familys);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Node ToDo API is running on port: ${port}`);
});