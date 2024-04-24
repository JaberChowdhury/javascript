/**
 *
 * 🫒 Title : inheritance
 * 🫒 Description : inheritance in typescript
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 18 July 2023
 *
 **/

// Parents class
class Human {
  hair: string;
  body: string;
  skin: string;
  mind: string;
  // taking value as parameters
  constructor(hair: string, body: string, skin: string, mind: string) {
    this.hair = hair;
    this.body = body;
    this.skin = skin;
    this.mind = mind;
  }
}

// creating a new object
const girl = new Human("blue", "weak", "white", "soft");

class Boy extends Human {
  dedication: boolean;
  constructor(
    hair: string,
    body: string,
    skin: string,
    mind: string,
    dedication: boolean,
  ) {
    super(hair, body, skin, mind);
    this.dedication = dedication;
  }
}
const boy = new Boy("black", "strong", "white", "strong", true);
console.log(boy);
