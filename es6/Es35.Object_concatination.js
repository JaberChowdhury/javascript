const object1 = { name1 : "object1", define1 : "It's a very good object" };
const object2 = { name2 : "object2", define2 : "It's a very good object" };
const object3 = { name3 : "object3", define3 : "It's a very good object" };


try{
  const final = {...object1,...object2,...object3};
  console.log (final);
}catch(e){
  console.log (e);
}
console.log ("everything is ok"); // :)


/*
But if the property of these objects are same than spread operator will overlape the property's value
*/



const object4 = { name : "object4", define : "It's a very good object" };
const object5 = { name : "object5", define : "It's a very good object" };
const object6 = { name : "object6", define : "It's a very good object" };


try{
  const final2 = {...object4,...object5,...object6};
  console.log (final2);
}catch(e){
  console.log (e);
}
console.table("everything is ok but with some difference"); // :)

