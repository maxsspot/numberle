var mode = document.getElementById ("modechooser");

var singlePlayer = document.createElement ("option");singlePlayer.text = "SINGLEPLAYER";singlePlayer.disabled = true;singlePlayer.style.color="grey";singlePlayer.style.fontWeight="bold";mode.appendChild(singlePlayer);
var normalMode = document.createElement ("option");normalMode.value = "Normal Mode";normalMode.text = "Normal";mode.appendChild(normalMode);      
var timedNormalMode = document.createElement ("option");timedNormalMode.value = "Timed Normal Mode";timedNormalMode.text = "Timed Normal";mode.appendChild(timedNormalMode);
var challengeMode = document.createElement ("option");challengeMode.value = "Challenge Mode";challengeMode.text = "Challenge";mode.appendChild(challengeMode);
var timedChallengeMode = document.createElement ("option");timedChallengeMode.value = "Timed Challenge Mode";timedChallengeMode.text = "Timed Challenge";mode.appendChild(timedChallengeMode);
var multiPlayer = document.createElement ("option");multiPlayer.text = "MULTIPLAYER";multiPlayer.disabled = true;multiPlayer.style.color="grey";multiPlayer.style.fontWeight="bold";mode.appendChild(multiPlayer);
var localMultiplayer = document.createElement ("option");localMultiplayer.value = "Local Multiplayer";localMultiplayer.text = "Local Multiplayer";mode.appendChild(localMultiplayer);

localMultiplayer.selected = true;

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
var highNumWordsText = document.getElementById ("highestWords");
var lowNumWordsText = document.getElementById ("lowestWords");
var number;
var currentPlayer = 1;
var currentPlayerText = document.getElementById ("currentPlayer");
var settingsMenu = document.getElementById ("settingsMenu");
var saveOptions = document.getElementById ("saveOptions");
var useIneqInstead = document.getElementById ("useIneq");
var guessBox = document.getElementById ("multiBox");

// Skips setting page if user selected it and also loads saved values
if (localStorage.getItem ("skipSettings")) {
      settingsMenu.style.transition = "all 0s";
      applySettings();
      settingsMenu.style.transition = "all 0.5s";

      p1nameInp.value = localStorage.getItem ("player1name");p2nameInp.value = localStorage.getItem ("player2name");p3nameInp.value = localStorage.getItem ("player3name");p4nameInp.value = localStorage.getItem ("player4name");p5nameInp.value = localStorage.getItem ("player5name");

      currentPlayerText.innerHTML = localStorage.getItem ("player1name");
      
      document.getElementById ("maxNumber").value = localStorage.getItem ("maxNumber");
      
      maxNumText.innerHTML = localStorage.getItem ("maxNumber");
      highNumWordsText.innerHTML = localStorage.getItem ("maxNumber");
      
      playerNumber.value = localStorage.getItem ("playerNumber");

      if (localStorage.getItem ("useIneq")) {
            document.getElementById ("words").style.display = "none";
            document.getElementById ("inequality").style.display = "block";
      }
}

