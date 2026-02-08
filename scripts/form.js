// Product array (normally from an external source)
const products = [
    { name: "Smart Thermostat" },
    { name: "Wireless Doorbell" },
    { name: "Security Camera" },
    { name: "Smart Light Bulb" },
    { name: "Home Router" }
];

// Populate product select
const productSelect = document.getElementById("product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Footer content
document.getElementById("footer-name").textContent = "Kevin Hillary";
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;