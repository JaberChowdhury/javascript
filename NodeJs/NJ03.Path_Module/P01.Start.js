const path = require("path");
const myPath =
  "/data/data/com.termux/files/home/code/javascript/NodeJs/NJ03.Path_Module/P01.Start.js";
console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.extname(myPath));
console.log(path.toNamespacedPath(myPath));
console.log(path.isAbsolute(myPath));
console.log(path.parse(myPath));
console.log(path.win32);
