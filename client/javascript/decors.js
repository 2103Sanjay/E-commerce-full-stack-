const items = [
  {
    id: 1,
    image: "african_woman_figurine",
    name: "african woman figurine",
    price: 5000,
    Total: 5000,
    quantity: 0,
  },
  {
    id: 2,
    image: "artificial _flower _pot",
    name: "artificial flower pot",
    price: 4999,
    Total: 4999,
    quantity: 0,
  },
  {
    id: 3,
    image: "butterfly_wall_accent",
    name: "butterfly wall accent ",
    price: 3000,
    Total: 3000,
    quantity: 0,
  },
  {
    id: 4,
    image: "cycle_framed_wall_art",
    name: "cycle framed wall art ",
    price: 3500,
    Total: 3500,
    quantity: 0,
  },
  {
    id: 5,
    image: "electric_table_lamp",
    name: "electric table lamp",
    price: 4500,
    Total: 4500,
    quantity: 0,
  },
  {
    id: 6,
    image: "glass_decorative_vase",
    name: "glass decorative vase ",
    price: 7000,
    Total: 7000,
    quantity: 0,
  },
  {
    id: 7,
    image: "hanging_planter",
    name: "hanging planter ",
    price: 4500,
    Total: 4500,
    quantity: 0,
  },
  {
    id: 8,
    image: "iron_leaf_wallaccent",
    name: "iron leaf wallaccent ",
    price: 3000,
    Total: 3000,
    quantity: 0,
  },
  {
    id: 9,
    image: "tricycle_planter",
    name: "tricycle planter ",
    price: 4000,
    Total: 4000,
    quantity: 0,
  },
  {
    id: 10,
    image: "lamp_movable shade",
    name: "lamp movable shade",
    price: 6000,
    Total: 6000,
    quantity: 0,
  },
  {
    id: 11,
    image: "marshmallow_table_lamp",
    name: "marshmallow table lamp ",
    price: 6000,
    Total: 6000,
    quantity: 0,
  },
  {
    id: 12,
    image: "metal_wall_light",
    name: "metal wall light ",
    price: 5500,
    Total: 5500,
    quantity: 0,
  },
  {
    id: 13,
    image: "metalwall_sconces",
    name: "metalwall sconces ",
    price: 6200,
    Total: 6200,
    quantity: 0,
  },
  {
    id: 14,
    image: "picture_frame",
    name: "picture frame",
    price: 2000,
    Total: 2000,
    quantity: 0,
  },
  {
    id: 15,
    image: "set_of_7_wooden photo_frames",
    name: "set of 7 wooden photo frames",
    price: 7000,
    Total: 7000,
    quantity: 0,
  },
  {
    id: 16,
    image: "succulent _glass -Jar",
    name: "succulent glass Jar",
    price: 1500,
    Total: 1500,
    quantity: 0,
  },
  {
    id: 17,
    image: "table_lamps",
    name: "table lamps",
    price: 7700,
    Total: 7700,
    quantity: 0,
  },
  {
    id: 18,
    image: "telsa_wall_clock",
    name: "telsa wall clock ",
    price: 4000,
    Total: 4000,
    quantity: 0,
  },
  {
    id: 19,
    image: "Tree_wall_decor",
    name: "Tree wall decor",
    price: 4600,
    Total: 4600,
    quantity: 0,
  },
  {
    id: 20,
    image: "wooden_photo_frame",
    name: "wooden photo frame",
    price: 1200,
    Total: 1200,
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
