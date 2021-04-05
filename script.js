
//First element - last element array
var ages = [3, 9, 23, 64, 2, 8, 28, 93,];
let lastNum = ages.pop();
console.log(lastNum - ages[0]);

//avg of ages
let sum = 0
for(age of ages){
    sum += age;
}
let total = ages.length;
let avg = sum/total;
console.log(avg);

//Calculates avg name length
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
var numbers = 0;
var currentVal = 0;
for(name of names){
    currentVal += name.length;
}
let newNum1 = names.length;
let newNum = currentVal/newNum1;
console.log(newNum);

//Concatenated Names
console.log(names.join(" "));

// function that takes two paramaters and 
//returns word concatenated to itself n number of times
function stringNum(word, n) {
    var stringNum = "";
    while (n > 0) {
      stringNum += word;
      n--;
    }
    return  console.log(stringNum);
  }
  stringNum("abc", 3);


//function that prints names
function namePrinter(fName, lName){
    console.log(fName + " " + lName);
}

namePrinter("Anthony", "T");


//Function that takes an array and returns average of 
// all elements in the array
function avgNumber() {
var arrays = [21, 43, 44];
let sum1 = 0
for(array of arrays){
    sum1 += array;
}
let total1 = arrays.length;
let avg1 = sum1/total1;
console.log(avg1);
}
avgNumber();



//function that returns true if it's hot outside and
// moneyinpocket is greater than 10.50
var isHotOutside = true
var moneyinPocket = 11.00
function willBuyDrink(){
    if (isHotOutside = true && moneyinPocket > 10.50){
    console.log("True");
    }
}

willBuyDrink();

// Function that adds two variables
let x = 5;
let y = 5;
function sumGenerator(){
console.log(x += y);
}

sumGenerator();

