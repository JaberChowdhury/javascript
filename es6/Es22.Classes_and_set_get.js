// es6 classes

class student {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  set studentname(name) {
    this.name = name;
  }
  get studentInfo() {
    return this.id + " " + this.name;
  }
}

const s1 = new student(101, "Black");
console.log(s1); // return a object
console.log(s1.studentInfo);
