const word = "1234567890abcdef";
const array = Array.from(word);
const hexadecimal =()=>{
  var code = "";
  for (var i = 0; i <6; i++) {
    let x = Math.floor(Math.random()*array.length);
    code += array[x];
  }
  console.log (`#${code}`);
  return code;
};
setInterval(hexadecimal,500);