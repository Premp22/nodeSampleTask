const lodash = require("lodash");
//chunking array
let frits = ["apple", "orange", "mango", "banana"];
let fruit1 = lodash.chunk(frits, 2);
console.log("the array chunk is:", fruit1);
//last and first
let num = [1, 2, 3, 4, 5, 5, 6];
let first = lodash.first(num);
console.log("the first elements is:", first);
let last = lodash.last(num);
console.log("the last elememt is", last);
//randomnum
let randome = lodash.random(6);
console.log("the random number is", randome);
//arrayMaping
let arr = [1, 2, 5, 4, 5];
let arrayMap = lodash.map(arr, (num) => {
	return num + 5;
});
console.log("the mapped arra is:", arrayMap);
//slice
let arr1 = [1, 2, 5, 4, 5];
let slash = lodash.slice(arr1, 1, 3);
console.log("the array slice is:", slash);
