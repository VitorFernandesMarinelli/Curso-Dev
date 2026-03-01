//learned aritimatic

let numberA = 95.82564;
let numberB = 7;
let result = null;

//Sum
result = numberA + numberB;
console.log(`Sum: ${numberA} + ${numberB} = ${result}`);

//subtraction
result = numberA - numberB;
console.log(`subtraction: ${numberA} - ${numberB} = ${result}`);

//multiplication
result = numberA * numberB;
console.log(`multiplication: ${numberA} * ${numberB} = ${result}`);

//division
result = numberA / numberB;
console.log(`division: ${numberA} / ${numberB} = ${result}`);

//power
result = numberA ** numberB;
console.log(`power: ${numberA} ^ ${numberB} = ${result}`);

//increment
console.log(`increment ${numberB}: ${++numberB}`);

//decrement
numberB--;
console.log(`decrement ${numberB}: ${--numberB}`);
numberB++;

//conversion string ti float
result = parseFloat("4.985");
result += 1;
console.log(`String (4.985) + number (1) = ${result}`);