//Implicit Conversion to Number

let result;

result = '4' - '2'; 
console.log(result); // 2

result = '4' - 2;
console.log(result); // 2

result = '4' * 2;
console.log(result); // 8

// if boolean is used, true is 1, false is 0
console.log("if boolean is used, true is 1, false is 0");
let res;

res = '6' - true;
console.log(res); // 5 

res = 4 + true;
console.log(res); // 5

res = 9 + false;
console.log(res); // 9

//JavaScript Explicit Conversion
console.log("JavaScript Explicit Conversion");

// string to number
let result1;
result1 = Number('500');
console.log(result1); // 500

// boolean to number
let result2;
result2 = Number(true);
console.log(result2); // 1

let result3;
result3 = parseInt('786');
console.log(result3); // 786

result3 = Math.floor('20.90');
console.log(result3);

// convert numberv to string
let result4;
result4 = String(400);
console.log(result4); 

// using toString()
let x=200;
result = x.toString();
console.log(result); 

// convert jason object to string
let obj={ name:"Simon",Age:20,City:"New Yark"};
const jason= JSON.stringify(obj);
console.log(jason);

// const obj2= {name: "John", age: function () {return 30;}, city: "Perth"};
// const myJSON = JSON.stringify(obj2);
// console.log(obj2);