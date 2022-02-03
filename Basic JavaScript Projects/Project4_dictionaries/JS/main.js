function my_Dictionary(){ //Identifying dictionary for Car
    var Car = {
        Model: "Honda Civic",
        Color: "Red",
        Transmission: "Automatic",
    };
    delete Car.Color;
    document.getElementById("Dictionary").innerHTML=Car.Color;
}

