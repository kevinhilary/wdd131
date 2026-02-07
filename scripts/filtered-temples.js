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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Nairobi Temple",
    location: "Nairobi City, Kenya",
    dedicated: "19778, Oct, 4",
    area: "20222",
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/nairobi-kenya-temple/nairobi-kenya-temple-61269.jpg"
  },
  {
    templeName : "Bangkok Thailand Temple",
    location : "Bangkok City",
    dedicated : "1978,  Nov 5",
    area: "20222",
    imageUrl : "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-62351.jpg"
  },
  {
    templeName : "Thailand Temple",
    location : "Bang City",
    dedicated : "1988,  Nov 5",
    area: "20228",
    imageUrl : "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-62356.jpg"
  }
];

const templeContainer = document.querySelector("#temples");

temples.forEach(temple => {
  displayTemple(temple);
});

function displayTemple(temple) {
  // create elements
  const card = document.createElement("section");
  const name = document.createElement("h3");
  const location = document.createElement("p");
  const dedicated = document.createElement("p");
  const area = document.createElement("p");
  const image = document.createElement("img");

  // fill content
  name.textContent = temple.templeName;
  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;
  dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;
  area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

  image.src = temple.imageUrl;
  image.alt = temple.templeName;
  image.loading = "lazy";

  // build the card
  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);
  card.appendChild(image);

  // add card to page
  templeContainer.appendChild(card);
}

// Filtering buttons
document.querySelector("#home").addEventListener("click", () => {
  displayTemples(temples); // show all
});

document.querySelector("#old").addEventListener("click", () => { 
  const oldTemples = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", () => {
  const newTemples = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", () => {
  const largeTemples = temples.filter(t => Number(t.area.replace(/,/g, "")) > 90000);
  displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", () => {
  const smallTemples = temples.filter(t => Number(t.area.replace(/,/g, "")) < 10000);
  displayTemples(smallTemples);
});

