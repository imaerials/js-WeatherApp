console.log("hello")

let city = document.querySelector('.weather__city')
let day = document.querySelector('.weather__day');
let humidity = document.querySelector('.weather__indicator--humidity>.value')
let pressure = document.querySelector('.weather__indicator--pressure>.value')
let image = document.querySelector('.weather__image')
let temperature = document.querySelector('.weather__temperature>.value')
let searchInput = document.querySelector('.weather__search')
let apiKey = "27bd91e7c5a2859fd0e65317b9fa86ba"
let weatherBaseQuery = "http://api.openweathermap.org/data/2.5/weather?appid=" + apiKey

let getCityWeather = async (city) => {
    let endpoint = weatherBaseQuery + '&q=' + city + '&units=metric';
    let response = await fetch(endpoint);
    let weather = await response.json();
    return weather;

}
searchInput.addEventListener('keydown', async (e) => {
    if (e.keyCode === 13) {
        let weather = await getCityWeather(searchInput.value)
        console.log(weather)
        updateCurrentWeather(weather)

    }

})

let updateCurrentWeather = (currentWeatherInfo)=>{
    city.textContent = currentWeatherInfo.name
    humidity.textContent = currentWeatherInfo.main.humidity
    temperature.textContent = currentWeatherInfo.main.temp


}