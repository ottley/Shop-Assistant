function check(){
  if(document.getElementById("product").value == "Dobbies Multi-Purpose John Innes Reduced Peat Content, 60L"){
    document.getElementById("selectedItemName").innerHTML = "Dobbies Multi-Purpose John Innes Reduced Peat Content, 60L";
    document.getElementById("navCode").innerHTML = "Item Number: 601684";
    document.getElementById("selectedItemImage").src = "https://hub.dobbies.com/ImageGen.ashx?image=/media/13567713/601684-Dobbies-Multi-Purpose-John-Innes-Reduced-Peat-Content-60L.jpg&Class=ProductDetailImage";
    document.getElementById("selectedItemImage").style.height = "350px";
    document.getElementById("selectedItemImage").style.width = "350px";

    document.getElementById("selectedItemImageQR").src = "dobMultiCompRP.png";
    document.getElementById("selectedItemImageQR").style.height = "350px";
    document.getElementById("selectedItemImageQR").style.width = "350px";
  }
  else{
    document.getElementById("selectedItemName").innerHTML = ("");
    document.getElementById("selectedItemImage").src = ("");
    document.getElementById("selectedItemImage").style.height = "";
    document.getElementById("selectedItemImage").style.width = "";

    document.getElementById("selectedItemImageQR").src = "";
    document.getElementById("selectedItemImageQR").style.height = "";
    document.getElementById("selectedItemImageQR").style.width = "";
    document.getElementById("navCode").innerHTML = "";
  }
}