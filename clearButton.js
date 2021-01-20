function productReset(){
  console.log("Aha!");
  document.getElementById("product").value = "";
  document.getElementById("selectedItemName").innerHTML = ("");
  document.getElementById("selectedItemImage").src = ("");
  document.getElementById("selectedItemImage").style.height = "";
  document.getElementById("selectedItemImage").style.width = "";

  document.getElementById("selectedItemImageQR").src = "";
  document.getElementById("selectedItemImageQR").style.height = "";
  document.getElementById("selectedItemImageQR").style.width = "";
  document.getElementById("navCode").innerHTML = "";
}