const buttonColors = ["red", "blue", "green", "yellow"];
const gamePattern = [];
const userClickedPattern = [];
const started = false;
const level = 0;
const levelTitle = document.getElementById("level-title");

// to start the game
document.addEventListener("keypress", () => {
  if (!started) {
    levelTitle.innerHTML = `level ${level}`;
    nextSequence();
  }
});

// generete the next sequence
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColors[randomNumber];
  gamePattern.push(randomChosenColour);
  const animationBtn = document.querySelector("#" + randomChosenColour);
  animationBtn.classList.add("FadeInFadeOut");
  setTimeout(() => {
    animationBtn.classList.remove("FadeInFadeOut");
  }, 50);
  playSound(randomChosenColour);
}

// here we detect which button is pressed by the user

var bTn = document.getElementsByClassName("btn");
for (var i = 0; i < bTn.length; i++) {
  bTn[i].addEventListener("click", (e) => {
    var userChosenColor = bTn[];
    console.log(userChosenColor);
  });
}
// adudio stuff
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function gameOverAudio() {
  var gameOver = new Audio("sounds/wrong.mp3");
  gameOver.play();
}
