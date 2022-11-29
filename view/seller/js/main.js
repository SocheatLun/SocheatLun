/// DOM ELEMENTS///
const product = document.querySelector("#dialog-cover");
const dialog = document.querySelector("#dialog");
const cancel = document.querySelector("#cancel");
const add = document.querySelector("#add");

function showDialog(element) {
    product.style.display = "block";
}

function hideDialog(element) {
    product.style.display = "none";
}
// hide(content)
// show(content)
function onAddProduct() {
    showDialog(product);
}
function onCancel(e) {
    hideDialog(product);
}

function createProduct(){
    let table = document.querySelector("tbody")
    let listOfProduct = document.createElement("tr")
    let productName = document.createElement("td")
    productName.textContent = document.querySelector("#name").value;
    let productPrice =  document.createElement("td")
    productPrice.textContent = document.querySelector("#price").value;
    let productDescription =  document.createElement("td")
    productDescription.textContent = document.querySelector("#description").value;
    let productCurrency =  document.createElement("td")
    productCurrency.textContent = document.querySelector("#currency").value;
    let productImage =  document.createElement("td")
    productImage.textContent = document.querySelector("#image").value;
    listOfProduct.appendChild(productName);
    listOfProduct.appendChild(productPrice);
    listOfProduct.appendChild(productDescription);
    listOfProduct.appendChild(productCurrency);
    listOfProduct.appendChild(productImage);
    table.appendChild(listOfProduct);
    console.log(table);
}
createProduct()


