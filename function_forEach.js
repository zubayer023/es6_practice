let foods = ["apple", "banana", "cake"];

let number = [1, 32, 25, 50];

// let allAdd = (item, i, abc) => {
//   console.log(`index : ${i} and Item ${item}`);
//   console.log(abc);
// };

// foods.forEach(allAdd);

// function addSome(item) {
//   return `${item} is a food`;
// }

// let arry = foods.map(addSome);

// console.log(arry);

let arry_square = number.map((item) => {
  return item * item;
});

console.log(arry_square);
