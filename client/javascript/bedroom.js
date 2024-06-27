const items = [
  {
    id: 1,
    image: "atlas_queen_size_bed",
    name: "atlas queen size bed ",
    price: 29999,
    Total: 29999,
    quantity: 0,
  },
  {
    id: 2,
    image: "atlas_single_bed",
    name: "atlas single bed",
    price: 19999,
    Total: 19999,
    quantity: 0,
  },
  {
    id: 3,
    image: "atto_2_door_wardrobe",
    name: "atto 2 door wardrobe ",
    price: 15999,
    Total: 15999,
    quantity: 0,
  },
  {
    id: 4,
    image: "bedside_table",
    name: "bedside table",
    price: 12000,
    Total: 12000,
    quantity: 0,
  },
  {
    id: 5,
    image: "brilliant_bedside_table",
    name: "brilliant bedside table",
    price: 17999,
    Total: 17999,
    quantity: 0,
  },
  {
    id: 6,
    image: "buster_2_door_wardrobe",
    name: "buster 2 door wardrobe",
    price: 19999,
    Total: 19999,
    quantity: 0,
  },
  {
    id: 7,
    image: "carvin_4_door_wardrobe",
    name: "carvin 4 door wardrobe",
    price: 45000,
    Total: 45000,
    quantity: 0,
  },
  {
    id: 8,
    image: "chimp_single_bed",
    name: "chimp single bed",
    price: 20000,
    Total: 20000,
    quantity: 0,
  },
  {
    id: 9,
    image: "drawers",
    name: "drawers ",
    price: 6000,
    Total: 6000,
    quantity: 0,
  },
  {
    id: 10,
    image: "emerson_dressin_table",
    name: "emerson dressin table",
    price: 15000,
    Total: 15000,
    quantity: 0,
  },
  {
    id: 11,
    image: "keegan_3_door_wardrobe",
    name: "keegan 3 door wardrobe",
    price: 25000,
    Total: 25000,
    quantity: 0,
  },
  {
    id: 12,
    image: "sigma_queen_bed",
    name: "sigma queen bed",
    price: 21000,
    Total: 21000,
    quantity: 0,
  },
  {
    id: 13,
    image: "navigo_single_bed",
    name: "navigo single bed",
    price: 20000,
    Total: 20000,
    quantity: 0,
  },
  {
    id: 14,
    image: "nora_single_bed",
    name: "nora single bed",
    price: 25000,
    Total: 25000,
    quantity: 0,
  },
  {
    id: 15,
    image: " olivia_bedside_table",
    name: "olivia bedside table",
    price: 8000,
    Total: 8000,
    quantity: 0,
  },
  {
    id: 16,
    image: " preston_dressing_table",
    name: "preston dressing table",
    price: 12000,
    Total: 12000,
    quantity: 0,
  },
  {
    id: 17,
    image: "wardrobe_with_mirror",
    name: "wardrobe with mirror",
    price: 28000,
    Total: 28000,
    quantity: 0,
  },
  {
    id: 18,
    image: "winchester_3_piece_bedroom",
    name: "winchester 3 piece bedroom",
    price: 99999,
    Total: 99999,
    quantity: 0,
  },
  {
    id: 19,
    image: "winchester_dressing_table",
    name: "winchester dressing table",
    price: 15000,
    Total: 15000,
    quantity: 0,
  },
  {
    id: 20,
    image: "zeal_queen_size_bed",
    name: "zeal queen size bed",
    price: 22000,
    Total: 22000,
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
