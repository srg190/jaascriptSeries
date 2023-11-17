// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }
// // similar like function way we can assign to the variable

// const Rectangle = class {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

// // or

// const Rectangle = class Rectangle2 {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// };

class Person {
  name;
  constructor(name) {
    this.name = name;
  }
  introduceSelf() {
    console.log(`Hi! my name ${this.name}`);
  }
}

const giles = new Person("Glies");
giles.introduceSelf();

class Professor extends Person {
  teaches;
  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }
  introduceSelf() {
    console.log(
      `my name is ${this.name}, and I will be your ${this.teaches} professor.`
    );
  }
  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}

const personDetails = new Professor("Hemant", "Math");
personDetails.introduceSelf();
personDetails.grade("My Number");

class Student extends Person {
  #year;
  constructor(name, year) {
    super(name);
    this.#year = year;
  }
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}`);
  }
  canStudyArchery() {
    return this.#year > 1;
  }
}
const student = new Student("Humshakal", 2);
student.introduceSelf();
console.log(student.canStudyArchery());
