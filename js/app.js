// D0 not use api key like this
const apiKey = `742b3822e06f2c9f2abdbf08f93766e3`

const loadTemperature = (city) =>{
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    fetch(URL)
    .then(response => response.json())
    .then(data => displayTemp(data))
}
// const displayTemp = (data) =>{
//     const temperature = document.getElementById('temperature')
//     const searchField = document.getElementById('search-field').value;
//     document.getElementById('search-btn').addEventListener('click',function(){

//         const view = loadTemperature(searchField)
//         console.log(data);
//     })
// }
const displayTemp = (data) =>{
    const temperature = document.getElementById('temperature')
    temperature.innerText = data.main?.temp? data.main.temp : "Not found";
    const weather = document.getElementById('weather');
    weather.innerText = data.weather[0].main;
    const searchField = document.getElementById('search-field').value;
    const location = document.getElementById('location')
    location.innerText = data.name;
    console.log(data.weather[0]);
}

    document.getElementById('search-btn').addEventListener('click',function(){
    const temperature = document.getElementById('temperature')
    const searchField = document.getElementById('search-field').value;
    loadTemperature(searchField);

    })
loadTemperature('feni')
