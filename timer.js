var mode = document.getElementById ("modechooser");

var normalMode = document.createElement ("option");normalMode.value = "Normal Mode";normalMode.text = "Normal Mode";mode.appendChild(normalMode);      
var timedNormalMode = document.createElement ("option");timedNormalMode.value = "Timed Normal Mode";timedNormalMode.text = "Timed Normal Mode";mode.appendChild(timedNormalMode);
var challengeMode = document.createElement ("option");challengeMode.value = "Challenge Mode";challengeMode.text = "Challenge Mode";mode.appendChild(challengeMode);
var timedChallengeMode = document.createElement ("option");timedChallengeMode.value = "Timed Challenge Mode";timedChallengeMode.text = "Timed Challenge Mode";mode.appendChild(timedChallengeMode);

if (window.location.pathname == "/index" || window.location.pathname == "/index.html" || window.location.pathname == "/") {
      var number = Math.floor(Math.random()*35) + 1;
      modeCurrent = "normal";
      normalMode.selected = true;
} else if (window.location.pathname == "/timed" || window.location.pathname == "/timed.html") {
      var number = Math.floor(Math.random()*35) + 1;
      modeCurrent = "normal";
      timedNormalMode.selected = true;
} else if (window.location.pathname == "/challenge" || window.location.pathname == "/challenge.html") {
      var number = Math.floor(Math.random()*50) + 1;
      modeCurrent = "challenge";
      challengeMode.selected = true;
} else if (window.location.pathname == "/timed-challenge" || window.location.pathname == "/timed-challenge.html") {
      var number = Math.floor(Math.random()*50) + 1;
      modeCurrent = "challenge";
      timedChallengeMode.selected = true;
}
