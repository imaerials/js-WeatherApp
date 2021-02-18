console.log("hello")

let city = document.querySelector('.weather__city')
let day = document.querySelector('.weather__day');
let humidity = document.querySelector('.weather__indicator--humidity>.value')
let pressure = document.querySelector('.weather__indicator--pressure>.value')
let image = document.querySelector('.weather__image')
let temperature = document.querySelector('.weather__temperature>.value')
let searchInput = document.querySelector('.weather__search')
let apiKey = "27bd91e7c5a2859fd0e65317b9fa86ba"
let weatherBaseQuery = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=" + apiKey
let forecastBaseQuery = "https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=" + apiKey

let cityForecastbyId = async (id) => {
    let endpoint = forecastBaseQuery + '&id=' + id
    let response = await fetch(endpoint)
    let forecast = await response.json();
    let forecastList = forecast.list;
    let daily = [];

    forecastList.forEach(day => {
        let date = new Date(day.dt_txt.replace(' ','T'));
        let hours= date.getHours()
        if (hours === 12) {
            daily.push(day)
            
        }
         
    })
    console.log(daily)

    //console.log(forecastList)
}

let getCityWeather = async (city) => {
    let endpoint = weatherBaseQuery + '&q=' + city;
    let response = await fetch(endpoint);
    //console.log(response)

    let weather = await response.json();
    return weather;

}
searchInput.addEventListener('keydown', async (e) => {
    if (e.keyCode === 13) {
        let weather = await getCityWeather(searchInput.value)
        let cityId = weather.id
        //console.log(cityId)
        cityForecastbyId(cityId)
        updateCurrentWeather(weather)

    }

})

let updateCurrentWeather = (currentWeatherInfo) => {
    city.textContent = currentWeatherInfo.name
    humidity.textContent = currentWeatherInfo.main.humidity
    temperature.textContent = Math.round(currentWeatherInfo.main.temp)


}