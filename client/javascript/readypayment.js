function addressData() {
  localStorage.setItem("username", document.getElementById("username").value);
  localStorage.setItem("mobile", document.getElementById("mobile").value);
  localStorage.setItem("pincode", document.getElementById("pincode").value);
  localStorage.setItem("locality", document.getElementById("locality").value);
  localStorage.setItem(
    "addressfull",
    document.getElementById("addressfull").value
  );
  localStorage.setItem("city", document.getElementById("city").value);
  localStorage.setItem("state", document.getElementById("state").value);
  localStorage.setItem("landmark", document.getElementById("landmark").value);
  localStorage.setItem(
    "alternatephone",
    document.getElementById("alternatephone").value
  );
  alert("ADDRESS SAVED");
}
