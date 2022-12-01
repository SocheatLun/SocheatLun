const container = document.querySelector(".container");
const dom_product_view = document.querySelector(".main");
const products = JSON.parse(localStorage.getItem("products"));
const dom_dailog_product = document.querySelector(".dailog-container");

function renderProduct(){
    // Remove the card container and create a new one
    let dom_product_container = document.querySelector("#container");
    dom_product_container.remove();
    dom_product_container = document.createElement("main");
    dom_product_container.id = "container";
    dom_product_view.appendChild(dom_product_container);

    // 2 - For all products,  create a new div (class : item), and append it the container
    for (let index = 0; index < products.length; index++) {
        let productList = products[index];

        // list card of product //
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = index;
        dom_product_container.appendChild(card);

        // create careate header of product //
        let cardHeader = document.createElement("div");
        cardHeader.className = "card-header";
        card.appendChild(cardHeader);
        let imageOfProduct = document.createElement("img");
        imageOfProduct.className = "img";
        imageOfProduct.src = productList.image;
        cardHeader.appendChild(imageOfProduct);

         // create careate botton of product //
        let cardBotton = document.createElement("div");
        cardBotton.className = "card-botton";
        
        let productName = document.createElement("span")
        productName.className = "product-name";
        productName.textContent = productList.name;
        cardBotton.appendChild(productName);

        let detail = document.createElement("span");
        detail.className = "product-detail";
        detail.textContent = "more detail";
        cardBotton.appendChild(detail);
        card.appendChild(cardBotton);

        let productPrice = document.createElement("div");
        productPrice.className = "product-price";

        let productPriceSign = document.createElement("span");
        productPriceSign.className = "product-price-sign";
        productPriceSign.textContent = productList.currency
        productPrice.appendChild(productPriceSign);
        
        let productPriceText = document.createElement("span");
        productPriceText.className = "product-price";
        productPriceText.textContent = productList.price;
        productPrice.appendChild(productPriceText);
        cardBotton.appendChild(productPrice);

        // create description of product //
        let cart = document.createElement("div");
        cart.className = "cart";
        
        let cartSign = document.createElement("img");
        cartSign.className = "cart-sign";
        cartSign.src = "../../img/cart.png";
        cart.appendChild(cartSign);
        
        let cartText = document.createElement("span");
        cartText.className = "cart-text";
        cartText.textContent = "Add to cart";
        cart.appendChild(cartText);
        cardBotton.appendChild(cart);
        console.log(card)
    }

}
renderProduct()
