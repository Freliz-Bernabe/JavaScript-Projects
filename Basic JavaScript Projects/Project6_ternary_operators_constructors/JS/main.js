function Ride_function() { //Displaying a function using ternary operation
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height<52) ? "You are too short!":"You are tall enough!";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";
}

function Vehicle(Make, Model, Year, Color) { //Displaying a constructor function using new and this
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erick = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML=
    "Erik drives a " + Erick.Vehicle_Color + "-colored " + Erick.Vehicle_Model +
    "Manufactured in " + Erick.Vehicle_Year;
}

function count_Function() { //Displaying a nested function
    document.getElementById("Counting").innerHTML = Count ();
    function Count() {
        var Starting_point = 9;
        function Plus_one () {Starting_point + 1;}
        Plus_one();
        return Starting_point;
    }
}