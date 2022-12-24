let word = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
let hexcolor = (y) => {
  for (let x = 0; x < word.length/2 - 2; x++) {
    let n = Math.floor(Math.random()*word.length);
    let hexcode = word[n];
    y=y+hexcode;
  }
  console.log ("#"+y);
 return y;
};
setInterval(hexcolor,1000,"");
let color = ("#"+hexcolor(""));