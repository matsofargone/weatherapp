// Import our custom CSS
import '../scss/style.scss';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';
import getWeather from './weather';
import {displayPage ,displayCard} from './displayController';


displayPage();

//TODO display fetched values in card 



const form = document.getElementById('weather-form');

form.addEventListener('submit', function(e){
    const input = document.getElementById('form-input');
    const displaydiv = document.getElementById('display-div');
    displaydiv.innerHTML = '';
    displayCard(input.value ,'25', 'test');
    input.value = '';
    
    
    e.preventDefault();
    
})





