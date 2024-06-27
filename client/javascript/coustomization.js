let wood;
let color;
let cloth;
let capacity;

const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", function () {
    document
      .querySelectorAll(
        ".wood_items, .sofa_items, .cloth_items, .capacity_items"
      )
      .forEach((item) => {
        item.style.border = "none";
        item.style.borderRadius = "initial";
      });

    let checkedCount = 0;

    radioButtons.forEach((radio) => {
      if (radio.checked) {
        checkedCount++;
        const itemId = radio.getAttribute("id");
        const correspondingItem = document.querySelector(
          `label[for="${itemId}"] .wood_items, label[for="${itemId}"] .sofa_items, label[for="${itemId}"] .cloth_items, label[for="${itemId}"] .capacity_items`
        );

        // Check if correspondingItem is not null before modifying its style
        if (correspondingItem) {
          correspondingItem.style.border = "2px solid #ffcc00";
          correspondingItem.style.borderRadius = "50%";
        }
      }
    });

    if (checkedCount > 4) {
      const lastCheckedRadio = document.querySelector(":checked");
      if (lastCheckedRadio) {
        const lastCheckedItemId = lastCheckedRadio.getAttribute("id");
        const lastCheckedItem = document.querySelector(
          `label[for="${lastCheckedItemId}"] .wood_items, label[for="${lastCheckedItemId}"] .sofa_items, label[for="${lastCheckedItemId}"] .cloth_items, label[for="${lastCheckedItemId}"] .capacity_items`
        );

        // Check if lastCheckedItem is not null before modifying its style
        if (lastCheckedItem) {
          lastCheckedItem.style.border = "none";
          lastCheckedItem.style.borderRadius = "initial";
          lastCheckedRadio.checked = false;
        }
      }
    }
  });
});
function checkWood() {
  let oak = document.getElementById("oak").checked;
  let maple = document.getElementById("maple").checked;
  let cherry = document.getElementById("cherry").checked;
  let walnut = document.getElementById("walnut").checked;
  let mahogany = document.getElementById("mahogany").checked;

  if (oak) {
    wood = "oak";
  } else if (maple) {
    wood = "maple";
  } else if (cherry) {
    wood = "cherry";
  } else if (walnut) {
    wood = "walnut";
  } else if (mahogany) {
    wood = "mahogany";
  } else {
    alert("SELECT THE WOOD TYPE");
  }
}
function checkColor() {
  let beige = document.getElementById("beige").checked;
  let blue = document.getElementById("blue").checked;
  let brown = document.getElementById("brown").checked;
  let grey = document.getElementById("grey").checked;
  let teal = document.getElementById("teal").checked;
  if (beige) {
    color = "beige";
  } else if (blue) {
    color = "blue";
  } else if (brown) {
    color = "brown";
  } else if (grey) {
    color = "grey";
  } else if (teal) {
    color = "teal";
  } else {
    alert("SELECT THE SOFA COLOR");
  }
}
function checkCloth() {
  var cotton = document.getElementById("cotton").checked;
  var linen = document.getElementById("linen").checked;
  var polyester = document.getElementById("polyester").checked;
  var velvet = document.getElementById("velvet").checked;
  var microfiber = document.getElementById("microfiber").checked;
  if (cotton) {
    cloth = "cotton";
  } else if (linen) {
    cloth = "linen";
  } else if (polyester) {
    cloth = "polyester";
  } else if (velvet) {
    cloth = "velvet";
  } else if (microfiber) {
    cloth = "microfiber";
  } else {
    alert("SELECT THE CLOTH TYPE");
  }
}
function checkCapacity() {
  var oneseater = document.getElementById("oneseater").checked;
  var twoseater = document.getElementById("twoseater").checked;
  var threeseater = document.getElementById("threeseater").checked;
  var combo = document.getElementById("combo").checked;
  var corner = document.getElementById("corner").checked;
  if (oneseater) {
    capacity = "oneseater";
  } else if (twoseater) {
    capacity = "twoseater";
  } else if (threeseater) {
    capacity = "threeseater";
  } else if (combo) {
    capacity = "combo";
  } else if (corner) {
    capacity = "corner";
  } else {
    alert("SELECT THE SOFA CAPACITY");
  }
}
function showData() {
  checkWood();
  var woodName = document.getElementById("woodName");
  woodName.innerText = `${wood}`;
  var selectedWood = document.getElementById("selectedWood");
  selectedWood.src = `${wood}.jpg`; // Ensure wood, color, cloth, and capacity are defined
  checkColor();
  var colorName = document.getElementById("colorName");
  colorName.innerText = `${color}`;
  var selectedColor = document.getElementById("selectedColor");
  selectedColor.src = `${color}.jpg`; // Ensure wood, color, cloth, and capacity are defined
  checkCloth();
  var clothName = document.getElementById("clothName");
  clothName.innerText = `${cloth}`;
  var selectedCloth = document.getElementById("selectedCloth");
  selectedCloth.src = `${cloth}.jpg`; // Ensure wood, color, cloth, and capacity are defined
  checkCapacity();
  var capacityName = document.getElementById("capacityName");
  capacityName.innerText = `${capacity}`;
  var selectedCapacity = document.getElementById("selectedCapacity");
  selectedCapacity.src = `${capacity}.jpg`; // Ensure wood, color, cloth, and capacity are defined
  var hidedata = document.getElementById("hideclass");
  hidedata.classList.remove("hideclass");
}

function finalpreview() {
  checkCapacity();
  checkColor();
  var finalpreview = document.getElementById("finalsofa");
  finalpreview.src = `${color}${capacity}.jpg`;
}

function exportData() {
  checkWood();
  localStorage.setItem("confirmedWood", wood);
  checkColor();
  localStorage.setItem("confirmedColor", color);
  checkCloth();
  localStorage.setItem("confirmedCloth", cloth);
  checkCapacity();
  localStorage.setItem("confirmedCapacity", capacity);
  window.location.href = "coustomization.html";
}

const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', () => nav.classList.toggle('active'))