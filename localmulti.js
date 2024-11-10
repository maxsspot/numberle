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

// Changes the amount of shown custom name inputs
function updatePlayers () {
      switch (playerNumber.value) {
            case 2:
                  hideAllNameInps();
                  p1nameInp.style.display = "block";p2nameInp.style.display = "block";
                  break;
            case 3:
                  hideAllNameInps();
                  p1nameInp.style.display = "block";p2nameInp.style.display = "block";p3nameInp.style.display = "block";
                  break;
            case 4:
                  hideAllNameInps();
                  p1nameInp.style.display = "block";p2nameInp.style.display = "block";p3nameInp.style.display = "block";p4nameInp.style.display = "block";
                  break;
            case 5:
                  hideAllNameInps();
                  p1nameInp.style.display = "block";p2nameInp.style.display = "block";p3nameInp.style.display = "block";p4nameInp.style.display = "block";p5nameInp.style.display = "block";
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
