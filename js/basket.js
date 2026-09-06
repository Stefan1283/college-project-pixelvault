let basket = JSON.parse(localStorage.getItem("basket")) || [];

function addToBasket(id){
    let product = products.find(function(product) {
        return product.id == id;
    });

    let item = basket.find(function(item) {
        return item.id == id;
    });

    if (item) {
        item.quantity++;
    } else {
        basket.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    }

    localStorage.setItem("basket", JSON.stringify(basket));
    alert(product.name + " added to basket");
}

function removeFromBasket(id){
    basket = basket.filter(function(item) {
        return item.id != id;
    });

    localStorage.setItem("basket", JSON.stringify(basket));
    displayBasket();
}

function displayBasket(){
    let table = document.getElementById("basketTable");
    let total = 0;

    table.innerHTML = "";

    for (let item of basket){
        let itemTotal = item.price * item.quantity;
        total += itemTotal;

        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>₪${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>₪${itemTotal.toFixed(2)}</td>
                <td><button onclick="removeFromBasket(${item.id})">Remove</button></td>
            </tr>
        `;
    }

    document.getElementById("basketTotal").textContent = "Total: ₪" + total.toFixed(2);
}

if (document.getElementById("basketTable")) {
    displayBasket();
}

