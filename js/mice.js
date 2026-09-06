let products = [
    {
        id: 4,
        name: "Gaming Mouse",
        price: 179.99,
        description: "A precise gaming mouse with adjustable DPI.",
        category: "Mice",
        images: ["images/mouse1.jpg"]
    },
    {
        id: 5,
        name: "Wireless Mouse",
        price: 219.99,
        description: "A wireless gaming mouse with a long battery life.",
        category: "Mice",
        images: ["images/mouse3.jpg"]
    },
    {
        id: 6,
        name: "Lightweight Mouse",
        price: 159.99,
        description: "A lightweight mouse designed for fast movement.",
        category: "Mice",
        images: ["images/mouse5.avif"]
    }
];

let container = document.getElementById("productContainer");

for (let product of products) {
    container.innerHTML += `
        <div>
            <img src="${product.images[0]}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>₪${product.price}</p>
            <button onclick="addToBasket(${product.id})">Add to Basket</button>
        </div>
    `;
}

