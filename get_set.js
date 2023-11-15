const student1 = {
  name: "Karan",
  section: "A",
  id: "37667&HJ",
  get getDetail() {
    return this.id + " " + this.name + " " + this.section;
  },
  set setName(name) {
    this.name = name;
  },
  set setSection(sect) {
    this.section = sect;
  },
};

console.log(student1.getDetail); // getDetail is not a function still syntax similar to func
student1.setName = "Rahul"
console.log(student1.getDetail);
console.log(" ------------------------ ")

// we can use defineProperty like prototype
const student = {
    firstName: 'Monica'
}

// getting property
Object.defineProperty(student, "getName", {
    get : function () {
        return this.firstName;
    }
});

// setting property
Object.defineProperty(student, "changeName", {
    set : function (value) {
        this.firstName = value;
    }
});