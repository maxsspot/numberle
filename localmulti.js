var mode = document.getElementById ("modechooser");

var normalMode = document.createElement ("option");normalMode.value = "Normal Mode";normalMode.text = "Normal Mode";mode.appendChild(normalMode);      
var timedNormalMode = document.createElement ("option");timedNormalMode.value = "Timed Normal Mode";timedNormalMode.text = "Timed Normal Mode";mode.appendChild(timedNormalMode);
var challengeMode = document.createElement ("option");challengeMode.value = "Challenge Mode";challengeMode.text = "Challenge Mode";mode.appendChild(challengeMode);
var timedChallengeMode = document.createElement ("option");timedChallengeMode.value = "Timed Challenge Mode";timedChallengeMode.text = "Timed Challenge Mode";mode.appendChild(timedChallengeMode);

// Performs actions depending on the mode
mode.addEventListener('change', function() {
      if (mode.value == "Normal Mode") {
        window.location = "https://numerale.netlify.app";
      } else if (mode.value == "Timed Normal Mode") {
        window.location = "https://numerale.netlify.app/timed";
      } else if (mode.value == "Challenge Mode") {
        window.location = "https://numerale.netlify.app/challenge";
      } else if (mode.value == "Timed Challenge Mode") {
        window.location = "https://numerale.netlify.app/timed-challenge";
      }
});

//////////////////////////
//////////////////////////
//////////////////////////

var p1nameInp = document.getElementById ("p1name");
var p2nameInp = document.getElementById ("p2name");
var p3nameInp = document.getElementById ("p3name");
var p4nameInp = document.getElementById ("p4name");
var p5nameInp = document.getElementById ("p5name");
var playerNumber = document.getElementById ("playerNumber");
var maxNumText = document.getElementById ("highest");
var lowNumText = document.getElementById ("lowest");
var number;
var currentPlayer = 1;
var currentPlayerText = document.getElementById ("currentPlayer");
var settingsMenu = document.getElementById ("settingsMenu");
var saveOptions = document.getElementById ("saveOptions");
var guessBox = document.getElementById ("multiBox");

// Skips setting page if user selected it
if (localStorage.getItem ("skipSettings")) {
      settingsMenu.style.transition = "all 0s";
      applySettings();
      settingsMenu.style.transition = "all 0.5s";
}

// Changes the amount of shown custom name inputs
function updatePlayers () {
      switch (parseInt(playerNumber.value)) {
            case 2:
                  hideAllNameInps();
                  p1nameInp.style.display = "inline-block";p2nameInp.style.display = "inline-block";
                  break;
            case 3:
                  hideAllNameInps();
                  p1nameInp.style.display = "inline-block";p2nameInp.style.display = "inline-block";p3nameInp.style.display = "inline-block";
                  break;
            case 4:
                  hideAllNameInps();
                  p1nameInp.style.display = "inline-block";p2nameInp.style.display = "inline-block";p3nameInp.style.display = "inline-block";p4nameInp.style.display = "inline-block";
                  break;
            case 5:
                  hideAllNameInps();
                  p1nameInp.style.display = "inline-block";p2nameInp.style.display = "inline-block";p3nameInp.style.display = "inline-block";p4nameInp.style.display = "inline-block";p5nameInp.style.display = "inline-block";
                  break;
      }
}

updatePlayers();

// Hides all name inputs
function hideAllNameInps () {
      p1nameInp.style.display = "none";
      p2nameInp.style.display = "none";
      p3nameInp.style.display = "none";
      p4nameInp.style.display = "none";
      p5nameInp.style.display = "none";
}

// Applys settings for the local multiplayer
function applySettings () {
      var max = parseInt(document.getElementById ("maxNumber").value);
      number = Math.floor(Math.random()*max) + 1;

      settingsMenu.style.opacity = "0";
      settingsMenu.style.pointerEvents = "none";

      currentPlayerText.innerHTML = p1nameInp.value;
      maxNumText.innerHTML = max;

      if (saveOptions.checked) {
            localStorage.setItem ("skipSettings","true");
            localStorage.setItem ("playerNumber",playerNumber);

            if (parseInt(playerNumber.value) == 2) {
                  localStorage.setItem ("player1name",p1nameInp.value); localStorage.setItem ("player2name",p2nameInp.value);
            } else if (parseInt(playerNumber.value) == 3) {
                  localStorage.setItem ("player1name",p1nameInp.value); localStorage.setItem ("player2name",p2nameInp.value); localStorage.setItem ("player3name",p3nameInp.value);
            } else if (parseInt(playerNumber.value) == 4) {
                  localStorage.setItem ("player1name",p1nameInp.value); localStorage.setItem ("player2name",p2nameInp.value); localStorage.setItem ("player3name",p3nameInp.value); localStorage.setItem ("player4name",p4nameInp.value);
            } else if (parseInt(playerNumber.value) == 5) {
                  localStorage.setItem ("player1name",p1nameInp.value); localStorage.setItem ("player2name",p2nameInp.value); localStorage.setItem ("player3name",p3nameInp.value); localStorage.setItem ("player4name",p4nameInp.value); localStorage.setItem ("player5name",p5nameInp.value);
            }
      }
}

// Resets settings for the local multiplayer
function resetSettings () {
      localStorage.clear();
      location.reload();
}

// Determines what to do based on the current player
function determinePlayer () {
      switch (currentPlayer) {
            case 1:
                  currentPlayerText.innerHTML = p1nameInp.value;
                  break;
            case 2:
                  currentPlayerText.innerHTML = p2nameInp.value;
                  break;
            case 3:
                  currentPlayerText.innerHTML = p3nameInp.value;
                  break;
            case 4:
                  currentPlayerText.innerHTML = p4nameInp.value;
                  break;
            case 5:
                  currentPlayerText.innerHTML = p5nameInp.value;
                  currentPlayer=0;
                  break;
      }
}

// A player made a guess
document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        if (parseInt(guessBox.value) < number && parseInt(guessBox.value) > parseInt(lowNumText.innerHTML)) {
            lowNumText.innerHTML = guessBox.value;
        } else if (parseInt(guessBox.value) > number && parseInt(guessBox.value) < parseInt(maxNumText.innerHTML)) {
            maxNumText.innerHTML = guessBox.value;
        }

        guessBox.value = "";
        currentPlayer++;
        determinePlayer();
    }
});
