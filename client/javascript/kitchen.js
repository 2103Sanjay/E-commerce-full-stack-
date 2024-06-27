const items = [
  {
    id: 1,
    image: "2 Bamboo Chopping Boards",
    name: "2 Bamboo Chopping Boards",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 2,
    image: "2 Polypropylene Oil Containers",
    name: "2 Polypropylene Oil Containers",
    price: 1500,
    Total: 1500,
    quantity: 0,
  },
  {
    id: 3,
    image: "2-Tier Fruit Basket",
    name: "2-Tier Fruit Basket",
    price: 3000,
    Total: 3000,
    quantity: 0,
  },
  {
    id: 4,
    image: "3Pcs Aluminium Non-Stick Cookware Set",
    name: "3Pcs Aluminium Non-Stick Cookware Set",
    price: 3200,
    Total: 3200,
    quantity: 0,
  },
  {
    id: 5,
    image: "6Pcs Stainless Steel Knife Block Set",
    name: "6Pcs Stainless Steel Knife Block Set",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 6,
    image: "18 Pet Canisters",
    name: "18 Pet Canisters",
    price: 2550,
    Total: 2550,
    quantity: 0,
  },
  {
    id: 7,
    image: "Aluminium Tadka Pan",
    name: "Aluminium Tadka Pan",
    price: 3500,
    Total: 3500,
    quantity: 0,
  },
  {
    id: 8,
    image: "Automatic Soap Dispenser",
    name: "Automatic Soap Dispenser",
    price: 5000,
    Total: 5000,
    quantity: 0,
  },
  {
    id: 9,
    image: "Burlington 3Pcs Aluminium Non-Stick Cookware Set",
    name: "Burlington 3Pcs Aluminium Non-Stick Cookware Set ",
    price: 3500,
    Total: 3500,
    quantity: 0,
  },
  {
    id: 10,
    image: "Cotton Apron",
    name: "Cotton Apron",
    price: 1500,
    Total: 1500,
    quantity: 0,
  },
  {
    id: 11,
    image: "Glass Oil Bottle with Stopper",
    name: "Glass Oil Bottle with Stopper",
    price: 2000,
    Total: 2000,
    quantity: 0,
  },
  {
    id: 12,
    image: "Metal Barbeque Grill",
    name: "Metal Barbeque Grill",
    price: 30000,
    Total: 30000,
    quantity: 0,
  },
  {
    id: 13,
    image: "Silicone Egg Ring",
    name: "Silicone Egg Ring",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 14,
    image: "Slotted Spoon",
    name: "Slotted Spoon",
    price: 3500,
    Total: 3500,
    quantity: 0,
  },
  {
    id: 15,
    image: " Solid Non-Stick Wok",
    name: "Solid Non-Stick Wok",
    price: 3500,
    Total: 3500,
    quantity: 0,
  },
  {
    id: 16,
    image: " Stainless Steel Ham Slicer",
    name: "Stainless Steel Ham Slicer",
    price: 950,
    Total: 950,
    quantity: 0,
  },
  {
    id: 17,
    image: "Stainless Steel Induction Wok",
    name: "Stainless Steel Induction Wok",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 18,
    image: "Stainless Steel Multi-Utility Basket",
    name: "Stainless Steel Multi-Utility Basket",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 19,
    image: "4Pcs Funnel Set",
    name: "4Pcs Funnel Set",
    price: 2200,
    Total: 2200,
    quantity: 0,
  },
  {
    id: 20,
    image: "5Pcs Aluminium Non-Stick Cookware",
    name: "5Pcs Aluminium Non-Stick Cookware",
    price: 8000,
    Total: 8000,
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
