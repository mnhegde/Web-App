function clickedButton(event) {
    event.preventDefault();

    fetch('/api/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(document.getElementById('city').value)
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        let weatherInfo = document.getElementById('weatherInfo')
        let header = document.createElement('h3')
        header.appendChild(document.createTextNode('Weather Info of ' + document.getElementById('city').value + ':'))
        weatherInfo.appendChild(header)

        p = document.createElement('p')
        p.innerHTML = 'Temperature: ' + fahrenheitToKelvin(myJson['Temperature'])
        weatherInfo.appendChild(p)

        p2 = document.createElement('p')
        p2.innerHTML = 'Pressure: ' + myJson['Pressure']
        weatherInfo.appendChild(p2)

        p3 = document.createElement('p')
        p3.innerHTML = 'Humidity: ' + myJson['Humidity']
        weatherInfo.appendChild(p3)

        p4 = document.createElement('p')
        p4.innerHTML = 'Description: ' + toTitleCase(myJson['Description']);
        weatherInfo.appendChild(p4)
    })
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function fahrenheitToKelvin(temp) {
    return Math.round(((temp-273.15)*1.8)+32) + '° F'	
}

form = document.getElementById('form');
form.addEventListener('submit', clickedButton)
