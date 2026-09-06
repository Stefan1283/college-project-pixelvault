// EXERCISE SCRIPT!!
const products = [];
const categories = {"notebooks":"notebooks",
     "phones":"phone", "desktopPCs":"desktopPCs"};
categories.notebooks;

class Product{
    constructor(id, name, price, description, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
    }
}

class Category{
    constructor(name){
        this.name = name;
    }
}

class Cart{
    constructor(storage = []){
        this.storage = storage;
    }
    add(product){
        this.storage.push(product);
    }
    remove(product){
        this.storage.remove(product);
    }
    removeAll(){
        this.storage.length = 0;
    }
}

const product = new Product(123, "Notebook", 20, "Apple", new Category(categories.notebooks));
console.log(product);
