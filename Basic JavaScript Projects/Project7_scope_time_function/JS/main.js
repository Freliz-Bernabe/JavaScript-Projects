var X = 10 //Displaying a function with a global variable
function Add_numbers_1() {
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() { //Displaying a function with a local variable
    var X=10;
    document.write(20+X+"<br>");
}
function Add_numbers_2() {
    document.write(X+100);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() { //Displaying a function using console to determine the error
    var X=10;
    console.log(15+X);
}
function Add_numbers_2() {
    console.log(X+100);
}
Add_numbers_1();
Add_numbers_2();

if (10<11) { //Displaying an if statement
    document.write("The number on the left is smaller than the number on the right.")
}

function Age_Function(){ //Displaying an else statement
    Age = document.getElementById("Age").value;
    if (Age>=18) {
        Vote="You are old enough to vote!";
    }
    else {
        Vote="You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML=Vote;
}

function Time_function(){ //Displaying an else if statement
    var Time = new Date().getHours();
    var Reply;
    if (Time<12 == Time>0){
        Reply = "It is morning time.";
    }
    else if (Time>12 == Time<18){
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply;
}