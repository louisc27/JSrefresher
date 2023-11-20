// PRACTICE WITH THE MATH OBJECT
let mathTest = "Test Output";
let a = Math.sqrt(12);
let b = Math.abs(-500);
let c = Math.round(4.6);
let d = Math.random();
let e = Math.ceil(Math.random() * 50 + 1);



document.getElementById("square").innerHTML = a;
document.getElementById("absolute").innerHTML = b;
document.getElementById("round").innerHTML = c;
document.getElementById("random").innerHTML = d;
document.getElementById("down").innerHTML = e;



// PRACTICE WITH THE MATH OBJECT END

/* THE NUMBER CHALLENGE
Create a variable called x that is a random number between 1 and 100
Create a variable called y that is a random number between 1 and 50
Create a variable for the sum, difference, product ,quotient and remainder of x and y along with operator and result
*/
let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

let sumOutput = x + y;
let differenceOutput = x - y;
let productOutput = x * y;
let quotientOutput = x / y;
let rmOutput = x % y;


document.getElementById('num1').innerHTML = x;
document.getElementById('num2').innerHTML = y;
document.getElementById('sum').innerHTML = sumOutput;
document.getElementById('difference').innerHTML = differenceOutput;
document.getElementById('product').innerHTML = productOutput;
document.getElementById('quotient').innerHTML = quotientOutput;
document.getElementById('remainder').innerHTML = rmOutput;

// NUMBER CHALLENGE END

// Date and Time


let f;
f = new Date();
// f = f.toString();
// f = new Date('2023-11-20');
// f = f.getTime();
// f = f.valueOf();

document.getElementById("date").innerHTML = `<p class="lead">Today's Date is ${f}</p>`;


// METHODS
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"];

let g;
let h = new Date();

let i = h.getFullYear();
let k = months[h.getMonth()];
// Date of the month
let l = h.getDate();
// Day of the week
let m = days[h.getDay()];

let n = h.getHours();
let o = h.getMinutes();


document.getElementById('dateParts').innerHTML = `<p class="lead">The Year is ${i}. The month is ${k}. It is the ${l}th day of the month. The day of the week is ${m}. The time is ${n}:${o}</p>`;






// Date and Time end