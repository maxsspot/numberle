function sharern() {
             if (navigator.share) { 
                         navigator.share({ title:'Play Numerale today!', text:'Hey there, I found this game called Numerale and thought you would enjoy it! \n\nhttps://play.google.com/store/apps/details?id=app.netlify.numerale.twa&gl=US is the link to install for Android and https://www.microsoft.com/en-us/p/numerale/9n1q25gx2nn3?activetab=pivot:overviewtab is the link to install for PC!'}) 
                                     .then(() => console.log('Successful share')) 
                         .catch((error) => console.log('Error sharing', error));  
             }
            }
( () => {
            /*var x = 0;
            var winsye = localStorage.setItem ("winscount", x)
            document.getElementById ("wins").innerHTML = winsye.value;*/
            document.getElementById ("one").focus();
const number = Math.floor(Math.random()*35) + 1;
            function restart () {
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
                            icon: 'error',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                    restart();
                } else if (document.getElementById ("five").value > number) {
                    document.getElementById ("five").style.backgroundColor = "blue";
                    //Swal.fire('YOU LOST', 'The game will restart when this box is closed.', 'error');
                            Swal.fire({
                            title: 'YOU LOST!',
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
                            icon: 'error',
                            timer: 2000,
                            showConfirmButton: false,
                            allowOutsideClick: false
                        })
                    restart();
                }
            }
            
setInterval(function(){ 
    if(document.getElementById("one").value.length>0){document.getElementById("go").disabled=!1;document.getElementById("one").focus();}else{document.getElementById("go").disabled=!0}
if(document.getElementById("two").value.length>0){document.getElementById("go2").disabled=!1;document.getElementById("two").focus();}else{document.getElementById("go2").disabled=!0}
if(document.getElementById("three").value.length>0){document.getElementById("go3").disabled=!1;document.getElementById("three").focus();}else{document.getElementById("go3").disabled=!0}
if(document.getElementById("four").value.length>0){document.getElementById("go4").disabled=!1;document.getElementById("four").focus();}else{document.getElementById("go4").disabled=!0}
if(document.getElementById("five").value.length>0){document.getElementById("go5").disabled=!1;document.getElementById("five").focus();}else{document.getElementById("go5").disabled=!0}

if(document.getElementById("one").value>35||document.getElementById("one").value<1){document.getElementById("one").value=null}else if(document.getElementById("two").value>35||document.getElementById("two").value<1){document.getElementById("two").value=null}else if(document.getElementById("three").value>35||document.getElementById("three").value<1){document.getElementById("three").value=null}else if(document.getElementById("four").value>35||document.getElementById("four").value<1){document.getElementById("four").value=null}else if(document.getElementById("five").value>35||document.getElementById("five").value<1){document.getElementById("five").value=null}
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
            
    if (event.key === "q") {
                Swal.fire('HOW TO PLAY', 'Find the correct number in 5 guesses. Numbers range from 1-35.', 'question');
    }
});          
            var items = document.querySelectorAll("body>b:not(.k1)");
           if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
for (var i = 0; i < items.length; i++) {
    items[i].style.display = 'none';
}
} 
} )();
