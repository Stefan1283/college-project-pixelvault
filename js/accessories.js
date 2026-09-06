let products = [
    {
        id: 9,
        name: "Gaming Mouse Pad",
        price: 24.99,
        description: "A large mouse pad with a smooth surface.",
        category: "Accessories",
        images: ["images/pad1.jpg"]
    },
    {
        id: 10,
        name: "USB Hub",
        price: 19.99,
        description: "A compact USB hub with four USB ports.",
        category: "Accessories",
        images: ["images/hub1.jpg"]
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

