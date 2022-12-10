/// ELEMENTS ///
const showProduct = document.querySelector("#dialog-cover");
const dom_product_view = document.querySelector(".table")
const dialog = document.querySelector("#dialog");
const cancel = document.querySelector("#cancel");
const add = document.querySelector("#add");


let products = [
    {
        name: "Casio F91W-1",
        price: 14,
        currency: "$",
        description: "Tending",
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623286881-best-small-watches-40mm-casio-f91w-1-1623286862.jpg?crop=1xw:1xh;center,top&resize=768%3A%2A",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Bertucci A-1R Fiel",
        price: 54,
        currency: "$",
        description: "Hight level Watch",
        image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623286935-best-small-watches-40mm-bertucci-10500-a-1r-1623286922.jpg?crop=1xw:1xh;center,top&resize=768%3A%2A",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "The Dial Watch",
        price: 45,
        currency: "$",
        description: "Good qurity",
        image: "https://magazine.chrono24.com/cdn-cgi/image/f=auto,metadata=none,q=65,w=720/2018/02/2-Rolex-Datejust-with-Jubilee-bracelet.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Seiko 5 Sports watch",
        price: 255,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/623bc40a25ea3c548d988cfb/master/w_960,c_limit/Seiko-5-Sports-watch.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Cartier Santos watch",
        price: 11300,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/623bc41425ea3c548d988d05/master/w_960,c_limit/Cartier-Santos-watch.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Unimatic UC3 watch",
        price: 700,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/623bc40625ea3c548d988cf7/master/w_960,c_limit/Unimatic-UC3-watch.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Blancpain Villeret watch",
        price: 200,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/623bc415fc3cabc7998e02e4/master/w_960,c_limit/Blancpain-Villeret-watch.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Doxa Sub 600T watch",
        price: 150,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/623bc41225ea3c548d988d03/master/w_960,c_limit/Doxa-Sub-600T-watch.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Doxa Sub 200 Sharkhunter",
        price: 50,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/612936f11e58f2cb8c895ac2/master/w_960,c_limit/Doxa-Sub-200-Sharkhunter-watch.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Longines Heritage Classic",
        price: 350,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/623bc40de8a4c0d7eab73ff8/master/w_960,c_limit/Longines-Heritage-Classic-watch.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Hamilton PSR",
        price: 10,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/623bc4118968f73dc1dff662/master/w_960,c_limit/Hamilton-PSR.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "TAG Heuer Autavia ",
        price: 15,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/635023aefe1e75ed8f7b8097/master/w_960,c_limit/tag.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Tudor Pelagos FXD",
        price: 20,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/623bc407beba6f3c93090248/master/w_960,c_limit/Tudor-Pelagos-FXD-watch.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Enicar CH326 watch",
        price: 5,
        currency: "$",
        description: "Good qurity",
        image: "https://media.gq.com/photos/623bc41225ea3c548d988d01/master/w_960,c_limit/Enicar-CH326-watch.jpg",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Nordgreen",
        price: 25,
        currency: "$",
        description: "Good qurity",
        image: "https://cdn.luxe.digital/media/20221108112707/luxury-watch-brand-nordgreen-review-luxe-digital-780x520.jpg.webp",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Piaget",
        price: 35,
        currency: "$",
        description: "Good qurity",
        image: "https://cdn.luxe.digital/media/2020/05/21140833/best-luxury-watch-brands-piaget-luxe-digital.jpg.webp",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Ulysse Nardin",
        price: 45,
        currency: "$",
        description: "Good qurity",
        image: "https://cdn.luxe.digital/media/2020/05/21140910/best-luxury-watch-brands-ulysse-nardin-luxe-digital.jpg.webp",
        edit: "../../../img/edit.png",
        delete: "../../../img/delete.png",
    },
    {
        name: "Hublot",
        price: 45000,
        currency: "$",
        description: "Good qurity",
        image: "https://cdn.luxe.digital/media/2020/05/21140728/best-luxury-watch-brands-hublot-luxe-digital.jpg.webp",
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
    document.getElementById("name").value = ""
    document.getElementById("price").value = ""
    document.getElementById("description").value = ""
    document.getElementById("currency").value = ""
    document.getElementById("image").value = ""

}


loadProduct()
renderProduct()