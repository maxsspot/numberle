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

