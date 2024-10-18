var confirmedWood = localStorage.getItem("confirmedWood");
var confirmedColor = localStorage.getItem("confirmedColor");
var confirmedCloth = localStorage.getItem("confirmedCloth");
var confirmedCapacity = localStorage.getItem("confirmedCapacity");
var username = localStorage.getItem("username");
var mobile = localStorage.getItem("mobile");
var pincode = localStorage.getItem("pincode");
var locality = localStorage.getItem("locality");
var addressfull = localStorage.getItem("addressfull");
var city = localStorage.getItem("city");
var state = localStorage.getItem("state");
var landmark = localStorage.getItem("landmark");
var alternatephone = localStorage.getItem("alternatephone");

var address = document.getElementById("adress_content");
address.innerHTML = `${username}<br>${addressfull}<br>${city},${state},${pincode}<br>Phone Number:${mobile}`;

var totalCost = localStorage.getItem("totalCost");
totalCost = parseInt(totalCost);
console.log(totalCost);
let cartItems = localStorage.getItem("ProductInCart");
cartItems = JSON.parse(cartItems);

var cartList = document.getElementById("product_container");
Object.values(cartItems).map((item) => {
  cartList.innerHTML += `
    <div class="products">
      <img src="${item.image}.jpg" class="finalimg"/>
      <h3>${item.name}</h3>
      <h3>${item.quantity}</h3>
      <h3>${item.price}</h3>
    </div>`;
});

let delivery = 1299;
var itemCost = document.getElementById("cost");
itemCost.innerText = totalCost;

var deliveryCost = document.getElementById("cost_delivery");
deliveryCost.innerText = delivery;

var totalCostfinal = document.getElementById("total_cost");
totalCostfinal.innerText = totalCost + delivery;
