var modeCurrent;

var time = document.getElementById ("timer");
var initialTime = 10;
var shouldcountdown = false;
var shouldalert = true;

function startTimer () {
  shouldcountdown=true;
}

setInterval (function() {
  
  if (shouldcountdown) {
    initialTime--;
  }
  
  time.innerHTML = initialTime;
  if (initialTime == 0) {
    shouldcountdown=false;
    if (shouldalert) {
      shouldalert=false;
      Swal.fire({
          title: 'Out of time!',
          icon: 'error',
          timer: 2000,
          allowOutsideClick: false,
          focusConfirm: false,
          showConfirmButton: false
        })

        restart();
    }
  }

  if (initialTime < 0) {
    location.reload();
  }
},1000);

document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      if (shouldalert=true) {
       shouldcountdown=false;
      }
    } else {
       shouldcountdown=true;
    }
});

var modeCurrent;

var mode = document.getElementById ("modechooser");

var singlePlayer = document.createElement ("option");singlePlayer.text = "SINGLEPLAYER";singlePlayer.disabled = true;singlePlayer.style.color="grey";singlePlayer.style.fontWeight="bold";mode.appendChild(singlePlayer);
var normalMode = document.createElement ("option");normalMode.value = "Normal Mode";normalMode.text = "Normal";mode.appendChild(normalMode);      
var timedNormalMode = document.createElement ("option");timedNormalMode.value = "Timed Normal Mode";timedNormalMode.text = "Timed Normal";mode.appendChild(timedNormalMode);
var challengeMode = document.createElement ("option");challengeMode.value = "Challenge Mode";challengeMode.text = "Challenge";mode.appendChild(challengeMode);
var timedChallengeMode = document.createElement ("option");timedChallengeMode.value = "Timed Challenge Mode";timedChallengeMode.text = "Timed Challenge";mode.appendChild(timedChallengeMode);
var multiPlayer = document.createElement ("option");multiPlayer.text = "MULTIPLAYER";multiPlayer.disabled = true;multiPlayer.style.color="grey";multiPlayer.style.fontWeight="bold";mode.appendChild(multiPlayer);
var localMultiplayer = document.createElement ("option");localMultiplayer.value = "Local Multiplayer";localMultiplayer.text = "Local Multiplayer";mode.appendChild(localMultiplayer);

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

///////////////////////////////////////////////

// Changes random number and shown mode depending on the mode
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

