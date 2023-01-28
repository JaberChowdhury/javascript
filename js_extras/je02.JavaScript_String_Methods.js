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
*/

const string =
  'Hi there, I am from Bangladesh,I "love my country bangladesh" too much.';
console.log("Our string is here");
console.log(string);
console.log("🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊");
console.log("   ");
console.log(
  "\n\n🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊\n string.length;\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"
);
console.log(string.length);

console.log(
  "\n\n🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊\n string.slice(start,end);\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"
);
console.log(string.slice(20, 30)); // Bangladesh
console.log(string.slice(20)); // Bangladesh,I "love my country" too much.
console.log(string.slice(-10)); // too much

console.log(
  "\n\n🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊\n string.replace();\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"
);
console.log(string.replace("Bangladesh", "my homeland Bangladesh")); // case sensitive
console.log(string.replace(/bangladesh/i, "my homeland Bangladesh")); // case insensitive

console.log(
  "\n\n🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊🧊\n string.split();\n🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥"
);
console.log(string.split(" "));
