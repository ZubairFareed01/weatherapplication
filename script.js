// this api has 1000 request limit for a month

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7254514aa6msh145c41151070909p1f3c8fjsn8bf3dbae0fd0',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};


const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")
const weathericon = document.querySelector(".weathericon")
const weather = document.querySelector(".weather")
const para = document.createElement("p")
weather.appendChild(para)

async function getweather(city){

	const response = await fetch(url+city, options);
	const result = await response.json();
	console.log(result);
	document.querySelector(".temp").innerHTML = result.current.temp_c + "°c"
	document.querySelector(".humidity1").innerHTML = result.current.humidity + "%"
	document.querySelector(".windspeed").innerHTML = result.current.wind_kph + "Km/h"
    document.querySelector(".cityname").innerHTML = city
	weathericon.src = result.current.condition.icon
   para.innerHTML  = result.current.condition.text
 
}
	
	


searchbtn.addEventListener("click",()=>{
	getweather(searchbox.value)

})
getweather("karachi")

// this api has limited request for a month for free

// const url = 'https://open-weather13.p.rapidapi.com/city/';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '387650c63emsh4a02d877fe32d7ap15506cjsn34bd243a3061',
// 		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
// 	}
// };

// const searchbox = document.querySelector(".search input")
// const searchbtn = document.querySelector(".search button")
// const weathericon = document.querySelector(".weathericon")
// const weather = document.querySelector(".weather")

// async function getweather(city) {
// 	const response = await fetch(url + city, options);
// 	const result = await response.json();
// 	console.log(result);
// 	document.querySelector(".temp").innerHTML = Math.round((result.main.temp - 32) * 5 / 9) + "°c"
// 	document.querySelector(".humidity1").innerHTML = result.main.humidity + "%"
// 	document.querySelector(".windspeed").innerHTML = result.wind.speed + "Km/h"
// 	document.querySelector(".cityname").innerHTML = city
// 	const para = document.createElement("p")

//     if (para.innerHTML === "") {
// 	weather.appendChild(para).innerHTML = result.weather[0].main
		
// 	}  else{
// 		para.innerHTML = ""
// 	}
    

// 	if (result.weather[0].main === 'Clear') {
// 		weathericon.src = "images/clear.png";
// 	} 
// 	else if (result.weather[0].main === 'Clouds') {
// 		weathericon.src = "images/clouds.png";
// 	}
// 	else if (result.weather[0].main === 'Rain') {
// 		weathericon.src = "images/rain.png";
// 	}
// 	else if(result.weather[0].main === 'Haze'){
// 		weathericon.src = "images/mist.png";
// 	}
// 	else if(result.weather[0].main === 'Drizzle'){
// 		weathericon.src = "images/rain.png";
// 	}
// 	else if(result.weather[0].main === 'Snow'){
// 		weathericon.src = "images/snow.png";
// 	}
// 	else if(result.weather[0].main === 'Wind'){
// 		weathericon.src = "images/wind.png";
// 	}


// }
// getweather("karachi/pk")

// searchbtn.addEventListener("click", () => {
// 	getweather(searchbox.value)

// })

