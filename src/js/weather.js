import { weatherKey } from "../../key";
import { displayCard, hideLoading,  } from "./displayController";


async function getWeather(location) {
    try {
            const response =  await fetch(`https://api.weatherapi.com/v1/current.json?key=${weatherKey}&q=${location}`, );
            const weatherData = await response.json();
            
            
            const getDetails = await function(weatherObj) {
                //Create object of API call values I want to access
                let location = weatherObj.location.name;
                let temperature = weatherObj.current.temp_f
                let condition = weatherObj.current.condition.text;
                let iconSrc = weatherObj.current.condition.icon;

                let dataOBj = {'location':location, 'temperature':temperature + ' F', 'condition':condition, 'image':iconSrc };
                return displayCard(dataOBj.location, dataOBj.temperature, dataOBj.condition, dataOBj.image);

            }

        let detailsToDisplay = getDetails(weatherData);
            
        return detailsToDisplay;
    } catch(error) {
         const input = document.getElementById('form-input');
         alert("Please Enter a valid location");
         input.value = '';
        //  hideLoading();

         
    } 
}









export default getWeather;
