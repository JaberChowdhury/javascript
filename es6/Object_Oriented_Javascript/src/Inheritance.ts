/**
 *
 * 🫒 Title : Inheritance
 * 🫒 Description : extending parents class for reducing code duplication
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 25 July 2023
 *
 **/

// parents class
class Performer {
  name;
  age;
  matchPlayed;
  matchDate;
  #salary;
  constructor(
    name: string,
    age: number,
    matchPlayed: number,
    matchDate: string,
    salary: number,
  ) {
    this.name = name;
    this.age = age;
    this.matchPlayed = matchPlayed;
    this.matchDate = matchDate;
    this.#salary = salary;
  }
  getYearlySalary(): number {
    return this.#salary * 12;
  }
  getSalary(): number {
    return this.#salary;
  }
  display(): string {
    return `${this.name} a ${this.age} years old player played ${this.matchPlayed} match`;
  }
}

class Cricketer extends Performer {
  totalSix;
  constructor(
    name: string,
    age: number,
    matchPlayed: number,
    matchDate: string,
    salary: number,
    dateOfBirth: string,
    totalSix: number,
  ) {
    super(name, age, matchPlayed, matchDate, salary);
    this.name = name;
    this.age = age;
    this.matchPlayed = matchPlayed;
    this.matchDate = matchDate;
    this.totalSix = totalSix;
  }
}

class Footballer extends Performer {
  totalGoal;
  constructor(
    name: string,
    age: number,
    matchPlayed: number,
    matchDate: string,
    salary: number,
    dateOfBirth: string,
    totalGoal: number,
  ) {
    super(name, age, matchPlayed, matchDate, salary);
    this.name = name;
    this.age = age;
    this.matchPlayed = matchPlayed;
    this.matchDate = matchDate;
    this.totalGoal = totalGoal;
  }
}

const SakibAllHasan = new Cricketer(
  "Sakib Al Hasan",
  36,
  1600,
  "2023-1-23",
  200000,
  "1987-3-21",
  55,
);
const Ronaldo = new Cricketer(
  "Ronaldo",
  41,
  2600,
  "2022-1-23",
  20000000,
  "1927-3-21",
  55,
);

console.log(SakibAllHasan);
console.log(Ronaldo.getSalary());
