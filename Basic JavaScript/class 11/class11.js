//leaned objects

const user = {
    name: 'Luiz',
    lastName: 'Silva',
    age: 35
};

console.log(user.name);

//constructor funcition

function Constructor_Address(city, street, number){
    return {
        city: city,
        street: street,
        number: number
    };
}


addressAndre = Constructor_Address('Sao Paulo', 'Bela vista', '1001');

console.log(addressAndre);

//method
const testMethod = {
    name: 'Jose',

    Say_My_Name(){
        console.log(`My name is ${this.name}`);
    }
};

testMethod.Say_My_Name();




//test
function Constructor_User(name,age,address){
    return {
        name: name,
        age: age,
        address: address
    }
};


user01 = Constructor_User('Francisco Souza', '57', addressAndre);

console.log(user01);
console.log(user01.address.city);