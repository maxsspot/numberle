var mode = document.getElementById ("modechooser");

var singlePlayer = document.createElement ("option");singlePlayer.text = "SINGLEPLAYER";singlePlayer.disabled = true;singlePlayer.style.color="grey";singlePlayer.style.fontWeight="bold";mode.appendChild(singlePlayer);
var normalMode = document.createElement ("option");normalMode.value = "Normal Mode";normalMode.text = "Normal";mode.appendChild(normalMode);      
var timedNormalMode = document.createElement ("option");timedNormalMode.value = "Timed Normal Mode";timedNormalMode.text = "Timed Normal";mode.appendChild(timedNormalMode);
var challengeMode = document.createElement ("option");challengeMode.value = "Challenge Mode";challengeMode.text = "Challenge";mode.appendChild(challengeMode);
var timedChallengeMode = document.createElement ("option");timedChallengeMode.value = "Timed Challenge Mode";timedChallengeMode.text = "Timed Challenge";mode.appendChild(timedChallengeMode);
var multiPlayer = document.createElement ("option");multiPlayer.text = "MULTIPLAYER";multiPlayer.disabled = true;multiPlayer.style.color="grey";multiPlayer.style.fontWeight="bold";mode.appendChild(multiPlayer);
var localMultiplayer = document.createElement ("option");localMultiplayer.value = "Local Multiplayer";localMultiplayer.text = "Local Multiplayer";mode.appendChild(localMultiplayer);
var vsBot = document.createElement ("option");localMultiplayer.value = "VS Bot";localMultiplayer.text = "VS Bot";mode.appendChild(vsBot);

vsBot.selected = true;

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
      } else if (mode.value == "Local Multiplayer") {
        window.location = "https://numerale.netlify.app/localmulti";
      } else if (mode.value == "VS Bot") {
        window.location = "https://numerale.netlify.app/vsbot";
      }
});

//////////////////////////
//////////////////////////
//////////////////////////

var playerNumber = document.getElementById ("playerNumber");
var maxNumText = document.getElementById ("highest");
var lowNumText = document.getElementById ("lowest");
var number = Math.floor(Math.random()*50) + 1;
var currentPlayer = 1;
var currentPlayerText = document.getElementById ("currentPlayer");
var guessBox = document.getElementById ("multiBox");

// The bots turn
function botsTurn () {
      guessBox.disabled = true;
      
      var botsGuess = Math.floor(Math.random()*parseInt(maxNumText.innerHTML)) + 1;
      botsGuessSplit = botsGuess.toString().split("");

      setTimeout(function() {
            guessBox.value += botsGuessSplit[0]
      },500);
      
      if (botsGuessSplit.length > 1) {
            setTimeout(function() {
                  guessBox.value += botsGuessSplit[1]
            },1500);
      }
            
      setTimeout(function() {
            checkWin();
            guessBox.value="";
            currentPlayer=1;
      },2500);
      
      guessBox.disabled = false;
}

// Determines what to do based on the current player
function determinePlayer () {
      switch (currentPlayer) {
            case 1:
                  currentPlayerText.innerHTML = "Player"
                  break;
            case 2:
                  currentPlayerText.innerHTML = "Bot"
                  botsTurn();
                  currentPlayer = 1;
                  break;
      }
}

// Checks for a win
function checkWin () {
      if (guessBox.value == number) {
            switch (currentPlayer) {
                  case 1:
                        Swal.fire({
                              title: "Player wins!",
                              icon: 'success',
                              allowEnterKey: false,
                              allowOutsideClick: false
                        }).then((result) => {
                          if (result.isConfirmed) {
                            location.reload();
                          }
                        });
                        
                        break;
                  case 2:
                        Swal.fire({
                              title: "Bot wins!",
                              icon: 'success',
                              allowEnterKey: false,
                              allowOutsideClick: false
                        }).then((result) => {
                          if (result.isConfirmed) {
                            location.reload();
                          }
                        });
                        
                        break;
                  }
            } else {
                    if (currentPlayer == 2) {
                        currentPlayer = 1;
                    } else {
                        currentPlayer++;
                    }
                    
                    determinePlayer();
            }
}

// A player made a guess
guessBox.addEventListener("keydown", function(event) {
    if (event.key === 'Enter' && guessBox.value != "") {
        checkWin();
          
        if (parseInt(guessBox.value) < number && parseInt(guessBox.value) > parseInt(lowNumText.innerHTML)) {
            lowNumText.innerHTML = guessBox.value;
        } else if (parseInt(guessBox.value) > number && parseInt(guessBox.value) < parseInt(maxNumText.innerHTML)) {
            maxNumText.innerHTML = guessBox.value;
        }
          
        guessBox.value = "";
    }
});
