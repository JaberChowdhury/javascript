/*
String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
string startsWith()






charAt(index): Returns the character at the specified index in a string.

charCodeAt(index): Returns the Unicode value of the character at the specified index in a string.

concat(str1, str2, ..., strX): Joins two or more strings and returns a new string.

endsWith(searchString, length): Returns true if a string ends with the specified characters, otherwise false.

fromCharCode(num1, num2, ..., numX): Returns a string created by converting Unicode values to characters.

includes(searchString, position): Returns true if a string contains the specified characters, otherwise false.

indexOf(searchValue, fromIndex): Returns the index of the first occurrence of a specified value in a string, or -1 if it is not found.

lastIndexOf(searchValue, fromIndex): Returns the index of the last occurrence of a specified value in a string, or -1 if it is not found.

localeCompare(compareString): Compares two strings in the current locale.

match(regexp): Searches a string for a specified pattern and returns an array of the matches.

normalize(form): Returns the Unicode Normalization Form of a string.

padEnd(targetLength, padString): Pads the end of a string with a specified string until it reaches a specified length.

padStart(targetLength, padString): Pads the beginning of a string with a specified string until it reaches a specified length.

repeat(count): Returns a new string with a specified number of copies of an existing string.

replace(searchValue, replaceValue): Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

search(regexp): Searches a string for a specified value, or a regular expression, and returns the position of the match.

slice(startIndex, endIndex): Extracts a part of a string and returns a new string.

split(separator, limit): Splits a string into an array of substrings.

startsWith(searchString, position): Returns true if a string starts with the specified characters, otherwise false.

substr(startIndex, length): Extracts a part of a string and returns a new string.

substring(startIndex, endIndex): Extracts a part of a string and returns a new string.

toLocaleLowerCase(): Converts a string to lowercase letters, according to the host's locale.

toLocaleUpperCase(): Converts a string to uppercase letters, according to the host's locale.

toLowerCase(): Converts a string to lowercase letters.

toString(): Returns the value of a string.

toUpperCase(): Converts a string to uppercase letters.

trim(): Removes whitespace from both ends of a string.

valueOf(): Returns the primitive value of a string.

*/

const string =
  'Hi there, I am from Bangladesh,I "love my country bangladesh" too much.';
console.log("Our string is here");
console.log(string);
console.log("🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊");
console.log("   ");
console.log(
  "\n\n🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊\n string.length;\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
);
console.log(string.length);

console.log(
  "\n\n🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊\n string.slice(start,end);\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
);
console.log(string.slice(20, 30)); // Bangladesh
console.log(string.slice(20)); // Bangladesh,I "love my country" too much.
console.log(string.slice(-10)); // too much

console.log(
  "\n\n🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊\n string.replace();\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
);
console.log(string.replace("Bangladesh", "my homeland Bangladesh")); // case sensitive
console.log(string.replace(/bangladesh/i, "my homeland Bangladesh")); // case insensitive

console.log(
  "\n\n🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊\n string.split();\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
);
console.log(string.split(" "));
