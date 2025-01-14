var mode = document.getElementById ("modechooser");

var singlePlayer = document.createElement ("option");singlePlayer.text = "SINGLEPLAYER";singlePlayer.disabled = true;singlePlayer.style.color="grey";singlePlayer.style.fontWeight="bold";mode.appendChild(singlePlayer);
var normalMode = document.createElement ("option");normalMode.value = "Normal Mode";normalMode.text = "Normal";mode.appendChild(normalMode);      
var timedNormalMode = document.createElement ("option");timedNormalMode.value = "Timed Normal Mode";timedNormalMode.text = "Timed Normal";mode.appendChild(timedNormalMode);
var challengeMode = document.createElement ("option");challengeMode.value = "Challenge Mode";challengeMode.text = "Challenge";mode.appendChild(challengeMode);
var timedChallengeMode = document.createElement ("option");timedChallengeMode.value = "Timed Challenge Mode";timedChallengeMode.text = "Timed Challenge";mode.appendChild(timedChallengeMode);
var vsBot = document.createElement ("option");vsBot.value = "VS Bot";vsBot.text = "VS Bot";mode.appendChild(vsBot);
//////////
var multiPlayer = document.createElement ("option");multiPlayer.text = "MULTIPLAYER";multiPlayer.disabled = true;multiPlayer.style.color="grey";multiPlayer.style.fontWeight="bold";mode.appendChild(multiPlayer);
var localMultiplayer = document.createElement ("option");localMultiplayer.value = "Local Multiplayer";localMultiplayer.text = "Local Multiplayer";mode.appendChild(localMultiplayer);

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

guessBox.focus();

// The bots turn
function botsTurn () {
  if (currentPlayer===2) {
      guessBox.disabled = true;
      
      var min = parseInt(lowNumText.innerHTML);
      var max = parseInt(maxNumText.innerHTML);
      var botsGuess = Math.floor(Math.random() * (max - min + 1)) + min + 1;

      //alert("Maximum: "+max+" | Minumum: "+min);
        
      botsGuessSplit = botsGuess.toString().split("");

      setTimeout(function() {
            guessBox.value += botsGuessSplit[0]
      },500);
      
      if (botsGuessSplit.length > 1) {
            setTimeout(function() {
                  guessBox.value += botsGuessSplit[1]
            },1000);
      }
      
      setTimeout(function() {
            if (parseInt(guessBox.value) < number && parseInt(guessBox.value) > parseInt(lowNumText.innerHTML)) {
                  lowNumText.innerHTML = guessBox.value;
            } else if (parseInt(guessBox.value) > number && parseInt(guessBox.value) < parseInt(maxNumText.innerHTML)) {
                  maxNumText.innerHTML = guessBox.value;
            }
            
            checkWin();
            determinePlayer();
            guessBox.value="";
            currentPlayer=1;
      },1500);
      
      guessBox.disabled = false;
  }
}

// Determines what to do based on the current player
function determinePlayer () {
      switch (currentPlayer) {
            case 1:
                  guessBox.focus();
                  currentPlayerText.innerHTML = "Player"
                  break;
            case 2:
                  currentPlayerText.innerHTML = "Bot"
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
                              timer: 2000,
                              showConfirmButton: false,
                              allowOutsideClick: false
                        })

                        setTimeout(function() {
                              location.reload();
                        },2000);
                        
                        break;
                  case 2:
                        currentPlayer--;
                        guessBox.disabled = true;;
                        Swal.fire({
                              title: "Bot wins!",
                              icon: 'success',
                              timer: 2000,
                              showConfirmButton: false,
                              allowOutsideClick: false
                        })                        
                              
                        setTimeout(function() {
                              location.reload();
                        },2000);
                        
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
        botsTurn();
    }
});
