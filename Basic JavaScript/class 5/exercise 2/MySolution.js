// Chalange: change values for like to "walk values"
let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

console.log("Original:",varA,varB,varC);


let suport;
suport = varA;
varA = varB;
varB = varC;
varC = suport;

console.log("Modify:",varA,varB,varC);
