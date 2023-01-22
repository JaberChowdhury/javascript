// Lets see a javascript object
const info = {
  name: "Black_Light",
  work: "student",
  hobby: "programming",
};
console.log(info);
/* 
এখন আমাদের যদি এমন আরো অবজেক্ট  তৈরি করতে হয় তাহলে 
বারবার কপি-পেষ্ট করে ইডিট করে তৈরী করতে হবে। যা কখনো সময় সাপেক্ষ,
কখনো অসম্ভব। আর এই সমস্যা সমাধানের জন্য আমরা Object constructor  
ব্যবহার করব। 
*/

function Person(fname, lname, age) {
  this.firstName = fname;
  this.lastname = lname;
  this.age = age;
  this.fullname = function () {
    return this.firstName + " " + this.lastname;
  };
}

const black = new Person("Black", "Light", 19);
black.country = "Bangladesh";
black.hobby = "programming,Coding🗿";
console.log(black);
console.log(black.fullname());

/*important note 

[*] constructor name start with capital letter (for understanding purpose)
[*] we can add new property on our new constructor 
[*] we can not add new property on our template constructor (in here ,our Person constructor)
[*] we can now create so many data buy these and all of these are object 
*/
