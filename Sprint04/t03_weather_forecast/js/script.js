let url = "http://api.openweathermap.org/data/2.5/weather?q=Kharkiv&lang=ru&units=metric&appid=8e2ee5c3adc8808338aeccfcb55a0d18";

axios.get(url).then(res => 
{
    document.querySelector('.city').innerHTML = res.data.name;
    let state = "";
    state = res.data.weather[0].icon;
    currentImage.src = `http://openweathermap.org/img/wn/${state}@4x.png`;
    document.querySelector('.temp').innerHTML = res.data.main.temp;
    document.querySelector('.humidity').innerHTML = res.data.main.humidity;
    document.querySelector('.wind').innerHTML = res.data.wind.speed;
});

