const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
const started = false;
const level = 0;
const body = document.querySelector("body");
const levelTitle = document.getElementById("level-title");

// to start the game
document.addEventListener("keypress", () => {
  if (!started) {
    levelTitle.innerHTML = `level ${level}`;
    nextSequence();
    sarted = true;
  }
});

// generete the next sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  let animationBtn = document.querySelector("#" + randomChosenColour);
  animationBtn.classList.add("FadeInFadeOut");
  setTimeout(() => {
    animationBtn.classList.remove("FadeInFadeOut");
  }, 50);
  playSound(randomChosenColour);
}

// here we detect which button is pressed by the user

var bTn = document.getElementsByClassName("btn");
document.querySelectorAll(".btn").forEach((bt) => {
  bt.onclick = () => {
    let userChosenColor = bt.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkTheAnswer(userClickedPattern.length - 1);
  };
});

// check the answer and dynamic of the game
const checkTheAnswer = (currentLevel) => {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("succes");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    body.classList.add("game-over");
    setTimeout(() => {
      body.classList.remove("game-over");
    }, 200);
    gameOverAudio();
    levelTitle.innerHTML = `Game Over, Press Any Key to Restart`;
    levelTitle.style.fontSize = "2rem";
    startOver();
  }
};

const startOver = () => {
  level = 0;
  gamePattern = [];
  started = false;
};

// adudio stuff
const playSound = (name) => {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

function gameOverAudio() {
  var gameOver = new Audio("sounds/wrong.mp3");
  gameOver.play();
}

//animation in button
const animatePress = (currentColor) => {
  const buttons = document.querySelector(`#${currentColor}`);
  buttons.classList.add("pressed");
  setTimeout(() => {
    buttons.classList.remove("pressed");
  }, 100);
};
console.log(gamePattern);
console.log(userClickedPattern);
