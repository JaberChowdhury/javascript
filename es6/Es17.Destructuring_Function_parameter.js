// destructuring function parameter 


const message =({id,message,name})=>{
  console.log (`Hello ${name} id= ${id} please read your message your message: ${message}`);
};

const student = {
  id : 101,
  name : "jaber",
  message : "Please attention on your life goal,best of luck"
};
message(student);