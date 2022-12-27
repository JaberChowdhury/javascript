// promise function
// promise => pending,resolve,reject 
/*
callback has so many nested functions 
thats why it's hard to understand
*/


const promise1 = new Promise((resolve,reject)=>{
  const completed = true;
  if (completed) {
    resolve("The task1 is completed");
  }else{
    reject("The task1 is not completed");
  }
});
const promise2 = new Promise((resolve,reject)=>{
  const completed = true;
  if (completed) {
    resolve("The task2 is completed");
  }else{
    reject("The task2 is not completed");
  }
});
const promise3 = new Promise((resolve,reject)=>{
  const completed = true;
  if (completed) {
    resolve("The task3 is completed");
  }else{
    reject("The task3 is not completed");
  }
});
const promise4 = new Promise((resolve,reject)=>{
  const completed = false;
  if (completed) {
    resolve("The task4 is completed");
  }else{
    reject("The task4 is not completed");
  }
});
const promise5 = new Promise((resolve,reject)=>{
  const completed = true;
  if (completed) {
    resolve("The task5 is completed");
  }else{
    reject("The task5 is not completed");
  }
});

Promise.all([promise1,promise2,promise3,promise4,promise5])
.then(([res1,res2,res3,res4,res5])=> console.log (res1))
.catch(([err1,err2,err3,err4,err5])=> console.log(err1,err2,err3,err4,err5));





// Promise, Promise.all() , Promise.race()
console.log("starting the program");

// const taskOne = (personName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         {
//           personName: personName,
//         },
//         1000
//       );
//     });
//   });
// };
const taskOne = (personName) => {
  return new Promise((resolve, reject) => {
    resolve(
      {
        personName: personName,
      },
      1000
    );
  });
};

const taskTwo = (person) => {
  return new Promise((resolve, reject) => {
    console.log(`details of ${person.personName}`);

    resolve(
      {
        age: 29,
        phone: 040675,
      },
      2000
    );
  });
};
// const taskTwo = (person) => {
//   return new Promise((resolve, reject) => {
//     console.log(`details of ${person.personName}`);
//     setTimeout(() => {
//       resolve(
//         {
//           age: 29,
//           phone: 040675,
//         },
//         2000
//       );
//     });
//   });
// };

// taskOne("Anisul Islam")
//   .then(taskTwo)
//   .then((response) => {
//     console.log(response);
//   });

// const taskThree = () => {
//   const task3Text = "completed task3";
//   return Promise.resolve(task3Text);
// };
// const taskFour = () => {
//   const task4Text = "completed task4";
//   return Promise.resolve(task4Text);
// };

Promise.all([taskOne, taskTwo]).then((res) => console.log(res));
Promise.all([taskOne, taskTwo]).then(([res1, res2]) =>
  console.log("Results : ", res1, res2)
);

// Promise.race([taskOne, taskTwo, taskThree]).then((result) =>
//   console.log(result)
// );
console.log("ending the program");