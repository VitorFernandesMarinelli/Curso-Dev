//learned comparation and logic operators
let numberA = 12;
let numberB = 3;
 
//comparation operators:
console.log('\n\ncomparation operators:');
console.log(`${numberA} < ${numberB} : ${numberA < numberB}`);
console.log(`${numberA} > ${numberB} : ${numberA > numberB}`);
//attention  js used "=="" to compare only value and "==="" to compare value and type, recommended  use "==="
console.log(`${numberA} = ${numberB} : ${numberA === numberB}`); 
console.log(`${numberA} != ${numberB} : ${numberA !== numberB}`);
console.log(`${numberA} <= ${numberB} : ${numberA <= numberB}`);
console.log(`${numberA} >= ${numberB} : ${numberA >= numberB}`);

//logic operators
let major = numberA < numberB;
let equals = numberA === numberB;
console.log('\n\nlogic operators:');
console.log(`${numberA} < ${numberB} and ${numberA} = ${numberB} : ${major && equals}`);
console.log(`${numberA} < ${numberB} or ${numberA} = ${numberB} : ${major || equals}`);
console.log(`not ${numberA} = ${numberB} : ${!equals}`);

