let products = [
    {
        id: 7,
        name: "Gaming Headset",
        price: 249.99,
        description: "A comfortable gaming headset with a clear microphone.",
        category: "Headsets",
        images: ["images/headset1.jpg"]
    },
    {
        id: 8,
        name: "Wireless Headset",
        price: 329.99,
        description: "A wireless headset with surround sound.",
        category: "Headsets",
        images: ["images/headset3.jpg"]
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

