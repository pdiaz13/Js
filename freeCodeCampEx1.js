//freeCodeCamp

//1- Constructing Strings with Variables

const myName = "Prisicla";
const myStr = "My name is " + myName + " and I am well!";

//2- Appending Variables to Strings

const someAdjective = "awesome";
let myStr = "Learning to code is ";
myStr += someAdjective;

//3- Find the Length of a String
// Setup
let lastNameLength = 0;
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

//4- Use Bracket Notation to Find the First Character in a String
// Setup
let firstLetterOfLastName = "";
const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

//5-Understand String Immutability
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

//6- Use Bracket Notation to Find the Nth Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line

//7- Use Bracket Notation to Find the Last Character in a String

// Setup
const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

//8-Use Bracket Notation to Find the Nth-to-Last Character in a String
// Setup
const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

//9-Word Blanks
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks =
  "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line

//10- Store Multiple Values in one Variable using JavaScript Arrays
// Only change code below this line
const myArray = ["May the force be with you", 13];

//11- Nest one Array within Another Array

// Only change code below this line
const myArray = [
  ["Lucia", 4],
  ["Lautaro", 11],
];

//12-Access Array Data with Indexes

const myArray = [50, 60, 70];
const myData = myArray[0];

//13- Modify Array Data With Indexes
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

//14- Access Multi-Dimensional Arrays With Indexes
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];
//Only change code below this line
const myData = myArray[2][1];
