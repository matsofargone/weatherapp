const displayPage = function(){
    const contentDiv = document.getElementById('content');
    const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>';
    const container = document.getElementById('container');

    //*Create form
    const form = document.createElement('form');
    const formRowDiv = document.createElement('div');
    const col1 = document.createElement('div');
    const formGroup = document.createElement('div');
    const inputGroup = document.createElement('div');
    const input = document.createElement('input');
    const button = document.createElement('button');
    const description = document.createElement('p');
    //* Div for Forecast card
    const weatherContentDiv = document.createElement('div');
    
    


    description.innerHTML = 'Search a City, State, Country or Zip Code below';

     
    weatherContentDiv.setAttribute('id','display-div');
    weatherContentDiv.setAttribute('class', 'container-fluid mx-auto w-25 h-50');
    

    //*Apply attributes and styles
    form.setAttribute('class', 'mb-4');
    form.setAttribute('id', 'weather-form');
    formRowDiv.setAttribute('class', 'row  mx-auto w-25 mt-5');
    col1.setAttribute('class', 'col-sm');
    formGroup.setAttribute('class', 'form-group');
    inputGroup.setAttribute('class', 'input-group');
    inputGroup.setAttribute('id', 'inputs');
    input.setAttribute('class', 'form-control input-group');
    input.setAttribute('required', 'required');
    input.setAttribute('id', 'form-input');
    button.setAttribute('class', 'input-group-btn btn btn-secondary');
    button.setAttribute('id', 'form-button');
    button.innerHTML = searchIcon;
    description.setAttribute('class', 'pt-4  lead');

    //*Appending Elements
    contentDiv.append(description); 
    contentDiv.append(form);
    container.append(weatherContentDiv);
    col1.appendChild(formGroup);
    formGroup.appendChild(inputGroup);
    inputGroup.appendChild(input);
    inputGroup.appendChild(button);
    form.appendChild(formRowDiv);
    formRowDiv.appendChild(col1);

   
}


const displayCard = function(location, temperature, condition, image) {
    const displaydiv = document.getElementById('display-div');
    const container = document.getElementById('container');
    //create card 
    const card = document.createElement('div');
    const cardHeaderDiv = document.createElement('div');
    const cardBodyDiv = document.createElement('div');
    const h5 = document.createElement('h5');
    const p = document.createElement('p');
    const icon = new Image();
    icon.src = image;
    icon.alt = 'Weather Icon';
    card.setAttribute('class', 'card m-4 text-center');
    cardHeaderDiv.setAttribute('class','card-header display-6 text-uppercase fw-bold');
    cardBodyDiv.setAttribute('class','card-body');
    h5.setAttribute('class', 'card-title');
    p.setAttribute('class', 'card-text');

    //elements in card
    //insert title in header 
    cardHeaderDiv.innerText = location;
    h5.innerText = temperature;
    p.innerText = condition;

    card.appendChild(cardHeaderDiv);
    card.appendChild(cardBodyDiv);
    cardBodyDiv.appendChild(h5);
    cardBodyDiv.appendChild(p);
    cardBodyDiv.appendChild(icon);

    displaydiv.appendChild(card);
    container.appendChild(displaydiv);

}

const loading = function() {
    const displayDiv = document.getElementById('content');
    const loader = document.createElement('div');
    const span = document.createElement('span');

    loader.setAttribute('class', 'spinner-border text-secondary ms-4');
    loader.setAttribute('role','status');
    loader.setAttribute('id','loader');
    span.setAttribute('class','visually-hidden');
    span.innerText = 'Loading...';

    loader.appendChild(span);
   displayDiv.appendChild(loader);


}

const hideLoading = function() {
    const loader = document.getElementById('loader');
    loader.classList.remove('spinner-border');
    loader.classList.remove('text-secondary');
}


// const displayAlert = function(){
//     //In the future can make custom popup 
// }

export  {displayPage, displayCard, loading, hideLoading};