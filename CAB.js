let person = {
  fname: "Manhatten",
  lname: "Trump",
  name: function () {
    console.log(this.fname + " " + this.lname);
  },
};

let person2 = {
  fname: "Sachin",
  lname: "Tendulkar",
};

// person.name(); // print full name

// what if we apply to another person2 calling this method multiple times NOOOOO
//  Function borrowing concept

// person.name.call(person2); // Sachin Tendulkar

// also another way

function fullName(city, hometown) {
  console.log(
    this.fname + " " + this.lname + " from " + hometown + " current " + city
  );
}

// fullName.call(person, "Rewa");
// fullName.call(person2);

// // Instead of passing args indidually we can pass as a list of args
// fullName.apply(person, ["Mumbai", "Rewa"])

// bind return a function where we will use it in future
let fun = fullName.bind(person, ["Mumbai", "Rewa"]);
fun();
