/**
 *
 * 🫒 Title : Typescript type
 * 🫒 Description : Declare type in Typescript
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 18 June 2023
 *
 **/

// Basic type declaration
let aString: string;
let aNumber: number;
let aBoolean: boolean;
let aStringArray: string[];
let aNumberArray: number[];
let anUnionArray: (string | number)[];
let aRegExp: RegExp;

// assigning value later
aString = "Bangladesh";
aNumber = 2023;
aBoolean = true;
aStringArray = [..."abcdefgh"];
aNumberArray = [1, 8, 69, 68, 6];
anUnionArray = [2023, "Awesome"];
aRegExp = /\w+/g;

// we can assign a value with the type
const valueWithType: (string | number | boolean)[] = [86, "17117", true];

// type alias
// We can declare type using type or interface
type Person = {
  name: string;
  id: number;
  alive: boolean;
};

const Harry: Person = {
  name: "Harry",
  id: 18,
  alive: false,
};

interface Country {
  name: string[] | string;
  area: number | number[];
  isVisited: boolean | string;
}

const Japan: Country = {
  name: ["Japan", "Wonderful"],
  area: 71818628,
  isVisited: false,
};
const Indonesia: Country = {
  name: "Japan",
  area: [71818628, 2818181811818181881],
  isVisited: "No",
};

// declaring type in function
const IamAFunction = (
  a: number,
  b: string,
  c: (number | string)[],
  d: Country,
): object => {
  return {
    a,
    b,
    c,
    d,
  };
};

// Tuple
// a another type of type created by user

let tupleType: [string, number, boolean] = ["nice", 788, true];
