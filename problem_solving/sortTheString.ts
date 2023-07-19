/**
 *
 * 🫒 Title : string sort
 * 🫒 Description : sort the string
 * 🫒 Author : Md Jaber Hossain Chowdhury
 * 🫒 Date : 19 July 2023
 *
 **/

const input =
  "JavaScript is a popular programming language and it is useful to create websites";

const sortTheString = (data: string): any => {
  // string -> array
  const dataAsArray = data.split(" ");
  const sortedArray = dataAsArray.sort((a: string, b: string) => {
    return a.length - b.length;
  });
  const output = sortedArray.join(" ");
  return output;
};

console.log(sortTheString(input));
