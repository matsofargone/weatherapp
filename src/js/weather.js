import { weatherKey } from "../../key";



async function getWeather(location) {
    try {
        const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${location}`, );
        const weatherData = await response.json();
            
        console.log(weatherData);  
    } catch(error) {
         console.log('Nothing there buddy');
    } 
}


export default getWeather;
