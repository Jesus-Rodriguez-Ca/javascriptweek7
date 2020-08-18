window.onload = function(){


function calculate(){
    var miles = parseInt( document.getElementById("miles").value);
    var gallons = parseInt( document.getElementById("gallons").value);
    var result = document.getElementById("result").value = miles / gallons;
  
}
var calc = document.getElementById("calc");
calc.onclick = calculate
}
