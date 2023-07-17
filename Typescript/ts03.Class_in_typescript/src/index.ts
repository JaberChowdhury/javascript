/**
 *
 * 🫒 Title : class
 * 🫒 Description : class in typescript
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 17 July 2023
 *
 **/

class Person {
  id: number;
  name: string;
  roll: number;
  constructor(id: number, name: string, roll: number) {
    this.id = id;
    this.name = name;
    this.roll = roll;
  }
  display(): string {
    return `${this.name} is a student with id ${this.id} and roll ${this.roll} .`;
  }
}

const masum = new Person(1, "masum", 12);
const maruf = new Person(2, "maruf", 13);
console.log(masum.display());
console.log(maruf.display());
