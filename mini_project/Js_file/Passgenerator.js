

var capitalword = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var smallword = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialicon = ["!","$","%","&","@","*","#","/","_","€","+","-","÷","=","₩","^",":","?"];

const password = (cap,sam,num,spe,mainpass) => {
  for (let i = 0; i < 18; i++) {
      var x = Math.floor(Math.random()*capitalword.length);
      var xx = Math.floor(Math.random()*capitalword.length);
      var y = Math.floor(Math.random()*number.length);
      var z = Math.floor(Math.random()*specialicon.length);

      capitalwordrandom = capitalword[x];
      smallwordrandom = smallword[xx];
      numberrandom = number[y];
      specialiconrandom = specialicon[z];


      cap += capitalwordrandom;
      sam += smallwordrandom;
      num += numberrandom;
      spe += specialiconrandom;

      var passwordtotal = cap.concat(sam,num,spe);
      var prn = Math.floor(Math.random()*passwordtotal.length);
      var passwordmain = passwordtotal[prn];
      mainpass += passwordmain;
 }

 //  console.log (cap,sam,num,spe,mainpass);
     console.log ("------------      "+mainpass);
     console.log ("      ");
}
password("","","","","");

setInterval(password,0.001,"","","","","");




/*
for (let x=0; x<100; x++) {
    password("","","","","");
   // console.log ("🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥");
}
*/
