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
        id: 4,
        name: "Gaming Mouse",
        price: 179.99,
        description: "A precise gaming mouse with adjustable DPI.",
        category: "Mice",
        images: ["images/mouse1.jpg"]
    },
    {
        id: 7,
        name: "Gaming Headset",
        price: 249.99,
        description: "A comfortable gaming headset with a clear microphone.",
        category: "Headsets",
        images: ["images/headset1.jpg"]
    }
];

let container = document.getElementById("featuredProducts");

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

