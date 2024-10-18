const items = [
  {
    id: 1,
    image: "3-Door_Book_Cabinet",
    name: "3 Door Book Cabinet",
    price: 33000,
    Total: 33000,
    quantity: 0,
  },
  {
    id: 2,
    image: "3-Tier_Book_Shelf",
    name: "3 Tier Book Shelf",
    price: 7000,
    Total: 7000,
    quantity: 0,
  },
  {
    id: 3,
    image: "5-Tier_Mango_Wood_Book_Shelf",
    name: "5 Tier Mango Wood Book Shelf",
    price: 8000,
    Total: 8000,
    quantity: 0,
  },
  {
    id: 4,
    image: "Bean_Bag_with_Beans",
    name: "Bean Bag with Beans ",
    price: 3000,
    Total: 3000,
    quantity: 0,
  },
  {
    id: 5,
    image: "Corner_Wall_Shelves",
    name: "Corner Wall Shelves ",
    price: 4000,
    Total: 4000,
    quantity: 0,
  },
  {
    id: 6,
    image: "corner",
    name: "corner sofa",
    price: 60000,
    Total: 60000,
    quantity: 0,
  },
  {
    id: 7,
    image: "Door_Book_Cabinet",
    name: "Door Book Cabinet ",
    price: 30000,
    Total: 30000,
    quantity: 0,
  },
  {
    id: 8,
    image: "Glass_Top_Coffee_Table",
    name: "Glass Top Coffee Table",
    price: 8000,
    Total: 8000,
    quantity: 0,
  },
  {
    id: 9,
    image: "Intersecting_Wall_Shelf",
    name: "Intersecting Wall Shelf ",
    price: 20000,
    Total: 20000,
    quantity: 0,
  },
  {
    id: 10,
    image: "Key_Holder",
    name: "Key Holder ",
    price: 3000,
    Total: 3000,
    quantity: 0,
  },
  {
    id: 11,
    image: "Medley_Wall_Shelf",
    name: "Medley Wall Shelf ",
    price: 4000,
    Total: 4000,
    quantity: 0,
  },
  {
    id: 12,
    image: "Multipurpose_Cabinet",
    name: "Multipurpose Cabinet",
    price: 10000,
    Total: 10000,
    quantity: 0,
  },
  {
    id: 13,
    image: "one_seater",
    name: "one seater ",
    price: 20000,
    Total: 20000,
    quantity: 0,
  },
  {
    id: 14,
    image: "Rotating_Accent_Chair",
    name: "Rotating Accent Chair",
    price: 25000,
    Total: 25000,
    quantity: 0,
  },
  {
    id: 15,
    image: "three_seater",
    name: "three seater",
    price: 50000,
    Total: 50000,
    quantity: 0,
  },
  {
    id: 16,
    image: "tv_stand",
    name: "tv stand",
    price: 35000,
    Total: 35000,
    quantity: 0,
  },
  {
    id: 17,
    image: "Velvet_Pouffe",
    name: "Velvet Pouffe",
    price: 15000,
    Total: 15000,
    quantity: 0,
  },
  {
    id: 18,
    image: "wodden_tv_stand",
    name: "wodden tv stand ",
    price: 30000,
    Total: 30000,
    quantity: 0,
  },
  {
    id: 19,
    image: "Wood_Book_Shelf",
    name: "Wood Book Shelf  ",
    price: 12000,
    Total: 12000,
    quantity: 0,
  },
  {
    id: 20,
    image: "Wood_Coffee_Table",
    name: " Wood Coffee Table",
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
