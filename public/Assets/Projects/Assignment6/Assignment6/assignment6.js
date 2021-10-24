const openWeatherAPIKey = "ebac6fbd55ed7c600dd570f9b501bfa0";

const city = document.querySelector("#city");

let map;

let currPosition;

const displayInformation = (data, res) => {

    const main = data.main;

    const currTemp = main.temp;

    const maxTemp = main.temp_max;

    const minTemp = main.temp_min;

    const { pressure, humidity } = main;

    res.innerHTML = `

<span>Current Temperature: </span>

<span>${currTemp + "K"} </span>

<br>

<span>Max Temperature: </span>

<span>${maxTemp + "K"} </span>

<br>

<span>Min Temperature: </span>

<span>${minTemp + "K"} </span>

<br>

<span>Pressure: </span>

<span>${pressure} </span>

<br>

<span>Humidity: </span>

<span>${humidity + "%"} </span>

<br>

   `;

};

const getWeatherCity = () => {

    const city_res = document.querySelector("#city_res");

    const city_name = city.value;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${openWeatherAPIKey}`

    )

        .then((res) => res.json())

        .then((data) => {

            console.log(data);

            displayInformation(data, city_res);

        })

        .catch((err) => console.log(err));

};

const getWeatherGeo = () => {

    const place_res = document.querySelector("#place_res");

    const success = (pos) => {

        const lat = pos.coords.latitude;

        const lon = pos.coords.longitude;

        fetch(

            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherAPIKey}`

        )

            .then((res) => res.json())

            .then((data) => {

                console.log(data);

                displayInformation(data, place_res);

            })

            .catch((err) => console.log(err));

    };

    const error = (err) => {

        console.log(err);

    };

    var options = {

        enableHighAccuracy: true,

        timeout: 5000,

        maximumAge: 0,

    };

    navigator.geolocation.getCurrentPosition(success, error, options);

};

const getLocationOnMap = () => {

    const map_res = document.querySelector("#map");

    const success = (pos) => {

        const lat = pos.coords.latitude;

        const lon = pos.coords.longitude;

        map = new google.maps.Map(document.getElementById("map"), {

            center: { lat: lat, lng: lon },

            zoom: 8,

        });

        map_res.classList.remove("none");

    };

    const error = (err) => {

        console.log(err);

    };

    var options = {

        enableHighAccuracy: true,

        timeout: 5000,

        maximumAge: 0,

    };

    navigator.geolocation.getCurrentPosition(success, error, options);

};

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {

        center: { lat: -34.397, lng: 150.644 },

        zoom: 8,

    });

}