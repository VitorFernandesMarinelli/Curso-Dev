const userNumber = parseFloat(window.prompt("Please, tell me a number"));

let textNumber = document.getElementById("yourNumber");
let textRoot = document.getElementById("root");
let textInt = document.getElementById("integreee");
let textNaN = document.getElementById("notNumber");
let textLow = document.getElementById("low");
let textUP = document.getElementById("up");
let textTwo = document.getElementById("two");


textNumber.innerHTML = userNumber.toString();
textRoot.innerHTML = (userNumber ** 0.5).toString();
textInt.innerHTML = Number.isNaN(userNumber);
textNaN.innerHTML = Number.isInteger(userNumber);
textLow.innerHTML = (Math.floor(userNumber)).toString();
textUP.innerHTML = (Math.ceil(userNumber)).toString();
textTwo.innerHTML = (userNumber.toFixed(2)).toString();