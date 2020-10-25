

  function myFunction() {

    var l = document.getElementById('litres');
    var litres = l.value;
  
    var g = document.getElementById("gallons");
    var gallons = g.value;
  
    if (gallons == "") {
      g.value = litres * 3.78541;
    } 
  
    else if (litres == "") {
      l.value = gallons / 3.78541;
    }
  
  }