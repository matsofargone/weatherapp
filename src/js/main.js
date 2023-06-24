// Import our custom CSS
import '../scss/style.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import getWeather from './weather';
import {displayPage , loading, hideLoading} from './displayController';


displayPage();

//TODO Loading mechanisim 




const form = document.getElementById('weather-form');

form.addEventListener('submit', function(e){
    const input = document.getElementById('form-input');
    const displaydiv = document.getElementById('display-div');
    // const hideloadingTimeoutID = setTimeout(hideLoading, 2000);
    displaydiv.innerHTML = '';
    // loading();
    getWeather(input.value);
    

    
    
    input.value = '';
    
    
    e.preventDefault();
    
})





