//Functions

//1. Write Reusable JavaScript with Functions
function reusableFunction() {
  console.log("Hi World");
}
reusableFunction();

//2. Passing Values to Functions with Arguments
function functionWithArgs(arg1, arg2) {
  console.log(arg1 + arg2);
}

functionWithArgs(1, 2);
functionWithArgs(7, 9);

//3. Return a Value from a Function with Return
function timesFive(num) {
  return num * 5;
}
timesFive(5);
timesFive(2);

//4. Global Scope and Functions
// Declare the myGlobal variable below this line
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

//5. Local Scope and Functions
function myLocalScope() {
  // Only change code below this line
  const myVar = 5;
  console.log("inside myLocalScope", myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log("outside myLocalScope", myVar);
//myVar is not defined

//6. Global vs. Local Scope in Functions

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

//7. Understanding Undefined Value returned from a Function
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();

//8. Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
