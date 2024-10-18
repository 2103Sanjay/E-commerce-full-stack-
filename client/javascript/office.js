const items = [
  {
    id: 1,
    image: "Aero_computer_table",
    name: "Aero computer table",
    price: 15000,
    Total: 15000,
    quantity: 0,
  },
  {
    id: 2,
    image: "Aura_Conference_table",
    name: "Aura Conference table",
    price: 40000,
    Total: 40000,
    quantity: 0,
  },
  {
    id: 3,
    image: "Carrel_study_table",
    name: "Carrel study table ",
    price: 25000,
    Total: 25000,
    quantity: 0,
  },
  {
    id: 4,
    image: "Daisy_study_table_with_side_storage",
    name: "Daisy study table with side storage ",
    price: 18000,
    Total: 18000,
    quantity: 0,
  },
  {
    id: 5,
    image: "Empress_low_back_chair",
    name: "Empress low back chair ",
    price: 7000,
    Total: 7000,
    quantity: 0,
  },
  {
    id: 6,
    image: "Intelli_study_table",
    name: "Intelli study table ",
    price: 20000,
    Total: 20000,
    quantity: 0,
  },
  {
    id: 7,
    image: "Ivon_Visitor_chair",
    name: "Ivon Visitor chair ",
    price: 10000,
    Total: 10000,
    quantity: 0,
  },
  {
    id: 8,
    image: "Lucid_Writing_table",
    name: "Lucid Writing table ",
    price: 18000,
    Total: 18000,
    quantity: 0,
  },
  {
    id: 9,
    image: "Maniac_study_table",
    name: "Maniac study table",
    price: 23000,
    Total: 23000,
    quantity: 0,
  },
  {
    id: 10,
    image: "Midcentury_writing_table",
    name: "Midcentury writing table ",
    price: 29000,
    Total: 29000,
    quantity: 0,
  },
  {
    id: 11,
    image: "Mizzen_Study_table",
    name: "Mizzen Study table ",
    price: 18000,
    Total: 18000,
    quantity: 0,
  },
  {
    id: 12,
    image: "Quint_high_back_chair",
    name: "Quint high back chair ",
    price: 9000,
    Total: 9000,
    quantity: 0,
  },
  {
    id: 13,
    image: "Vista _Reception_Counter",
    name: "Vista Reception Counter",
    price: 17000,
    Total: 17000,
    quantity: 0,
  },
  {
    id: 14,
    image: "Roma_high_back_chair",
    name: "Roma high back chair",
    price: 9000,
    Total: 9000,
    quantity: 0,
  },
  {
    id: 15,
    image: "Swift_computer_table",
    name: "Swift computer table",
    price: 18000,
    Total: 18000,
    quantity: 0,
  },
  {
    id: 16,
    image: "Tampa_study_table",
    name: "Tampa study table ",
    price: 17000,
    Total: 17000,
    quantity: 0,
  },
  {
    id: 17,
    image: "Tampa_writing_table",
    name: "Tampa writing table ",
    price: 19500,
    Total: 19500,
    quantity: 0,
  },
  {
    id: 18,
    image: "Thrift_executive_chair",
    name: "Thrift executive chair",
    price: 6000,
    Total: 6000,
    quantity: 0,
  },
  {
    id: 19,
    image: "Trivia_visitor_chair",
    name: "Trivia visitor chair",
    price: 6000,
    Total: 6000,
    quantity: 0,
  },
  {
    id: 20,
    image: "Zinc_Visitor_chair",
    name: "Zinc Visitor chair",
    price: 3000,
    Total: 3000,
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
