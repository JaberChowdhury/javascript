// Array.__proto__.splice(startPoint,length,whatToReplae)

const num = [..."0123456789"];

const result = num.splice(3, 2, ..."😅🥀🙂😊😇");

console.log(num); // ['0','1','2','😅','🥀', '🙂', '😊', '😇','5',  '6',  '7',  '8','9']
console.log(result); // [ '3', '4' ]

/*

📛 Array.__proto__.splice() method change the main array

📛 What happened with that array 
   First 3 parameter start cutting from 3 (after 2) and ends at 4 (before 5)
   because 3+2 = 5th position thats why this cut 3 and 4 
   than replace 4 with emojis
   

  
📛 that result variable will return that array which has been cut from the array
*/
