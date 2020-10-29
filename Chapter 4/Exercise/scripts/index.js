function setup() {
  document.getElementById("gallons").onclick =
    function () {
      setUnits("G");
    };
  document.getElementById("litres").onclick =
    function () {
      setUnits("L");
    };
}

function setUnits(unit) {
  var label = document.getElementById("label");
  label.innerHTML = "&deg; " + unit;
}


function convert() {
  var litresButton = document.getElementById(
    "litres");
    var gallonButton = document.getElementById(
      "gallons");
  var fluid = document.getElementById(
    "fluid");

  if (litresButton.checked) {
    convertToGallon(fluid.value);
  } else {
    convertToLitres();
  }
  if (gallonButton.checked) {
    convertToLitres(fluid.value);
  } 
  
}

function convertToLitres(gallons) {
  var gallonLitre = gallons * 3.78541;
  document.getElementById("answer").innerHTML =
    gallons +
    " Gallons converts to " +
    gallonLitre.toFixed(1) +
    " Litres";
}

function convertToGallon(litres) {
  var litreGallon = litres / 3.78541;
  document.getElementById("answer").innerHTML =
    litres +
    " Litres converts to " +
    litreGallon.toFixed(1) +
    " Gallons";
}


