const computerResult = document.querySelectorAll(".computer-output")[0];
const userResult = document.querySelectorAll(".user-output")[0];
const resultDisplay = document.querySelectorAll(".result")[0];
const buttons = document.querySelectorAll(".button");
const dashboard = document.querySelectorAll(".dashboard")[0];
let store = [];

buttons.forEach((button, id) => {
  button.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = ChoiceSelect(randomNum);
    computerResult.innerHTML = computerChoice;
    const userChoice = ChoiceSelect(id);
    userResult.innerHTML = userChoice;
    pushResult(computerChoice, userChoice);
  });
});

const ChoiceSelect = (id) => {
  const choice = ["Rock", "Paper", "Scissors"];
  return choice[id];
};

const pushResult = (computerChoice, userChoice) => {
  const cc = computerChoice;
  const uc = userChoice;
  let result = "";
  if (cc === uc) {
    result = "Match Draw";
  }
  if (cc === "Rock" && uc === "Paper") {
    result = "You Win";
  }
  if (cc === "Rock" && uc === "Scissors") {
    result = "You lose";
  }
  if (cc === "Paper" && uc === "Scissors") {
    result = "You win";
  }
  if (cc === "Paper" && uc === "Rock") {
    result = "You lose";
  }
  if (cc === "Scissors" && uc === "Rock") {
    result = "You win";
  }
  if (cc === "Scissors" && uc === "Paper") {
    result = "You lose";
  }
  resultDisplay.innerHTML = result;
  let item = {
    time: new Date().toLocaleString(),
    cc,
    uc,
    result,
  };
  store.push(item);
  saveForDashboard(store);
};

const saveForDashboard = (store) => {
  for (let i = 0; i < store.length; i++) {
    dashboard.innerHTML += `
        
    <div class="one">
      <div class="result">${store[i].time}</div>
      <div class="grid">
        <div class="gridChild">Computer</div>
        <div class="gridChild">User</div>
        <div class="gridChild">${store[i].cc}</div>
        <div class="gridChild">${store[i].uc}</div>
      </div>
      <div class="result">${store[i].result}</div>
      <hr />
    </div>
    `;
  }
};
// though i can design this completely but it's ok now
