const Year = new Date().getFullYear();
const firstparagraph = document.getElementById('Year');
firstparagraph.textContent = `©${Year} ✨Kassamani Kevin Hilary✨ KENYA`

const lastModified = document.lastModified;
const secondPara = document.getElementById('last-modified');
secondPara.textContent = `Last Modified: ${lastModified}`;

const temperature = 10;
const WindSpeed = 5;

const windChillSpan = document.querySelector('#windchill');

function calculateWindChill(temp, speed){
    return(
        13.2 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16)).toFixed(1);
}

if (temperature <= 10 && WindSpeed > 4.8){
    windChillSpan.textContent = `${calculateWindChill(temperature, WindSpeed)}℃`;
}
else{
    windChillSpan.textContent = 'N/A';
}