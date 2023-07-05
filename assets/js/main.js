//Get Your Location//
const wrapper = document.querySelector('.wrapper'),
inputPart = document.querySelector('.input-part'),
infoTxt = inputPart.querySelector('.info-txt'),
inputField = inputPart.querySelector('.input'),
locationBtn = inputPart.querySelector('.button'),
weatherPart = wrapper.querySelector('.weather-part'),
wIcon = weatherPart.querySelector('img'),
arrowBack = wrapper.querySelector('.header i');

let api;
inputField.addEventListener("keyup", e => {
    if(e.key == "Enter" && inputField.value != "") {
        RequestApi(inputField.value)
    }    
});

//Request The  City API
function RequestApi (city) {
    api = `YOUR_API_KEY`;
    fetchData();
}

//Request The Position (Latitude And Longtitude)
function onSuccess (position) {
    const {latitude, longtitude} = position.coords;
    api = `YOUR_API_KEY`;
    fetch();
}

