import county from './city'

let myLat = 0, myLng = 0;
//위치값 받아오기
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
        myLat = position.coords.latitude;
        myLng = position.coords.longitude;
        getWeather(myLat, myLng, '');
    });
 }
function getWeather(lat, lon, city){
    const url1 = "https://api.openweathermap.org/data/2.5/forecast";
 
    const apikey = "800656633b707e49d0f3de4b57370855";
 
    let mydata;
    if(city === '') {
       mydata = {
          lat: lat,
          lon: lon,
          appid: apikey,
          units: 'metric',
          lang: 'kr'
       }
    }else{
      mydata = {
         q: 'gimpo-si',
         appid: apikey,
         units: 'metric',
         lang: 'kr'
      }
    }
    
    let params = Object.keys(mydata).map(key => key + '=' + mydata[key]).join('&');
    console.log(params);
 
    fetch(`${url1}?${params}`)
    .then( reson => reson.json())
    .then( rs => {
       console.log(rs);
       /*
        1.도시명 2.아이콘 3.현재온도 
       
       */
 
      //  console.log("도시명", county(rs.city.name));
      //  console.log("아이콘", rs.list[0].weather[0].icon);
      //  console.log("현재온도", rs.list[0].main.temp);

       document.getElementById("city").innerHTML = county(rs.city.name);
       document.getElementById("icon").src =  "./img/"+ rs.list[0].weather[0].icon +".svg";
       document.getElementById("nowtemp").innerHTML = Math.round(rs.list[0].main.temp) + "&deg;";

    })
}