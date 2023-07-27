/**
 *
 * 🫒 Title : Abstraction
 * 🫒 Description : reduce the main implementation and simplify the user manual
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 27 July 2023
 *
 **/

class Core {
  #item;
  constructor(item: string) {
    this.#item = item;
  }
  random(limit: number): number {
    return Math.floor(Math.random() * limit);
  }
  hexadecimal(): string {
    const hexacode = [..."0123456789abcdef"];
    let final = "#";
    for (let i = 0; i < 6; i++) {
      final += hexacode[this.random(hexacode.length)];
    }
    return final;
  }
  getRandom(from: number, to: number): number | Error {
    if (from < to) {
      return Math.floor(Math.random() * (to - from)) + from;
    } else {
      return new Error(`${from} is bigger than ${to}`);
    }
  }
}

const engine = new Core("engine");

console.log(engine.hexadecimal());
console.log(engine.getRandom(12, 15));