///////////////////////////////////////////////

            /*var x = 0;
            var winsye = localStorage.setItem ("winscount", x)
            document.getElementById ("wins").innerHTML = winsye.value;*/
            document.getElementById ("one").focus();

            function restart () {
              shouldcountdown=false;
                        setTimeout(function(){ location.reload(); }, 2000);                    
            }
            
            

            function tryguess () {
                document.getElementById ("go").style.display = "none";
                document.getElementById ("go2").style.display = "block";
                document.getElementById ("one").disabled = true;
                document.getElementById ("two").disabled = false;
                        document.getElementById ("two").focus();
                if (document.getElementById ("one").value < number) {
                    document.getElementById ("one").style.backgroundColor = "orange";
                } else if (document.getElementById ("one").value > number) {
                    document.getElementById ("one").style.backgroundColor = "blue";
                } else if (document.getElementById ("one").value == number) {
                    
                            Swal.fire({
                            title: 'YOU WON!',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                            restart();
                }           
            }

            function tryguess2 () {
                document.getElementById ("go2").style.display = "none";
                document.getElementById ("go3").style.display = "block";
                document.getElementById ("two").disabled = true;
                document.getElementById ("three").disabled = false;
                        document.getElementById ("three").focus();
                if (document.getElementById ("two").value < number) {
                    document.getElementById ("two").style.backgroundColor = "orange";
                } else if (document.getElementById ("two").value > number) {
                    document.getElementById ("two").style.backgroundColor = "blue";
                } else if (document.getElementById ("two").value == number) {
                            //Swal.fire('YOU WON', 'The game will restart when this box is closed.', 'success');
                             Swal.fire({
                            title: 'YOU WON!',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                    restart();
                }
            }

            function tryguess3 () {
                document.getElementById ("go3").style.display = "none";
                document.getElementById ("go4").style.display = "block";
                document.getElementById ("three").disabled = true;
                document.getElementById ("four").disabled = false;
                        document.getElementById ("four").focus();
                if (document.getElementById ("three").value < number) {
                    document.getElementById ("three").style.backgroundColor = "orange";
                } else if (document.getElementById ("three").value > number) {
                    document.getElementById ("three").style.backgroundColor = "blue";
                } else if (document.getElementById ("three").value == number) {
                            //Swal.fire('YOU WON', 'The game will restart when this box is closed.', 'success');
                             Swal.fire({
                            title: 'YOU WON!',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                    restart();
                }
            }

            function tryguess4 () {
                document.getElementById ("go4").style.display = "none";
                document.getElementById ("go5").style.display = "block";
                document.getElementById ("four").disabled = true;
                document.getElementById ("five").disabled = false;
                        document.getElementById ("five").focus();
                if (document.getElementById ("four").value < number) {
                    document.getElementById ("four").style.backgroundColor = "orange";
                } else if (document.getElementById ("four").value > number) {
                    document.getElementById ("four").style.backgroundColor = "blue";
                } else if (document.getElementById ("four").value == number) {
                            //Swal.fire('YOU WON', 'The game will restart when this box is closed.', 'success');
                             Swal.fire({
                            title: 'YOU WON!',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                   restart();
                }
            }

            function tryguess5 () {
                        document.getElementById ("five").disabled = true;
                if (document.getElementById ("five").value < number) {
                    document.getElementById ("five").style.backgroundColor = "orange";
                    //Swal.fire('YOU LOST', 'The game will restart when this box is closed.', 'error');
                            Swal.fire({
                            title: 'YOU LOST!',
                            text: 'The correct number was: ' + number + '',
                            icon: 'error',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false,
                        })
                    restart();
                } else if (document.getElementById ("five").value > number) {
                    document.getElementById ("five").style.backgroundColor = "blue";
                    //Swal.fire('YOU LOST', 'The game will restart when this box is closed.', 'error');
                            Swal.fire({
                            title: 'YOU LOST!',
                            text: 'The correct number was: ' + number + '',
                            icon: 'error',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                    restart();
                } else if (document.getElementById ("five").value == number) {
                            //Swal.fire('YOU WON', 'The game will restart when this box is closed.', 'success');
                             Swal.fire({
                            title: 'YOU WON!',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                            /*var x = x+=1;
                            localStorage.setItem ("wins", x);
                            document.getElementById ("wins").innerHTML = winsye;*/
                            restart();
                    restart();
                } else if (document.getElementById ("five").value != number) {
                    //Swal.fire('YOU LOST', 'The game will restart when this box is closed.', 'error');
                            Swal.fire({
                            title: 'YOU LOST!',
                            text: 'The correct number was: ' + number + '',
                            icon: 'error',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                    restart();
                }
            }
            
setInterval(function(){ 
    if(document.getElementById("one").value.length>0){
      
      document.getElementById("go").disabled=!1;
      document.getElementById("one").focus();
    
    }else{document.getElementById("go").disabled=!0}
if(document.getElementById("two").value.length>0){document.getElementById("go2").disabled=!1;document.getElementById("two").focus();}else{document.getElementById("go2").disabled=!0}
if(document.getElementById("three").value.length>0){document.getElementById("go3").disabled=!1;document.getElementById("three").focus();}else{document.getElementById("go3").disabled=!0}
if(document.getElementById("four").value.length>0){document.getElementById("go4").disabled=!1;document.getElementById("four").focus();}else{document.getElementById("go4").disabled=!0}
if(document.getElementById("five").value.length>0){document.getElementById("go5").disabled=!1;document.getElementById("five").focus();}else{document.getElementById("go5").disabled=!0}


  var oneElement = document.getElementById ("one");
let one1 = oneElement.value.slice(0, -1);
var twoElement = document.getElementById ("two");
let two2 = twoElement.value.slice(0, -1);
var threeElement = document.getElementById ("three");
let three3 = threeElement.value.slice(0, -1);
var fourElement = document.getElementById ("four");
let four4 = fourElement.value.slice(0, -1);
var fiveElement = document.getElementById ("five");
let five5 = fiveElement.value.slice(0, -1);
      
if (modeCurrent == "normal") {
      if(oneElement.value>35||oneElement.value<1){ oneElement.value=one1; }else if(twoElement.value>35||twoElement.value<1){ twoElement.value=two2; }else if(threeElement.value>35||threeElement.value<1){ threeElement.value=three3; }else if(fourElement.value>35||fourElement.value<1){ fourElement.value=four4; }else if(fiveElement.value>35||fiveElement.value<1){ fiveElement.value=five5; }
} else if (modeCurrent == "challenge") {
      if(oneElement.value>50||oneElement.value<1){ oneElement.value=one1; }else if(twoElement.value>50||twoElement.value<1){ twoElement.value=two2; }else if(threeElement.value>50||threeElement.value<1){ threeElement.value=three3; }else if(fourElement.value>50||fourElement.value<1){ fourElement.value=four4; }else if(fiveElement.value>50||fiveElement.value<1){ fiveElement.value=five5; }
}
}, 0.1);
            

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        if (document.getElementById("one").disabled == false && document.getElementById("one").value.length>0) {
                    tryguess();
        } else if (document.getElementById("two").disabled == false && document.getElementById("two").value.length>0) {
                    tryguess2();
        } else if (document.getElementById("three").disabled == false && document.getElementById("three").value.length>0) {
                    tryguess3();
        } else if (document.getElementById("four").disabled == false && document.getElementById("four").value.length>0) {
                    tryguess4();
        } else if (document.getElementById("five").disabled == false && document.getElementById("five").value.length>0) {
                    tryguess5();
        }
    }    
  
    if (modeCurrent=="challenge") {
          if (event.key === "q") {
                Swal.fire('HOW TO PLAY', 'Find the correct number in 5 guesses. Numbers range from 1-50.', 'question');
          }
    } else if (modeCurrent == "normal") {
          if (event.key === "q") {
                Swal.fire('HOW TO PLAY', 'Find the correct number in 5 guesses. Numbers range from 1-35.', 'question');
          }
    }
  
    if (event.key === "w") {
                sharern();
    }
});          
            /*var items = document.querySelectorAll("body>b:not(.k1)");
           if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
}
} */
  
  document.querySelector("input").addEventListener("keydown", function(event) {
    var ones = document.getElementById ("one").value;
    var twos = document.getElementById ("two");
    var threes = document.getElementById ("three");
    var fours = document.getElementById ("four");
    var fives = document.getElementById ("five");
  if (event.key === "e" || event.key === "-" || ones > 35) {
    event.preventDefault();
  }
});
  
