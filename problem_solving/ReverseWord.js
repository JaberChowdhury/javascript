/*
reverse word in a string
input : I Love Bangladesh
output : I evoL hsedalgnaB
*/
var input = "I Love Bangladesh";
var reverseWord = function (data) {
  // string to array
  var dataAsArray = data.split(" ");
  // string -> array -> reverse -> string
  var reversedWordArray = dataAsArray.map(function (d) {
    return d.split("").reverse().join("");
  });
  // array -> string
  var output = reversedWordArray.join(" ");
  return output;
};
console.log(reverseWord(input));
