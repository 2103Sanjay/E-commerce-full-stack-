function displayCart() {
  var totalCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem("ProductInCart");
  cartItems = JSON.parse(cartItems);
  var productContainer = document.querySelector(".product-container");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="products">
        <div class="product_img">
          <img src="${item.image}.jpg" class="cartimg"/>
        </div>
        <div class="product_name">
          <h2>${item.name}</h2>
        </div>
        <div class="product_price">
          <h2>${item.price}</h2>
        </div>
        <div class="product_quantity">  
          <h2>${item.quantity}</h2>
        </div>
        <div class="product_total">
          <h2>${item.quantity * item.price}</h2>
        </div>
      </div>`;
    });
    var totalCost = localStorage.getItem("totalCost");
    productContainer.innerHTML += `
      <div class="totalcost">
        <h2>TOTAL:${totalCost}</h2>
        <button onClick="remove()" class="remove" ><img src="remove.png" vlass"remove_btn"/></button>`;
  }
}

var email

function remove() {
  let cartItems = localStorage.getItem("ProductInCart");
  let productNumber = localStorage.getItem("cartNumbers");
  var totalCost = localStorage.getItem("totalCost");
  cartItems = JSON.parse(cartItems);
  totalCost = localStorage.removeItem("totalCost");
  cartItems = localStorage.removeItem("ProductInCart");
  productNumber = localStorage.removeItem("cartNumbers");
  window.location.reload();
}

displayCart();
