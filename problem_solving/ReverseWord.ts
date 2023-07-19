/*
reverse word in a string
input : I Love Bangladesh
output : I evoL hsedalgnaB
*/

const input: string = "I Love Bangladesh";

const reverseWord = (data: string): string => {
  // string to array
  const dataAsArray: string[] = data.split(" ");
  // string -> array -> reverse -> string
  const reversedWordArray = dataAsArray.map((d) => {
    return d.split("").reverse().join("");
  });
  // array -> string
  const output = reversedWordArray.join(" ");
  return output;
};

console.log(reverseWord(input));
