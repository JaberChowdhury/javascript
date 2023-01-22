// object
// object
const mustWork = {
  wakeUp: "6am",
  walking: "10km",
  breakfast: "11am",
  homework: "12am",
};
console.log(mustWork);

// constructor

function Student(name, cgpa, optional, main) {
  this.name = name;
  this.cgpa = cgpa;
  this.optional = optional;
  this.main = main;
  this.display = function () {
    console.log(this.name);
    console.log(this.cgpa);
    console.log(this.optional);
    console.log(this.main);
  };
}
const student1 = new Student("Jaber", "3.30", "biology", [
  "bangla",
  "English",
  "math",
]);
const student2 = new Student("rubban", "2.30", "Math", [
  "bangla",
  "English",
  "biology",
]);
const student3 = new Student("Imago", "1.30", "biology", [
  "bangla",
  "English",
  "math",
]);

student1.display();
student2.display();
student3.display();
