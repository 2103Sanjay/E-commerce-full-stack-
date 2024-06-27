const items = [
  {
    id: 1,
    image: "4-Seater_Dining_Set",
    name: "4 Seater Dining Set",
    price: 26500,
    Total: 26500,
    quantity: 0,
  },
  {
    id: 2,
    image: "6-Seater_Dining_Set",
    name: "6 Seater Dining Set",
    price: 55000,
    Total: 55000,
    quantity: 0,
  },
  {
    id: 3,
    image: "Adana_Mango_Wood_Sideboard",
    name: "Adana Mango Wood Sideboard",
    price: 24600,
    Total: 24600,
    quantity: 0,
  },
  {
    id: 4,
    image: "Dastkari_Mango_Wood_Bar_Curio",
    name: "Dastkari Mango Wood Bar Curio",
    price: 32000,
    Total: 32000,
    quantity: 0,
  },
  {
    id: 5,
    image: "Diana_Soli_ Wood_4-Seater_Dining",
    name: "Diana Soli Wood 4-Seater Dining",
    price: 37496,
    Total: 37496,
    quantity: 0,
  },
  {
    id: 6,
    image: "Fern_Living_Set_of_2_Fabric_Dining_Chairs",
    name: "Fern Living Set of 2 Fabric Dining Chairs",
    price: 29000,
    Total: 29000,
    quantity: 0,
  },
  {
    id: 7,
    image: "Harmony_Sia_Faux_Marble_4-Seater_Dining",
    name: "Harmony Sia Faux Marble 4-Seater Dining",
    price: 66000,
    Total: 66000,
    quantity: 0,
  },
  {
    id: 8,
    image: "Helios_Hazel_Set_of_2_Fabric_Dining_Chairs",
    name: "Helios Hazel Set of 2 Fabric Dining Chairs",
    price: 20000,
    Total: 20000,
    quantity: 0,
  },
  {
    id: 9,
    image: "Helios_Lucia_6-Seater_Dining",
    name: "Helios Lucia 6-Seater Dining",
    price: 50000,
    Total: 50000,
    quantity: 0,
  },
  {
    id: 10,
    image: "Leather_6-Seater_Dining_Set",
    name: "Leather 6-Seater Dining Set",
    price: 70000,
    Total: 70000,
    quantity: 0,
  },
  {
    id: 11,
    image: "Lewis_Buffet_Hutch",
    name: "Lewis Buffet Hutch",
    price: 30000,
    Total: 30000,
    quantity: 0,
  },
  {
    id: 12,
    image: "Marble_Top_6-Seater_Dining",
    name: "Marble Top 6-Seater Dining",
    price: 45000,
    Total: 45000,
    quantity: 0,
  },
  {
    id: 13,
    image: "Marble_Top_8-Seater_Dining",
    name: "Marble Top 8-Seater Dining",
    price: 80000,
    Total: 80000,
    quantity: 0,
  },
  {
    id: 14,
    image: "Marquina_Set_of_2_Fabric_Dining_Chairs",
    name: "Marquina Set of 2 Fabric Dining Chairs",
    price: 25000,
    Total: 25000,
    quantity: 0,
  },
  {
    id: 15,
    image: "Melamine_Top_6-Seater_Dining",
    name: "Melamine Top 6-Seater Dining",
    price: 36999,
    Total: 36999,
    quantity: 0,
  },
  {
    id: 16,
    image: "Multipurpose_Cabinet",
    name: "Multipurpose Cabinet",
    price: 38655,
    Total: 38655,
    quantity: 0,
  },
  {
    id: 17,
    image: "Paris_Set_of_2_Velvet_Dining_Chairs",
    name: "Paris Set of 2 Velvet Dining Chairs",
    price: 34999,
    Total: 34999,
    quantity: 0,
  },
  {
    id: 18,
    image: "Santorini_Multipurpose_Cabinet",
    name: "Santorini Multipurpose Cabinet",
    price: 55999,
    Total: 55999,
    quantity: 0,
  },
  {
    id: 19,
    image: "Velvetica_Bar_Cabinet",
    name: "Velvetica Bar Cabinet",
    price: 30000,
    Total: 30000,
    quantity: 0,
  },
  {
    id: 20,
    image: "Velvetica_Bar_Curio",
    name: "Velvetica Bar Curio",
    price: 35666,
    Total: 35666,
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
