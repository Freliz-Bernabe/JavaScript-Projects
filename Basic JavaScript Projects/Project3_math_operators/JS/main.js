function addition_function(){ //Calculating using Addition
    var addition=2+2;
    document.getElementById("Math").innerHTML="2+2=" + addition;
}

function subtraction_function(){ //Calculating using Subtraction
    var Subtraction=5-2;
    document.getElementById("Math").innerHTML="5-2=" + Subtraction;
}

function multiplication(){ //Calculating using Multiplication
    var simple_Math=6*8;
    document.getElementById("Math").innerHTML="6*8=" + simple_Math;
}

function division(){ //Calculating using Division
    var simple_Math=48/6;
    document.getElementById("Math").innerHTML="48/6=" + simple_Math;
}

function more_Math(){ //Calculating using Multiple Operations
    var simple_Math=(1+2)*10/2-5;
    document.getElementById("Math").innerHTML="1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator(){ //Displaying a variable using Modulus Operator
    var simple_Math=25%6;
    document.getElementById("Math").innerHTML="When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator(){ //Displaying a variable using Negation Operator
    var x=10;
    document.getElementById("Math").innerHTML=-x;
}

var X = 5; 
X++; //Defining a variable using Increment Operator
document.write(X);

var X = 5.25;
X--; //Defining a variable using Decrement Operator
document.write(X);

window.alert(Math.random() * 100); //Displaying a random number between 0 to 100

