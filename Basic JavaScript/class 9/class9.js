//lerned array
//atention arry is idex object
const shopp = ['apple','orange','grape fruit'];
console.log(shopp);

console.log(shopp[0]);

//add a new element
shopp[3] = 'water';
console.log(shopp);

console.log(shopp.length);

//add in the final
shopp.push('banana');
console.log(shopp);

//add in the begin
shopp.unshift('juice');
console.log(shopp);

//remove the last element
shopp.pop();
console.log(shopp);

//remove the first element
shopp.shift();
console.log(shopp);

//slice 
console.log(shopp.slice(1,3)); //last element in the slice (3) is not includ