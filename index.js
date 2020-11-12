var gameStarted = 0;

var btns = ["red", "green", "blue", "yellow"];

var gameButtons = [];

var level = 0;

var rand = Math.floor((Math.random() * btns.length));

//alert(btns[rand]);
$(document).keydown(function(event) {
  if (gameStarted === 0) {
    console.log(event.key);
    gameStarted = 1;
    chooseRandomButton();
    level = 1;
    changeText(level);
  }
});

// FUNCTION THAT CHOOSES A RANDOM NUMBER
function chooseRandomButton () {
  setTimeout(function() {

    rand = Math.floor(Math.random() * 4);
    makeSoundAndAnimate(btns[rand]);
    gameButtons.push(btns[rand]);
  }, 1000);

  clickCount = 0;
}

var clickCount = 0;

$(".btn").click(function() {

  if (gameButtons[clickCount] === this.id) {
    makeSoundAndAnimate(this.id);
    clickCount++;

    if (clickCount === gameButtons.length) {
      level++;
      changeText(level);
      chooseRandomButton();
    }
  } else {
    makeSoundAndAnimate("wrong");
    gameButtons = [];
    gameStarted = 0;
  }

});

// FUNCTION THAT CHANGES THE H1 TEXT
function changeText(text) {
  if (text === "wrong") {
    $("h1").text("Game over, Press a button to start again");
  } else {
    $("h1").text("Level " + text);
  }
}

// FUNCTION THAT ANIMATES AND MAKES SOUND
function makeSoundAndAnimate(btnPressed) {

  if (gameStarted === 1) {
    var audio;

    switch (btnPressed) {
      case "red":
        audio = new Audio("sounds/red.mp3");
        audio.play();
        $(".red").toggleClass("pressed");
        setTimeout(function() {
          $(".red").toggleClass("pressed");
        }, 100);
        break;

      case "green":
        audio = new Audio("sounds/green.mp3");
        audio.play();
        $(".green").toggleClass("pressed");
        setTimeout(function() {
          $(".green").toggleClass("pressed");
        }, 100);
        break;

      case "blue":
        audio = new Audio("sounds/blue.mp3");
        audio.play();
        $(".blue").toggleClass("pressed");
        setTimeout(function() {
          $(".blue").toggleClass("pressed");
        }, 100);
        break;

      case "yellow":
        audio = new Audio("sounds/yellow.mp3");
        audio.play();
        $(".yellow").toggleClass("pressed");
        setTimeout(function() {
          $(".yellow").toggleClass("pressed");
        }, 100);
        break;

      case "wrong":
        audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("body").toggleClass("game-over");
        setTimeout(function() {
          $("body").toggleClass("game-over");
          changeText("wrong")
        }, 200);
        break;

      default:
        break;

    }
  }
}
