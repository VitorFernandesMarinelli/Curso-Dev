//leaned work whit numbers

let numberA = 42;
let numberB = 3.14159265359;
let numberC = 0.1;

//number to sting:
console.log(`String: ${numberA.toString()}`);
console.log(`Binary: ${numberA.toString(2)}`); 
console.log(`Hexadecimal: ${numberA.toString(16)}`);

//round
console.log(numberB.toFixed(2));

//Interger number?
console.log(Number.isInteger(numberA));
//NaN (not a number) number? To correct problemes
console.log(Number.isNaN(numberA));

//fixed float number operations
numberC += numberB;
numberC = parseFloat(numberC.toFixed(2));
console.log(numberC)

//square root
console.log(16**0.5);

//Atention java script is strage
console.log(100/0);