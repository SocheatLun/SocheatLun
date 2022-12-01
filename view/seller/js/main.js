/// ELEMENTS ///
const showProduct = document.querySelector("#dialog-cover");
const dom_product_view = document.querySelector(".table")
const dialog = document.querySelector("#dialog");
const cancel = document.querySelector("#cancel");
const add = document.querySelector("#add");


let products = [
    {
        name: "T-shirt",
        price: 50,
        currency: "$",
        description: "Good for boy",
        image: "../../../img/T-Shirt.png",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Nike Shoes",
        price: 500,
        currency: "$",
        description: "best shoes ever",
        image: "../../../img/Nike Shoes.png",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Watch",
        price: 150,
        currency: "$",
        description: "Hight level Watch",
        image: "../../../img/Watch.png",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
];


// LOCAL STORAGE ELEMENTS //
function saveProduct() {
    localStorage.setItem("products", JSON.stringify(products));
}

function loadProduct() {
    let productStorage = JSON.parse(localStorage.getItem("products"));
    if (productStorage !== null) {
        products = productStorage;

    }
}

// DISPLAY FUNCTION //
function showDialog(element) {
    showProduct.style.display = "block";
    document.querySelector("#add").textContent = "Add product"
}

function hideDialog(element) {
    showProduct.style.display = "none";
}

function onAddProduct() {
    showDialog(showProduct);
}
function onCancel(e) {
    hideDialog(showProduct);
}

// CATCH DATA OF PRODUCTS //
function renderProduct() {
    // Remove the card container and create a new one
    let dom_product_container = document.querySelector("#product-container");
    dom_product_container.remove();
    dom_product_container = document.createElement("tbody");
    dom_product_container.id = "product-container";
    dom_product_view.appendChild(dom_product_container);

    // 2 - For all products,  create a new tr (class : card), and append it the container
    for (let index = 0; index < products.length; index++) {
        let productList = products[index];

        // list item of product //
        let card = document.createElement("tr");
        card.className = "card";
        card.dataset.index = index;
        dom_product_container.appendChild(card);

        // create name of product //
        let name = document.createElement("td");
        name.className = "name";
        name.textContent = productList.name;
        card.appendChild(name);

        // create currency of product //
        let currency = document.createElement("td");
        currency.className = "currency";
        currency.textContent = productList.currency;
        card.appendChild(currency);

        //  create price of product //
        let price = document.createElement("td");
        price.className = "price";
        price.textContent = productList.price;
        card.appendChild(price);

        // create description of product //
        let description = document.createElement("td");
        description.className = "description";
        description.textContent = productList.description;
        card.appendChild(description);

        // create image of product //
        let image = document.createElement("td");
        let img = document.createElement("img");
        img.src = productList.image;
        image.appendChild(img);
        image.className = "image";
        image.appendChild(img);
        card.appendChild(image);

        // create Action of product //
        let actions = document.createElement('td');
        actions.className = "actions";
        card.appendChild(actions);

        // create edit button of product //
        let editButton = document.createElement("img");
        editButton.src = "../../../img/edit.png";
        editButton.addEventListener("click", editProduct);
        actions.appendChild(editButton);
        // create delete button
        let deleteButton = document.createElement("img");
        deleteButton.className = "trash"
        deleteButton.src = "../../../img/delete.png";
        deleteButton.addEventListener("click", removeProduct);
        actions.appendChild(deleteButton);

    }

}

// EDIT PRODUCTS //
function editProduct(event) {
    // TODO  Get the product index using the dataset
    let index = event.target.parentElement.parentElement.dataset.index;
    let product = products[index];
    // TODO   update the dialog with product informatin

    document.querySelector("#name").value = product.name;
    document.querySelector("#price").value = product.price;
    document.querySelector("#description").value = product.description;
    document.querySelector("#currency").value = product.currency;
    document.querySelector("#image").value = product.image;

    // save to local storage
    products.splice(index, 1);
    saveProduct()

    // TODO   Show the dialog
    showDialog(showProduct);
    document.querySelector("#add").textContent = "Edit"
}

// REMOVE_PRODUCT //
function removeProduct(event) {
    //  Get index
    let index = event.target.parentElement.parentElement.dataset.index;
    // Remove product
    products.splice(index, 1);

    // Save to local storage
    saveProduct();

    // Update the view
    renderProduct();
}


function onCreate() {
    // hideDialog
    hideDialog(showProduct)

    // Create new Product
    let newProduct = {};
    newProduct.name = document.getElementById("name").value;
    newProduct.price = document.getElementById("price").value;
    newProduct.description = document.getElementById("description").value;
    newProduct.currency = document.getElementById("currency").value;
    newProduct.image = document.getElementById("image").value;
    products.push(newProduct);
    
    // Save to local storage
    saveProduct();
    // Update the view
    renderProduct();
}
loadProduct()
renderProduct()
