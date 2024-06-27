const items = [
  {
    id: 1,
    image: "Aubree Dapple Ceramic Soap Dispenser",
    name: "Aubree Dapple Ceramic Soap Dispenser",
    price: 625,
    Total: 625,
    quantity: 0,
  },
  {
    id: 2,
    image: "Aubree Della Ceramic Soap Dispenser",
    name: "Aubree Della Ceramic Soap Dispenser",
    price: 895,
    Total: 895,
    quantity: 0,
  },
  {
    id: 3,
    image: "Aubree Raven Metal Towel Bar",
    name: "Aubree Raven Metal Towel Bar ",
    price: 500,
    Total: 500,
    quantity: 0,
  },
  {
    id: 4,
    image: "Aubree Vince Ceramic Soap Dispenser",
    name: "Aubree Vince Ceramic Soap Dispenser",
    price: 890,
    Total: 890,
    quantity: 0,
  },
  {
    id: 5,
    image: "Bamboo Metal 3-Tier Clothes Drying Rack",
    name: "Bamboo Metal 3-Tier Clothes Drying Rack",
    price: 1500,
    Total: 1500,
    quantity: 0,
  },
  {
    id: 6,
    image: "Emery Frugal Polypropylene Toilet Brush with Holder",
    name: "Emery Frugal Polypropylene Toilet Brush with Holder",
    price: 850,
    Total: 850,
    quantity: 0,
  },

  {
    id: 7,
    image: "Indus Brooks Bamboo Cobweb Brush",
    name: "Indus Brooks Bamboo Cobweb Brush",
    price: 800,
    Total: 800,
    quantity: 0,
  },
  {
    id: 8,
    image: "Omnia Polypropylene 4-Tier Drawers",
    name: "Omnia Polypropylene 4-Tier Drawers",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 9,
    image: "Omnia Regina Stainless Steel Single Garment Rack",
    name: "Omnia Regina Stainless Steel Single Garment Rack ",
    price: 1750,
    Total: 1750,
    quantity: 0,
  },
  {
    id: 10,
    image: "Omnia Stainless Steel 2-Tier Foldable Clothes Drying Rack",
    name: "Omnia Stainless Steel 2-Tier Foldable Clothes Drying Rack",
    price: 1500,
    Total: 1500,
    quantity: 0,
  },
  {
    id: 11,
    image: "Orion Aluminium 3-Tier Corner Rack",
    name: "Orion Aluminium 3-Tier Corner Rack",
    price: 1800,
    Total: 1800,
    quantity: 0,
  },
  {
    id: 12,
    image: "Orion Double Sided Vanity Mirror with Stand",
    name: "Orion Double Sided Vanity Mirror with Stand",
    price: 2700,
    Total: 2700,
    quantity: 0,
  },
  {
    id: 13,
    image: "Orion Polystyrene 3-Section Storage Box",
    name: "Orion Polystyrene 3-Section Storage Box",
    price: 2500,
    Total: 2500,
    quantity: 0,
  },
  {
    id: 14,
    image: "Orion Polystyrene Storage Tray",
    name: "Orion Polystyrene Storage Tray",
    price: 180,
    Total: 1500,
    quantity: 0,
  },
  {
    id: 15,
    image: " Orion Suction Polypropylene Bath Storage Rack",
    name: "Orion Suction Polypropylene Bath Storage Rack",
    price: 250,
    Total: 250,
    quantity: 0,
  },
  {
    id: 16,
    image: " Pacific Winston Set of 8 Wooden Clothes Hangers",
    name: "Pacific Winston Set of 8 Wooden Clothes Hangers",
    price: 1500,
    Total: 1500,
    quantity: 0,
  },
  {
    id: 17,
    image: "Sedona Stainless Steel Pedal Bin",
    name: "Sedona Stainless Steel Pedal Bin",
    price: 190,
    Total: 190,
    quantity: 0,
  },
  {
    id: 18,
    image: "Slate Swan Kids Polyresin Soap Dispenser",
    name: "Slate Swan Kids Polyresin Soap Dispenser",
    price: 1500,
    Total: 1500,
    quantity: 0,
  },
  {
    id: 19,
    image: "Wilton Cameron Seagrass and Iron Laundry Basket with Lid",
    name: "Wilton Cameron Seagrass and Iron Laundry Basket with Lid",
    price: 1562,
    Total: 1562,
    quantity: 0,
  },
  {
    id: 20,
    image: "Wilton Reed Seagrass Storage Hamper",
    name: "Wilton Reed Seagrass Storage Hamper",
    price: 4000,
    Total: 4000,
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
  addtocart.setAttribute("id", "btn_addtocart");
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
