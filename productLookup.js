function check(){
  ///Barcode search input
  switch(document.getElementById("product").value){
    ///
    ///Dobbies Multi-Purpose John Innes Reduced Peat Content, 60L
    ///
    case "Dobbies Multi-Purpose John Innes Reduced Peat Content, 60L":
      ///Set Description, Image, Nav Code and QR Code
      ///Description
      document.getElementById("selectedItemName").innerHTML = "Dobbies Multi-Purpose John Innes Reduced Peat Content, 60L";
      ///Nav Code
      document.getElementById("navCode").innerHTML = "Item Number: 601684";
      ///Image
      document.getElementById("selectedItemImage").src = "productImages/601684-Dobbies-Multi-Purpose-John-Innes-Reduced-Peat-Content-60L.jpeg";
      document.getElementById("selectedItemImage").style.height = "350px";
      document.getElementById("selectedItemImage").style.width = "350px";
      ///QR Code
      document.getElementById("selectedItemImageQR").src = "productQR/dobMultiCompRPQR.png";
      document.getElementById("selectedItemImageQR").style.height = "350px";
      document.getElementById("selectedItemImageQR").style.width = "350px";
      break;
    ///
    ///Flaming Firewood
    ///
    case "Flaming Firewood":
      ///Set Description, Image, Nav Code and QR Code
      ///Description
      document.getElementById("selectedItemName").innerHTML = "Flaming Firewood";
      ///Nav Code
      document.getElementById("navCode").innerHTML = "Item Number: 594125";
      ///Image
      //!!! document.getElementById("selectedItemImage").src = "productImages/601684-Dobbies-Multi-Purpose-John-Innes-Reduced-Peat-Content-60L.jpeg";
      ///!!! document.getElementById("selectedItemImage").style.height = "350px";
      ///!!! document.getElementById("selectedItemImage").style.width = "350px";
      ///QR Code
      document.getElementById("selectedItemImageQR").src = "productQR/flamingFirewoodQR.png";
      document.getElementById("selectedItemImageQR").style.height = "350px";
      document.getElementById("selectedItemImageQR").style.width = "350px";
      break;
    ///
    ///Kiln Dried Logs
    ///
    case "Kiln Dried Logs":
      ///Set Description, Image, Nav Code and QR Code
      ///Description
      document.getElementById("selectedItemName").innerHTML = "Kiln Dried Logs";
      ///Nav Code
      document.getElementById("navCode").innerHTML = "Item Number: 594123";
      ///Image
      //!!! document.getElementById("selectedItemImage").src = "productImages/601684-Dobbies-Multi-Purpose-John-Innes-Reduced-Peat-Content-60L.jpeg";
      ///!!! document.getElementById("selectedItemImage").style.height = "350px";
      ///!!! document.getElementById("selectedItemImage").style.width = "350px";
      ///QR Code
      document.getElementById("selectedItemImageQR").src = "productQR/kilnLogsQR.png";
      document.getElementById("selectedItemImageQR").style.height = "350px";
      document.getElementById("selectedItemImageQR").style.width = "350px";
      break;
      ///
      ///Kindling Box
      ///
    case "Kindling Box":
      ///Set Description, Image, Nav Code and QR Code
      ///Description
      document.getElementById("selectedItemName").innerHTML = "Kindling Box";
      ///Nav Code
      document.getElementById("navCode").innerHTML = "Item Number: 594124";
      ///Image
      //!!! document.getElementById("selectedItemImage").src = "productImages/601684-Dobbies-Multi-Purpose-John-Innes-Reduced-Peat-Content-60L.jpeg";
      ///!!! document.getElementById("selectedItemImage").style.height = "350px";
      ///!!! document.getElementById("selectedItemImage").style.width = "350px";
      ///QR Code
      document.getElementById("selectedItemImageQR").src = "productQR/kindlingBoxQR.png";
      document.getElementById("selectedItemImageQR").style.height = "350px";
      document.getElementById("selectedItemImageQR").style.width = "350px";
      break;
      ///
      ///Coffee Logs
      ///
    case "Coffee Logs":
      ///Set Description, Image, Nav Code and QR Code
      ///Description
      document.getElementById("selectedItemName").innerHTML = "Coffee Logs";
      ///Nav Code
      document.getElementById("navCode").innerHTML = "Item Number: 594127";
      ///Image
      //!!! document.getElementById("selectedItemImage").src = "productImages/601684-Dobbies-Multi-Purpose-John-Innes-Reduced-Peat-Content-60L.jpeg";
      ///!!! document.getElementById("selectedItemImage").style.height = "350px";
      ///!!! document.getElementById("selectedItemImage").style.width = "350px";
      ///QR Code
      document.getElementById("selectedItemImageQR").src = "productQR/coffeeLogsQR.png";
      document.getElementById("selectedItemImageQR").style.height = "350px";
      document.getElementById("selectedItemImageQR").style.width = "350px";
      break;
      ///
      ///Eco Briquettes
      ///
    case "Eco Briquettes":
      ///Set Description, Image, Nav Code and QR Code
      ///Description
      document.getElementById("selectedItemName").innerHTML = "Eco Briquettes";
      ///Nav Code
      document.getElementById("navCode").innerHTML = "Item Number: 562515";
      ///Image
      //!!! document.getElementById("selectedItemImage").src = "productImages/601684-Dobbies-Multi-Purpose-John-Innes-Reduced-Peat-Content-60L.jpeg";
      ///!!! document.getElementById("selectedItemImage").style.height = "350px";
      ///!!! document.getElementById("selectedItemImage").style.width = "350px";
      ///QR Code
      document.getElementById("selectedItemImageQR").src = "productQR/ecoBriqQR.png";
      document.getElementById("selectedItemImageQR").style.height = "350px";
      document.getElementById("selectedItemImageQR").style.width = "350px";
      break;
      ///
      ///Newflame Smokeless Coal
      ///
    case "Newflame Smokeless Coal":
      ///Set Description, Image, Nav Code and QR Code
      ///Description
      document.getElementById("selectedItemName").innerHTML = "Newflame Smokeless Coal";
      ///Nav Code
      document.getElementById("navCode").innerHTML = "Item Number: 704117";
      ///Image
      //!!! document.getElementById("selectedItemImage").src = "productImages/601684-Dobbies-Multi-Purpose-John-Innes-Reduced-Peat-Content-60L.jpeg";
      ///!!! document.getElementById("selectedItemImage").style.height = "350px";
      ///!!! document.getElementById("selectedItemImage").style.width = "350px";
      ///QR Code
      document.getElementById("selectedItemImageQR").src = "productQR/newflameSmokelessCoalQR.png";
      document.getElementById("selectedItemImageQR").style.height = "350px";
      document.getElementById("selectedItemImageQR").style.width = "350px";
      break;

    default:
      ///Clear Description, Image, Nav Code and QR Code
      ///Description
      document.getElementById("selectedItemName").innerHTML = ("");
      ///Image
      document.getElementById("selectedItemImage").src = ("");
      document.getElementById("selectedItemImage").style.height = "";
      document.getElementById("selectedItemImage").style.width = "";
      ///QR Code
      document.getElementById("selectedItemImageQR").src = "";
      document.getElementById("selectedItemImageQR").style.height = "";
      document.getElementById("selectedItemImageQR").style.width = "";
      ///Nav Code
      document.getElementById("navCode").innerHTML = "";
  }
}
