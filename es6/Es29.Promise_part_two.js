// promise chain

const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 is completed");
  });
};
const taskTwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 2 is completed");
    }, 2000);
  });
};
const taskThree = () => {
  return new Promise((resolve, reject) => {
    resolve("task 3 is completed");
  });
};
const taskFour = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 4 is completed");
    }, 1000);
  });
};
const taskFive = () => {
  return new Promise((resolve, reject) => {
    resolve("task 5 is completed");
  });
};
const taskSix = () => {
  return new Promise((resolve, reject) => {
    resolve("task 6 is completed");
  });
};

taskOne()
  .then((res) => console.log(res))
  .then(taskTwo)
  .then((res) => console.log(res))
  .then(taskThree)
  .then((res) => console.log(res))
  .then(taskFour)
  .then((res) => console.log(res))
  .then(taskFive)
  .then((res) => console.log(res))
  .then(taskSix)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
