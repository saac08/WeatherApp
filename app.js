var button = document.getElementById('btnBuscar')
var searchBar = document.getElementById('searchBar')
var temp = document.getElementById('temperatura-Valor')
var desc = document.getElementById('temperatura-descripcion')
var nombre = document.getElementById('ubicacion')
var velViento = document.getElementById('viento-velocidad')

button.addEventListener('click', function () {
  //En ésta sección ingresamos la url de la API a la cual estaremos visitando
  //En el área donde aparece searchBar.value: Es para nosotros poder ingresar el nombre y recibir los datos en automático
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchBar.value + '&appid=ba020fd5467616a7a30019846f978fef&units=metric&lang=es')
    //El response a json funciona para poder recibir los datos en formato json y poder leerlos de mejor manera
    .then(response => response.json())
    .then(data => {
      var nameValue = data['name'];
      var tempValue = Math.round(data['main']['temp']);
      var descValue = data['weather'][0]['description'];
      var velocidadViento = data['wind']['speed'];

      nombre.textContent = nameValue;
      temp.textContent = tempValue + '°C';
      desc.textContent = descValue.toUpperCase();
      velViento.textContent = velocidadViento + 'm/s';


      //Agregamos iconos animados
      switch (data.weather[0].main) {
        case 'Thunderstorm':
          iconoAnimado.src = 'animated/thunder.svg'
          console.log('TORMENTA');
          break;
        case 'Drizzle':
          iconoAnimado.src = 'animated/rainy-2.svg'
          console.log('LLOVIZNA');
          break;
        case 'Rain':
          iconoAnimado.src = 'animated/rainy-7.svg'
          console.log('LLUVIA');
          break;
        case 'Snow':
          iconoAnimado.src = 'animated/snowy-6.svg'
          console.log('NIEVE');
          break;
        case 'Clear':
          iconoAnimado.src = 'animated/day.svg'
          console.log('LIMPIO');
          break;
        case 'Atmosphere':
          iconoAnimado.src = 'animated/weather.svg'
          console.log('ATMOSFERA');
          break;
        case 'Clouds':
          iconoAnimado.src = 'animated/cloudy-day-1.svg'
          console.log('NUBES');
          break;
        default:
          iconoAnimado.src = 'animated/cloudy-day-1.svg'
          console.log('por defecto');
      }
    })
    .catch(error => {
      console.log(error)

    })

    .catch(err => alert("Ciudad incorrecta"))
})