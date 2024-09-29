// function myFunction(add) {
//   console.log(`Hello ${add}`);
// }

// let val = "javaScript";
// myFunction(val);

// function addNum(a, b) {
//   let sum = a + b;
//   return sum;
// }
// console.log(addNum(4, 5));
// console.log(addNum(20, 10));

// Normal Declaration
function myFunction() {
  console.log("Hello, javaScript");
}

myFunction();

// Function Expression

let myNum = function () {
  console.log("Hello,World");
};

myNum();

// Arrow Function
let addName = (name, name2) => {
  console.log(`I am Learnig ${name} and ${name2}`);
};

addName("javaScript", "es6");
