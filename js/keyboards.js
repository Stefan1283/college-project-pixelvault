let products = [
    {
        id: 1,
        name: "Mechanical Keyboard",
        price: 299.99,
        description: "A mechanical keyboard with RGB lighting.",
        category: "Keyboards",
        images: ["images/keyboard1.jpg"]
    },
    {
        id: 2,
        name: "Mini Keyboard",
        price: 229.99,
        description: "A compact mechanical keyboard for gaming.",
        category: "Keyboards",
        images: ["images/keyboard3.webp"]
    },
    {
        id: 3,
        name: "Wireless Keyboard",
        price: 259.99,
        description: "A wireless keyboard with a comfortable design.",
        category: "Keyboards",
        images: ["images/keyboard5.webp"]
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

