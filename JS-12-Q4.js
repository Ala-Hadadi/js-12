//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)

// todo:Using const, let instead of var
// We use let & const instead of var, because var can be redeclare and it may cause some bugs. So we use const as a constant variable & we use let when we want to reassign and change the variable.

var firstName = "Sasha";
var firstName = "Sarah"; // it can be redeclare so it may cause bugs.
console.log(firstName);

let lastName = "Jones";
lastName = "Martin"; // it can be reassign.
console.log(lastName);

const flower = "rose";
// flower = "lily";  // You can't reassign constant variable & you will get an error.
console.log(flower);

// todo:arrow function
// Arrow function is a shorter and cleaner syntax of function

function yourAge(age) {
  return `Your Age is ${age}`;
}

// Arrow function :
let yourAge2 = (age) => `Your Age is ${age}`;

console.log(yourAge(17));
console.log(yourAge2(20));

// todo:template string instead of "" and ''
// We can use template string when we want to add expressions within the string.
let country = "Iran";
console.log("You live in " + country);

// template string:
console.log(`You live in ${country}`);

// todo:destructuring
//Destructuring is a way to extract values from arrays or objects and assign them to variables.
const flowerPrice = ["daisy", "$3"];
const flowerName = flowerPrice[0];
const price = flowerPrice[1];
console.log(flowerName, price);

// destructuring:
const [flowerName2, price2] = ["Tulip", "$7"];
console.log(flowerName2, price2);
