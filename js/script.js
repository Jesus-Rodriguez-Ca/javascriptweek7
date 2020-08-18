window.onload = function(){

    // Blocks typing info to the result box
    document.getElementById("result").disabled = true;

    // Funtion to calculate miles per gallon used
    function calculate(){

     // Miles entered are saved in variable miles 
    var miles = parseFloat( document.getElementById("miles").value);

    // Gallons entered are saved in variable gallons
    var gallons = parseFloat( document.getElementById("gallons").value);


    // Saves a reference of id = result into a variable called result
    var result = document.getElementById("result")

    // Calculates how many miles per gallon are used. Fixed to just one decimal space.
    result.value = (miles / gallons).toFixed(1);
    
   
  
}
// Saves a reference of id= calc into a variable called calc
var calc = document.getElementById("calc");

// Binds a click event to calc and fire the calculate funtion. 
calc.addEventListener("click", calculate, false);

}
