const items = [
  {
    id: 1,
    image: "alora_wood",
    name: "alora wood",
    price: 3200,
    Total: 3200,
    quantity: 0,
  },
  {
    id: 2,
    image: "barware_set-1",
    name: "barware set",
    price: 7000,
    Total: 7000,
    quantity: 0,
  },
  {
    id: 3,
    image: "barware_set-2",
    name: "barware set",
    price: 7500,
    Total: 7500,
    quantity: 0,
  },
  {
    id: 4,
    image: "black_plate",
    name: "black plate",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 5,
    image: "champagne_glass",
    name: "champagne glass",
    price: 4000,
    Total: 4000,
    quantity: 0,
  },
  {
    id: 6,
    image: "china_plate",
    name: "china plate",
    price: 2000,
    Total: 2000,
    quantity: 0,
  },
  {
    id: 7,
    image: "cooler_glasses",
    name: "cooler glasses",
    price: 3000,
    Total: 3000,
    quantity: 0,
  },
  {
    id: 8,
    image: "copper_jug",
    name: "copper jug",
    price: 4000,
    Total: 4000,
    quantity: 0,
  },
  {
    id: 9,
    image: "cutlery_set",
    name: "cutlery set",
    price: 4000,
    Total: 4000,
    quantity: 0,
  },
  {
    id: 10,
    image: "dinner_plates",
    name: "dinner plates",
    price: 4500,
    Total: 4500,
    quantity: 0,
  },
  {
    id: 11,
    image: "printed_plate",
    name: "printed plate",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 12,
    image: "serving_bowl",
    name: "serving bowl",
    price: 600,
    Total: 600,
    quantity: 0,
  },
  {
    id: 13,
    image: "serving_tray-1",
    name: "serving tray",
    price: 2000,
    Total: 2000,
    quantity: 0,
  },
  {
    id: 14,
    image: "serving_tray-2",
    name: "serving_tray",
    price: 650,
    Total: 650,
    quantity: 0,
  },
  {
    id: 15,
    image: "steel_cutlery",
    name: "steel cutlery",
    price: 3000,
    Total: 3000,
    quantity: 0,
  },
  {
    id: 16,
    image: "steel_forks",
    name: "steel forks",
    price: 650,
    Total: 650,
    quantity: 0,
  },
  {
    id: 17,
    image: "stonewareprinted_plate",
    name: "stoneware printed plate",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 18,
    image: "vacuum_Jug",
    name: "vacuum Jug",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 19,
    image: "wexford_zulay_set",
    name: "wexford zulay set",
    price: 3000,
    Total: 3000,
    quantity: 0,
  },
  {
    id: 20,
    image: "whitedinner_plate",
    name: "white dinner plate",
    price: 1000,
    Total: 1000,
    quantity: 0,
  },
];

const productContainer = document.getElementById("product-container");

items.forEach((item) => {
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const image = document.createElement("img");
  image.classList.add("product_img");
  image.src = item.image + ".jpg";
  image.alt = item.name;
  productDiv.appendChild(image);

  const name = document.createElement("h2");
  name.classList.add("product_name");
  name.textContent = item.name;
  productDiv.appendChild(name);

  const price = document.createElement("p");
  price.classList.add("price");
  price.textContent = `Price:${item.price}`;
  productDiv.appendChild(price);

  const addtocart = document.createElement("button");
  addtocart.classList.add("btn_addtocart");
  addtocart.textContent = `ADD TO CART`;
  productDiv.appendChild(addtocart);

  productContainer.appendChild(productDiv);
});

let carts = document.querySelectorAll(".btn_addtocart");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumber(items[i]);
    totalPrice(items[i]);
  });
}
var totalproducs = document.getElementById("productCount");
function onLoadCartNumber() {
  let productNumber = localStorage.getItem("cartNumbers");
  if (productNumber) {
    totalproducs.innerText = productNumber;
  }
}

function cartNumber(items) {
  let productNumber = localStorage.getItem("cartNumbers");

  productNumber = parseInt(productNumber);
  if (productNumber) {
    localStorage.setItem("cartNumbers", productNumber + 1);
    totalproducs.innerText = productNumber + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    totalproducs.innerText = 1;
  }
  setProduct(items);
}

function setProduct(items) {
  let cartItems = localStorage.getItem("ProductInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[items.name] == undefined) {
      cartItems = {
        ...cartItems,
        [items.name]: items,
      };
    }
    cartItems[items.name].quantity += 1;
  } else {
    items.quantity = 1;
    cartItems = {
      [items.name]: items,
    };
  }

  localStorage.setItem("ProductInCart", JSON.stringify(cartItems));
}

function totalPrice(items) {
  var totalCost = localStorage.getItem("totalCost");
  if (totalCost != null) {
    totalCost = parseInt(totalCost);
    localStorage.setItem("totalCost", totalCost + items.price);
  } else {
    localStorage.setItem("totalCost", items.price);
  }
  console.log(totalCost);
}

onLoadCartNumber();
