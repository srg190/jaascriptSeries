const arr1 = [1, 2, 3, 4, 5, 6];
// const arr2 = arr1;

// arr2[0] = 7;
// console.log(arr1);
// chnaged the original one

// using spread to change the reference
const arr3 = [...arr1];
// arr3[0] = 7;
// console.log(arr3, arr1);

const add = (args) => {
  let sum = 0;
  console.log(args);
  for (i of args) {
    sum += i;
  }
  console.log(sum);
};
add([...arr3]);

// also
// add.apply(null, arr3);

let obj1 = {
  name: "Abc",
};
let obj2 = {
  ...obj1,
  class: "C",
};
let obj3 = {
  ht: 5.6,
  wt: 70,
};
let obj4 = {
  ...obj2,
  ...obj3,
};

console.log(obj4);
let obj5 = {
  ...arr3,
};
console.log(obj5);

console.log("////////// Destructuring ////////////");
const numbers = [];
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
// console.log(numbers);

// This is equivalent to:
//   const numbers[0] = obj.a;
//   const numbers[1] = obj.b;
// Which definitely is not valid.

let arr = [undefined, 5];
const [x = 10, y = 20] = arr; //default val
console.log(x, y);

let obj_ = {
  name_: "Radha",
  size: null,
};
// ????????????????
const { name_, size = 10 } = obj_; // Correct default value assignment
console.log(name_, size);

const { ht, ...rest } = obj4;

console.log(ht, rest);
console.log("----------------------");
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localizationTags: [],
      lastEdit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

const {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"
