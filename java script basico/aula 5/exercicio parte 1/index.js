//Make a calculate sum use alert e prompt

let numberA = 0;
let numberB = 0;
let textResult = null;
let sumResult;

textResult = window.prompt("Frist number:");
numberA = parseFloat(textResult);

textResult = window.prompt("Last number:");
numberB = parseFloat(textResult);

sumResult = numberA + numberB;
alert(`${numberA} + ${numberB} = ${sumResult}`);
