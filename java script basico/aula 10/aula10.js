//leaned funcions


function start(){
    console.log('Hello word!');
    console.log('All systens online');
}

function say_my_name(name){
    console.log(`Hello ${name}`)
}

function round_function(number){
    let roundNumber;
    roundNumber = Math.round(number);
    return roundNumber;
}

const pow = function(base,power){
    return Math.pow(base,power);
};

const square_root = number => number ** 0.5;


start();
say_my_name('Vitor');

let result = round_function(47.6981);
console.log(result);
console.log(pow(5,2));
console.log(square_root(25));