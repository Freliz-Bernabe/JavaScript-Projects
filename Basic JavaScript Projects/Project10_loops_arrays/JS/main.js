//Displaying a while loop
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//Displaying a for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Displaying an array
function array_Function() {
    var Fruit_Type = [];
    Fruit_Type [0] = "Apple";
    Fruit_Type [1] = "Orange";
    Fruit_Type [2] = "Banana";
    Fruit_Type [3] = "Watermelon";
    Fruit_Type [4] = "Mango";
    document.getElementById("Array").innerHTML = "My favorite fruit is "+ Fruit_Type [4] + ".";
}

//Displaying a constant
function constant_Function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "red";
    Musical_Instrument.price = "$900";
    Musical_Instrument.size = "medium";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.size + " sized " +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//Creating an object with let
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();