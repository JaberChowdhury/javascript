/**
 *
 * 🫒 Title : Polymorphism
 * 🫒 Description : replacing the method by extending parents class
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 27 July 2023
 *
 **/

class Gamer {
  name;
  #age;
  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }
  getAge(): number {
    return this.#age;
  }
  display(): string {
    return `${this.name} and his age is ${this.#age} is a Gamer`;
  }
}

class Cricketers extends Gamer {
  constructor(name: string, age: number) {
    super(name, age);
  }
  display(): string {
    return `${this.name} and his age is ${this.getAge()} is a Cricketer`;
  }
}

class Footballers extends Gamer {
  constructor(name: string, age: number) {
    super(name, age);
  }
  display(): string {
    return `${this.name} and his age is ${this.getAge()} is a Footballer`;
  }
}

const SakibAlHasan = new Cricketers("Sakib Al Hasan", 34);
const MesutOzil = new Footballers("Mesut Ozil", 31);

console.log(SakibAlHasan.display());
console.log(MesutOzil.display());
