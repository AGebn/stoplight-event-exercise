var stopButton = document.getElementById("stopButton");
var slowButton = document.getElementById("slowButton");
var goButton = document.getElementById("goButton");
var stopLight = document.getElementById("stopLight");
var slowLight = document.getElementById("slowLight");
var goLight = document.getElementById("goLight");

// console.log(slowButton);

var stopOn = false;
var slowOn = false;
var goOn = false;

stopButton.addEventListener("click", function () {
  if (stopOn === false) {
    stopLight.style.backgroundColor = "red";
    stopOn = true;
    return stopOn;
  } else {
    stopLight.style.backgroundColor = "black";
    stopOn = false;
    return stopOn;
  }
});

slowButton.addEventListener("click", function () {
  if (slowOn === false) {
    slowLight.style.backgroundColor = "orange";
    slowOn = true;
    return slowOn;
  } else {
    slowLight.style.backgroundColor = "black";
    slowOn = false;
    return slowOn;
  }
});

goButton.addEventListener("click", function () {
  if (goOn === false) {
    goLight.style.backgroundColor = "green";
    goOn = true;
    return goOn;
  } else {
    goLight.style.backgroundColor = "black";
    goOn = false;
    return goOn;
  }
});
