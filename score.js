var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var reset = document.getElementById("reset");
var p1Display = document.getElementById("p1Display");
var p2Display = document.getElementById("p2Display");
var numInput = document.querySelector("input");
var chances = document.getElementById("chances");
var gameOver = false;
var winningScore = 5;
p1Score = 0;
p2Score = 0;

p1.addEventListener("click", function() {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1Display.classList.add("winner");
    }
  }
  p1Display.textContent = p1Score;
});
p2.addEventListener("click", function() {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2Display.classList.add("winner");
    }
  }
  p2Display.textContent = p2Score;
});
function reset() {
  //if we change the chances in middle the this function is to reset the scores again
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
}
reset.addEventListener("click", function() {
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOver = false;
});

numInput.addEventListener("change", function() {
  //change occurs whenever the value is changed by typing or by clicking
  chances.textContent = numInput.value;
  winningScore = Number(numInput.value); //typecasting as we get string returned by numInput.value
  reset();
});