// Changes the amount of shown custom name inputs
function updatePlayers () {
      switch (parseInt(playerNumber.value)) {
            case 2:
                  hideAllNameInps();
                  p1nameInp.style.display = "inline-block";p2nameInp.style.display = "inline-block";
                  document.getElementById ("p1br").style.display = "inline-block";document.getElementById ("p2br").style.display = "inline-block";
                  break;
            case 3:
                  hideAllNameInps();
                  p1nameInp.style.display = "inline-block";p2nameInp.style.display = "inline-block";p3nameInp.style.display = "inline-block";
                  document.getElementById ("p1br").style.display = "inline-block";document.getElementById ("p2br").style.display = "inline-block";document.getElementById ("p3br").style.display = "inline-block";
                  break;
            case 4:
                  hideAllNameInps();
                  p1nameInp.style.display = "inline-block";p2nameInp.style.display = "inline-block";p3nameInp.style.display = "inline-block";p4nameInp.style.display = "inline-block";
                  document.getElementById ("p1br").style.display = "inline-block";document.getElementById ("p2br").style.display = "inline-block";document.getElementById ("p3br").style.display = "inline-block";document.getElementById ("p4br").style.display = "inline-block";
                  break;
            case 5:
                  hideAllNameInps();
                  p1nameInp.style.display = "inline-block";p2nameInp.style.display = "inline-block";p3nameInp.style.display = "inline-block";p4nameInp.style.display = "inline-block";p5nameInp.style.display = "inline-block";
                  document.getElementById ("p1br").style.display = "inline-block";document.getElementById ("p2br").style.display = "inline-block";document.getElementById ("p3br").style.display = "inline-block";document.getElementById ("p4br").style.display = "inline-block";document.getElementById ("p5br").style.display = "inline-block";
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

      document.getElementById ("p1br").style.display = "none";
      document.getElementById ("p2br").style.display = "none";
      document.getElementById ("p3br").style.display = "none";
      document.getElementById ("p4br").style.display = "none";
      document.getElementById ("p5br").style.display = "none";
}

// Applys settings for the local multiplayer
function applySettings () {
   if (!p1nameInp.value.includes ("<") && !p1nameInp.value.includes (">") && !p2nameInp.value.includes ("<") && !p2nameInp.value.includes (">") && !p3nameInp.value.includes ("<") && !p3nameInp.value.includes (">") && !p4nameInp.value.includes ("<") && !p4nameInp.value.includes (">") && !p5nameInp.value.includes ("<") && !p5nameInp.value.includes (">")) {
      guessBox.focus();
      
      var max = parseInt(document.getElementById ("maxNumber").value);
      number = Math.floor(Math.random()*max) + 1;

      settingsMenu.style.opacity = "0";
      settingsMenu.style.pointerEvents = "none";

      currentPlayerText.innerHTML = p1nameInp.value;
      maxNumText.innerHTML = max;
      highNumWordsText.innerHTML = max;
         
      if (useIneqInstead.checked) {
            localStorage.setItem ("useIneq","true");

            document.getElementById ("words").style.display = "none";
            document.getElementById ("inequality").style.display = "block";
      } else {
            document.getElementById ("words").style.display = "block";
            document.getElementById ("inequality").style.display = "none";

            //localStorage.removeItem ("useWords");
      }
         
      if (saveOptions.checked) {
            localStorage.setItem ("skipSettings","true");
            localStorage.setItem ("playerNumber",playerNumber.value);
            localStorage.setItem ("maxNumber",maxNumText.innerHTML);
            
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

// Checks for a win
function checkWin () {
      if (guessBox.value == number) {
            switch (currentPlayer) {
                  case 1:
                        Swal.fire({
                              title: p1nameInp.value + " wins!",
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
                              title: p2nameInp.value + " wins!",
                              icon: 'success',
                              allowEnterKey: false,
                              allowOutsideClick: false
                        }).then((result) => {
                          if (result.isConfirmed) {
                            location.reload();
                          }
                        });
                        
                        break;
                  case 3:
                        Swal.fire({
                              title: p3nameInp.value + " wins!",
                              icon: 'success',
                              allowEnterKey: false,
                              allowOutsideClick: false
                        }).then((result) => {
                          if (result.isConfirmed) {
                            location.reload();
                          }
                        });
                        
                        break;
                  case 4:
                        Swal.fire({
                              title: p4nameInp.value + " wins!",
                              icon: 'success',
                              allowEnterKey: false,
                              allowOutsideClick: false
                        }).then((result) => {
                          if (result.isConfirmed) {
                            location.reload();
                          }
                        });
                        
                        break;
                  case 5:
                        Swal.fire({
                              title: p5nameInp.value + " wins!",
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
                    if (currentPlayer == parseInt(playerNumber.value)) {
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
            lowNumWordsText.innerHTML = guessBox.value;
            
        } else if (parseInt(guessBox.value) > number && parseInt(guessBox.value) < parseInt(maxNumText.innerHTML)) {
            maxNumText.innerHTML = guessBox.value;
            highNumWordsText.innerHTML = guessBox.value;
        }
          
        guessBox.value = "";
    }
});
