let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;
let body = document.querySelector("body");
let levelTitle = document.getElementById("level-title");

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
  userClickedPattern = [];
  level++;
  levelTitle.innerHTML = `level ${level}`;
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
let checkTheAnswer = (currentLevel) => {
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

let startOver = () => {
  level = 0;
  gamePattern = [];
  started = false;
};

// adudio stuff
let playSound = (name) => {
  let audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
};

let gameOverAudio = () => {
  var gameOver = new Audio("sounds/wrong.mp3");
  gameOver.play();
};

//animation in button
let animatePress = (currentColor) => {
  let buttons = document.querySelector(`#${currentColor}`);
  buttons.classList.add("pressed");
  setTimeout(() => {
    buttons.classList.remove("pressed");
  }, 100);
};
