// Synchronous


const task1=()=>{
  console.log ("This is task-1");
};
const task2=()=>{
  console.log ("This is task-2");
};
const task3=()=>{
  console.log ("This is task-3");
};
const task4=()=>{
  console.log ("This is task-4");
};
const task5=()=>{
  console.log ("This is task-5");
};
const task6=()=>{
  console.log ("This is task-6");
};

task2();
task4();
task1();
task3();
task6();
task5();

/*

Output : 

This is task-2
This is task-4
This is task-1
This is task-3
This is task-6
This is task-5

*/