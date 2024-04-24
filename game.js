let userScore = 0;
let compScore = 0;

let resetBtn = document.querySelector("#reset");
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

const gencompChoice = () => {
  const choice = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return choice[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game is Draw";
  msg.style.backgroundColor = "grey";
};

const showWinner = (userWin) => {
  if (userWin === true) {
    userScore++;
    msg.innerText = "You Win!";
    msg.style.backgroundColor = "green";
    user.innerText = userScore;
  } else {
    compScore++;
    msg.innerText = "You Lose!";
    msg.style.backgroundColor = "red";
    comp.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = gencompChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else if (userChoice === "rock") {
      userWin = compChoice === "scissor" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin);
  }
};

const game = choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log(userChoice);
    playGame(userChoice);
  });
});

function restart() {
  resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    user.innerText = userScore;
    comp.innerText = compScore;
    msg.innerText = "Select Your Choice";
    msg.style.backgroundColor = "black";
  });
}

restart();
