//leaned string functions

let text = "this is a text";

//char by possition
console.log(text[1]);
console.log(text.charAt(1));

//find possition
console.log(text.indexOf("t"));
console.log(text.lastIndexOf("t"));

//regex
console.log(text.match(/i/g));

//length
console.log(text.length);

//change the text
console.log(text.replace("i","k"));
console.log(text.toUpperCase());
console.log(text.toLowerCase());

console.log(text.slice(5,7));
console.log(text.split(" "));



