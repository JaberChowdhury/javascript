const taskOne = (callback) => {
  console.log("Hi there,I am task 1");
  console.log("wait 3 seconds");
  callback();
};
const taskTwo = (callback) => {
  setTimeout(() => {
    console.log("Hi there,I am task 2");
    callback();
  }, 3000);
};
const taskThree = (callback) => {
  console.log("Hi there,I am task 3");
  console.log("Wait 2 seconds");
  callback();
};
const taskFour = (callback) => {
  setTimeout(() => {
    console.log("Hi there,I am task 4");
    callback();
  }, 2000);
};
const taskFive = (callback) => {
  console.log("Hi there,I am task 5");
  callback();
};
const taskSix = () => {
  console.log("Hi there,I am task 6");
};

taskOne(() => {
  taskTwo(() => {
    taskThree(() => {
      taskFour(() => {
        taskFive(() => {
          taskSix();
        });
      });
    });
  });
});

// its a example of callback functions
