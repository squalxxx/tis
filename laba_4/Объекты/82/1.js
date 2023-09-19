let obj = {
    'name': 'Александр', 
    'surname': 'Подольский',
    'patronymic': 'Евгеньевич'
};

for (let key in obj) {
    console.log(obj['surname'] + ' ' + obj['name'] + ' ' + obj['patronymic']);
};
