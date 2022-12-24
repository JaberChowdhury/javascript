const array = [
  "alpha",
  "okey",
  "99777",
  145,
  "rgb",
  "%%%%"
  ];
//console.log (array,array.length);
for (var i = 0; i < array.length; i++) {
 // console.log (array[i]);
}

array.forEach((value,index,array)=>{
  //console.log(value);
  //console.log(index);
  //console.log(array);
});
array.push(array);
console.log (array);