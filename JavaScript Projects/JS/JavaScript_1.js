//Creating a function using a switch statement
function Food_Function() {
    var Food_Output;
    var Foods = document.getElementById("Food_Input").value;
    var Food_String = " is a delicious food!";
    switch(Foods) {
        case "Pasta":
            Food_Output = "Pasta" + Food_String;
        break;
        case "Fried Chicken":
            Food_Output = "Fried Chicken" + Food_String;
        break;
        case "Steak":
            Food_Output = "Steak" + Food_String;
        break;
        case "Soup":
            Food_Output = "Soup" + Food_String;
        break;
        case "Cake":
            Food_Output = "Cake" + Food_String;
        break;
        default:
            Food_Output = "Please enter a food exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Food_Output;
}

//Displaying a getElementsByClassName() method
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//Drawing a line using canvas element
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();

//Creating linear gradient color within canvas
var c = document.getElementById("ID_Name");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 0, 100);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(10, 10, 180, 80);