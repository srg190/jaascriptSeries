// {
//   length,
// toString(),
// pop(),
// push(),
// shift(),
// unshift(),
// join(),
// delete(),
// concat(),
// flat(),
// splice(),
// slice();
// }
// the above all are arrays methods
let arr = [1, 2, "hello", true, 3.24];
arr.forEach((e) => {
  console.log(e);
});
console.log("----------------------");
arr.unshift("man");
console.log(arr);
arr.shift();
console.log(arr);

console.log("----------------------");
let temp = arr.slice(-3);
console.log(temp);
console.log("----------------------");
let temp2 = arr.splice(1, 3); // modify the original one
console.log(arr);

//////// splice
let arr2 = [];
for (let i = 1; i <= 10; i++) {
  arr2.push(i);
}
console.log(arr2);
console.log("----------------------");

// arr2.splice(1, 0, 11);
// console.log(arr2)
arr2.splice(0, 0, 11);
console.log(arr2);
console.log("----------------------");
arr2.splice(0, 3);
console.log(arr2);

console.log("----------------------");
// Sorting
let arr_ = [3, 2, 1, 4, 56, 13];
arr_.sort((a, b) => a - b);
console.log(arr_);
// reverse
arr_.sort((a, b) => b - a);
console.log(arr_);

// compare sort

let data = [
  { name: "Michael", age: 26 },
  { name: "Soniya", age: 32 },
  { name: "Manas", age: 20 },
  { name: "Roop", age: 21 },
];

data.sort((a, b) => a.age - b.age);
console.log(data);
console.log("----------------------------");
// if 3 compare
let data_ = [
  { name: "Michael", age: 26, ht: 6.1 },
  { name: "Soniya", age: 26, ht: 5.5 },
  { name: "Manas", age: 20, ht: 5.8 },
  { name: "Roop", age: 21, h: 5.3 },
];

data_.sort((a, b) => (a.age === b.age ? b.ht - a.ht : a.age - b.age));
console.log(data_);

console.log("----------------------------");
data_.reverse();
console.log(data_);

// reduce, map,
console.log("----------------------------");
let arrr = [1, 2, 3, 4, 5, 6, 7, 8];
let res = arrr.map((val, i, arr) => {
  return i * val;
});
console.log(res);
console.log("----------------------------");
let val = arrr.reduce((temp, curr, i) => (curr += temp));
console.log(val)
