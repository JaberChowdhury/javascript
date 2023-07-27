/**
 *
 * 🫒 Title : Encapsulation
 * 🫒 Description : centralising everything in one place
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 24 July 2023
 *
 **/

class Player {
  name;
  age;
  #salary; // private property not available outside of this class
  constructor(name: string, age: number, salary: number) {
    this.name = name;
    this.age = age;
    this.#salary = salary;
  }
  displayInfo(): string {
    return `Player name is ${this.name} and he is ${this.age} years old`;
  }
  // this is called getter function allows us to use private property outside of this class
  getSalary(): number {
    return this.#salary;
  }
  getYearlySalary(): number {
    return 12 * this.#salary;
  }
}

const Musfik = new Player("Musfik", 34, 2828);
const Sakib = new Player("Sakib", 24, 282);
console.log(Musfik.displayInfo());

/*
console.log (Musfik.salary);
error TS2339: Property 'salary' does not exist
on type 'Player'.
*/
