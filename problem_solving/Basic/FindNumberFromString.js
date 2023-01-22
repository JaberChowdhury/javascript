const data = [..."991929jsjsjjejwjjw9"];
const number =  [..."0123456789"];
let final = [];
for(let i=0; i<data.length; i++) {
  for(let k=0; k<number.length; k++) {
    if(number[k] === data[i]) {
      final.push(data[i]);
    }
  }
}
console.log (final);