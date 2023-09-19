function checkAge() {
    var message = confirm("Вам есть 18 лет?");

    if (message) {
        alert("Вам разрешен доступ");
    } else {
        alert("Доступ пользователю запрещен");
    };
};