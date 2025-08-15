function showweatherDetails(event) {
    event.preventDefault();
    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;

    const apikey = "e56cd5ef06ca7f6fed0e05bf4227142d";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;


    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            const show = `<p> <strong>Name:</strong> ${data.name} </p>
<p> <strong>temperatura:</strong>  ${data.main.temp} </p>
<p> <strong>wind speed:</strong>  ${data.wind.speed} </p>`

            document.getElementById("weatherInfo").innerHTML = show;

        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Falló al obtener el clima. Por favor, inténtalo de nuevo.</p>`;
        }
        )


}

document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);

