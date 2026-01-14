const thisyear = new Date().getFullYear();
const footerparagraph1 = document.querySelector('footer p');
footerparagraph1.textContent = `© ${thisyear} ✨ KEVIN HILARY ASHIALI ✨ KENYA`;

const lastModified = document.lastModified;
const footerparagraph2 = document.getElementById('secondPara');
footerparagraph2.textContent = `Last Modification: ${lastModified}`;

const mainnav = document.querySelector('.nav')
const hambutton = document.querySelector('#menu')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
})

