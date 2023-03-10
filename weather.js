const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks,Alaska,U.S.&appid=4d1c13712cf5dccb7d5aaa806274cf9b&units=imperial"

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {

            throw Error(await response.text());
        }
        } catch (error) {
            
            console.log(error);
        }
    }

    function displayResults(weatherData) {
        currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
        const iconsrc =`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/' ${data.currentConditions.icon}'.svg`;
        const desc = weatherData.weather[0].description;

        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', desc);
        captionDesc.textContent = desc;
    }
    let icon = data.currentConditions.icon;
    let imageSrc = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${icon}.svg`;
    document.querySelector('#weather_icon').src = imageSrc;
    document.querySelector('#weather_icon').alt = `${data.currentConditions.conditions} icon`;
    document.querySelector('#ws').textContent = data.currentConditions.windspeed;
    

apiFetch();