// global constants
const cluePauseTime = 250; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var clueHoldTime = 1000; //how long to hold each clue's light/sound
//Global Variables
var pattern = [2,2,3,5,4,6,6,6]
var progress = 0;
var guessCounter = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0

function getRandomPattern() {
  var randomPattern = [];
  for (let i = 0; i < 8; i++) {
    randomPattern[i] = Math.floor(Math.random() * 7);
  }
  return randomPattern;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function startGame() {
  //initialize game variables
  progress = 0;
  pattern = getRandomPattern();
  gamePlaying = true;
  clueHoldTime = 1000;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function playClueSequence() {
  guessCounter = 0;
  context.resume();
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    clueHoldTime = clueHoldTime - 25;
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}


function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        //Pattern right. Add next segment
        progress++;
        playClueSequence();
      }
    } else {
      //check next guess
      guessCounter++;
    }
  } else {
    //wrong - game over alert - lose
    loseGame();
  }
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won.");
}

// Sound Synthesis Functions
const freqMap = {
  1: 275,
  2: 350,
  3: 398,
  4: 468,
  5: 567,
  6: 689,
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function help() {
  var help =
    "Hello! \n Thank you for playing my game! \n How to play: \n 1. Click on start and the game will initiate. \n 2. Listen and watch carefully for the colors and sound \n 3. Once it has stopped, click the button(s) where the sound(s) came from or color(s) changed \n 4. Continue doing this until the pattern is over and you win! \n 5. If you choose the wrong button, you lose! \n BEWARE, THE GAME SPEEDS UP!";
  alert(help);
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
