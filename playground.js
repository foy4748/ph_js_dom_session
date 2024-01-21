/*
- Basic Stuffs
  - Variables / Data Types
    - Understand Block Scope
    - Understand Lexical Scope
  - Loop
  - Template Literals / String methods
  - Function
  - Conditions
  - Ternary Operators
  - Logical Operators
*/

// Primitive Data Types
/*
const x = "Faisal";
let y = "Rahman";

const num1 = 45;

const num2 = "45.25";
const num3 = "34.19";

console.log("Summation");
console.log(parseFloat(num2) + parseFloat(num3));
*/
// ============

// Non-primitive Data Types
/*

const arr = [1, 2, 3, 4];
const obj = {
    topic: "JS and DOM manipulation",
    language: "JavaScript",
    time: 2100,
    "time-zone": "GMT+6"
}

console.log(obj.time);
console.log(obj["time-zone"]);
*/

// Loop
/*
const arr = ["A", "B", "C"];

for (let i = 0; i < arr.length; i = i + 1) {
    console.log(arr[i]);
}

let i = 0;
while (true) {
    console.log(i);
    i++;
    if (i == 5) {
        break;
    }
}
*/

// Template Literal

/*
const username = "faisal.rahman.4748.ph"
const number = "+88011111111"

const arr = [
    {
        username: "faisal02",
        number: "+88011111120"
    },
    {
        username: "faisal03",
        number: "+88011111111"
    },
    {
        username: "faisal04",
        number: "+88011111119"
    },

]

for (let i = 0; i < arr.length; i++) {

    const currentObj = arr[i];
    const letter = `
    <div>
        <h1>${currentObj.username}</h1>
        <p>${currentObj.number}</p>
    </div>
`;
    console.log(letter)
}

*/

// Function
/*
let result = {};

// Function declaration
function sum(a, b, r) {
    r["sum"] = a + b;
}

// Function execute
sum(5, 6, result);

console.log(result.sum);
*/

// Logical Operator

let x = 40;

/*
// Logical AND
let result = x == 400 && "IS True"

// Logical OR
let result2 = x != 400 || "IS FALSE"
//console.log(result2);

// Ternary Operator

let result3 = x == 400 ? "X is 400" : "X is NOT 400";
console.log(result3);
*/

const arrOfObj = [
    {
        cost: 40,
        quantity: 50
    },
    {
        cost: 30,
        quantity: 70
    },
    {
        cost: 20,
        quantity: 80
    },
]

let sum = 0; // Accumulator
for (let i = 0; i < arrOfObj.length; i++) {
    const currentObj = arrOfObj[i];
    sum = sum + currentObj.cost * currentObj.quantity;
}
console.log(sum);

// Allowed
//y = "R";

// Won't work
//x = "F"

//console.log(y, x);