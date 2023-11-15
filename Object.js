// prototypes, and Object props
let obj = {
  name: "Example",
  size: 56,
  height: 42,
};
console.log(typeof obj === "object"); // true

console.log(obj.hasOwnProperty("name")); // true

// but but
console.log(obj.hasOwnProperty("toString")); // false
// as we know now it will not access indirect props.

console.log("toString" in obj); // here we can access indirect props

// Protoype and Prototypal Inheritence in detail

// Basically inherit the props from other objects

let arr = ["name1", "name2"];
let obj1 = {
  fname: "Michael",
  lname: "Hussey",
  name: function () {
    console.log(`${this.fname} ${this.lname}`);
  },
};

// both will get all props like toString, sort all properties
// just because of prototypes

// in js whatever be we will create __proto__ will attach to it
console.log(arr.__proto__);

// prototype chain
arr.__proto__;
// equals to Array.prototype

arr.__proto__.__proto__;
// i.e; Object.prototype

arr.__proto__.__proto__.__proto__;
// got null

//in similar faishion
// in function too so that we call in js everything is object
let obj2 = {
  fname: "John",
};
obj2.__proto__ = obj1;
console.log(obj2.name()); // John Hussey due to prototype chaining
Function.prototype.myfunc = function (a, b) {
  return a + b;
};
// now i can use this in everywhere.