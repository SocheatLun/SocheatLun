/// DOM ELEMENTS///
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



function saveProduct() {
    localStorage.setItem("products", JSON.stringify(products));
}
saveProduct()
function loadProduct() {
    let productStorage = JSON.parse(localStorage.getItem("products"));
    if (productStorage !== null) {
        products = productStorage;

    }
}
loadProduct()

function showDialog(element) {
    showProduct.style.display = "block";
}

function hideDialog(element) {
    showProduct.style.display = "none";
}
// hide(content)
// show(content)
function onAddProduct() {
    showDialog(showProduct);
}
function onCancel(e) {
    hideDialog(showProduct);
}

function renderProduct() {
    // Remove the card container and create a new one
    let dom_product_container = document.querySelector("#product-container");
    dom_product_container.remove();
    dom_product_container = document.createElement("tbody");
    dom_product_container.id = "questions-container";
    dom_product_view.appendChild(dom_product_container);

    // 2 - For all questions,  create a new div (class : item), and append it the container
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

        // create edit button of product //
        let edit = document.createElement("td");
        let edit_img = document.createElement("img");
        edit_img.src = productList.edit;
        edit.appendChild(edit_img);
        edit.className = "edit-image";
        edit.appendChild(edit_img);
        card.appendChild(edit);

        // create delete button of product //
        let deleteIcon = document.createElement("td");
        let delete_img = document.createElement("img");
        delete_img.src = productList.delete;
        deleteIcon.appendChild(delete_img);
        deleteIcon.className = "edit-image";
        deleteIcon.appendChild(delete_img);
        card.appendChild( deleteIcon);
    }
}
renderProduct()
