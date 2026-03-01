const number = parseFloat(window.prompt("Please, one number"));
window.document.body.innerHTML = `<strong>Your number is ${number} </strong> <br/>`;
window.document.body.innerHTML += `square root: ${number**0.5} <br/>`;
window.document.body.innerHTML += `is integer: ${Number.isInteger(number)} <br/>`;
window.document.body.innerHTML += `is NaN: ${Number.isNaN(number)} <br/>`;
window.document.body.innerHTML += `round to low: ${Math.floor(number)} <br/>`;
window.document.body.innerHTML += `round to up: ${Math.ceil(number)} <br/>`;
window.document.body.innerHTML += `two decimal places: ${number.toFixed(2)}`;
