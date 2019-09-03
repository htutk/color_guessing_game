var numberOfSquares = 6;
var colors= [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  resetGame();
}

function setupModeButtons() {
  // mode buttons events listener
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
  
      if(this.textContent == "Easy") {
        numberOfSquares = 3;
      } else {
        numberOfSquares = 6;
      }
      resetGame();
    });
  }
}

function setupSquares() {
// squares events listeners
for (var i = 0; i < squares.length; i++) {  
    squares[i].addEventListener("click", function() {
      // grab picked color
      var clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor) {  // user guesses right
        messageDisplay.textContent = "Correct!";
        changeColor(pickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    }); 
  }
}

// how many squares to show
// pick color
// assign pick color
// update page to reflect changes
function resetGame() {
  colors = generateRandomColor(numberOfSquares);
  pickedColor = pickColor();
  // change color display to match picked color
  colorDisplay.textContent = pickColor();
  resetButton.textContent = "New Colors";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.display = "block";
    if(colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    
  }
  // change h1 background to original
  h1.style.backgroundColor = "steelblue";
  messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
  resetGame();
});


function changeColor(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(level) {
  var colors = [];
  for (var i = 0; i < level; i ++) {
    // get random color and add to array
    colors.push(randomColor());
  }
  return colors;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
