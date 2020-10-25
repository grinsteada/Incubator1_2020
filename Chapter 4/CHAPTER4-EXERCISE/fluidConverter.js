//Java script function to set units for gallons and litres

function setup()
{

//Display the unit L if the user selects liters
document.getElementByld("gallons").onclick =
function ()
{

//Invoke the function
setUnits("L")
};

//Display the unit G if the user selects gallons
document.getElementByld("litres").onclick =
function ()
{

//Invoke the function
setUnits("G")
};
}

//Function to select units based on user selection
function setUnits(unit)
{

// Declare the variable to store user input
var label = document.getElementByld("label");
label.innerHTML = " " + unit
}

/*Define the function to convert gallons to liters or vice versa*/
function convert()
{

/*Declare and initialize the variable to store value for litres */
var litresButton = document.getElementByld("litres");

/*Declare and initialize the variable to store value for litres */
var fluid = document.getElementByld("fluid");

//Invoke the function to validate user input
validate(fluid.value);

//Condition to check the type of conversion
if (litresButton.checked)
{

/*Invoke the function to convert gallons to litres*/
convertToLitres(fluid.value);
}
else
{

/*Invoke the function to convert litres to gallons*/
convertoGallons(fluid.value);

}
}




//Function to convert gallons to litres
function convertToLitres(fluidinGallons)
{

/*Declare and initialize the variable to store value for litres */
var litresFluid = fluidinGallons / 0.26417;

//Display the converted value
document.getElemnetByld("answer").innterHTML = fluidinGallons +"Gallons converts to "
+litresFluid.toFixed(1) +" Litres";
}

//Function to convert litres to gallons
function convertToLitres(fluidinLitres)
{

/*Declare and initialize the variable to store value for gallons */
var gallonsFluid = fluidinLitres * 0.25417;


//Display the converted value
document.getElemnetByld("answer").innterHTML = fluidinLitres +"Litres converts to "
+gallonsFluid.toFixed(1) +" Gallons";
}

//Define the function to validate user input
function validate(value)

{

//Condition to check the user input for gallons
if (document.getElementByld("litres").checked)
{

/*If the user input value is greater than 1000, alert the user */
if (value > 1000)
{

//Alert the user
alert('You must enter a value less than 1000 Gallons');
}
}

//Check the user input for liters
else
{
/*If the user input value is greater than 4000, alert the user */
if (value > 4000)
{

//Alert the user
alert('You must enter a value less than 4000 Litres');
}
}
}