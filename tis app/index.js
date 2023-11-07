const citySelect = document.getElementById('city-select');
const weatherInfo = document.getElementById('weather-info');
const errorText = document.getElementById('error-text');

const cityHeader = document.getElementById('city-header');
const weatherIcon = document.getElementById('weather-icon');
const weatherCur = document.getElementById('weather-cur');
const weatherFeels = document.getElementById('weather-feels');
const weatherMin = document.getElementById('weather-min');
const weatherMax = document.getElementById('weather-max');

citySelect.addEventListener('change', (event) => {
    const city = event.target.value;
    const API_KEY = '5e2b5a926d14ca174f1a5f655d1eef0f';

    if (city == 'null') {
        errorText.style = 'display: none';
        weatherInfo.style = 'display: none';
    } else if (city == 'MyLocation') {
        errorText.style = 'display: none';

        if (!navigator.geolocation) {
            showError('NotSuppurtedGeo', 'Геолокация не поддерживается вашим браузером');
        } else {
            navigator.geolocation.getCurrentPosition(success);
        }

        function success(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${API_KEY}`)
                .then(response => response.json())
                .then(data => {showData(data)})
                .catch(error => {showError(error, 'Произошла ошибка получения данных о погоде!')});  
        }
    } else {
        errorText.style = 'display: none';
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {showData(data)})
            .catch(error => {showError(error, 'Произошла ошибка получения данных о погоде!')});
    }
});

function showData (data) {
    weatherInfo.style = 'display: block';
    cityHeader.innerHTML = `${data.name}`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherCur.innerHTML = `Температура воздуха: ${data.main.temp} °C, ${data.weather[0].description}`;
    weatherFeels.innerHTML = `Ощущается как: ${data.main.feels_like} °C`;
    weatherMin.innerHTML = `Минимальная температура воздуха: ${data.main.temp_min} °C`;
    weatherMax.innerHTML = `Максимальная температура воздуха: ${data.main.temp_max} °C`;
}

function showError (error, text) {
    weatherInfo.style = 'display: none';
    errorText.style = 'display: block';
    console.error(error);
    errorText.textContent = text;
}