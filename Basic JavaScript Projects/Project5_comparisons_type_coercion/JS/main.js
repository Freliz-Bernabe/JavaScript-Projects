document.write(typeof 68); //Displaying typeof operator

function my_Function(){ //Displaying a Nan value
    document.getElementById("Test").innerHTML=0/0;
}

function isNan_Function_true(){ //Testing a true Nan value using isNan
document.getElementById("Test").innerHTML = isNan('This is a string');
}

function isNanFalse_Function_false(){ //Testing a false Nan value using isNan
document.getElementById("Test").innerHTML = isNan('007');
}

document.write(3E311); //Displaying an infinity value

document.write(-3E311); //Displaying a negative infinity value

document.write(11<12); //Displaying a boolean logic from which the answer is true
    
document.write(11>12); //Displaying a boolean logic from which the answer is false

console.log(4+4); //Displaying the answer in the console

document.write("10"+5); //Displaying type coercion

console.log(21>22); //Displaying the answer using boolean logic in the console

document.write(20==20); //Displaying comparison that is true using double equal signs

document.write(10==20); //Displaying comparison that is false using double equal signs

X=20; //Displaying comparison that is true using triple equal signs, same data type and same value
Y=20;
document.write(X===Y); 

Date=02/06/22; //Displaying comparison that is false using triple equal signs, different data type and different value
Day=6;
document.write(Date===Day);

Date=8; //Displaying comparison that is false using triple equal signs, different data type and same value
Day="8";
document.write(Date===Day);

A=22; //Displaying comparison that is false using triple equal signs, same data type and different value
B=33;
document.write(A===B);

document.write(5>2 && 10>4); //Displaying a true answer using && operator

document.write(5>10 && 10>4); //Displaying a false answer using && operator

document.write(5>10 || 10>4); //Displaying a true answer using || operator

document.write(5>10 || 10>20); //Displaying a false answer using || operator

function not_Function() { //Displaying a false answer using ! operator
    document.getElementById("Not").innerHTML=!(20>10);
}

function not_Function_true() { //Displaying a true answer using ! operator
    document.getElementById("Not").innerHTML=!(5>10);
}

