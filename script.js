document.getElementById ("one").focus();
var number = Math.floor(Math.random()*35) + 1;
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
                    Swal.fire('YOU WON', 'The game will restart in a moment.', 'success');
                            setTimeout(function(){ location.reload(); }, 3000);
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
                            Swal.fire('YOU WON', 'The game will restart in a moment.', 'success');
                    setTimeout(function(){ location.reload(); }, 3000);
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
                            Swal.fire('YOU WON', 'The game will restart in a moment.', 'success');
                    setTimeout(function(){ location.reload(); }, 3000);
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
                            Swal.fire('YOU WON', 'The game will restart in a moment.', 'success');
                   setTimeout(function(){ location.reload(); }, 3000);
                }
            }

            function tryguess5 () {
                if (document.getElementById ("five").value < number) {
                    document.getElementById ("five").style.backgroundColor = "orange";
                    Swal.fire('YOU LOST', 'The game will restart in a moment.', 'error');
                    setTimeout(function(){ location.reload(); }, 3000);
                } else if (document.getElementById ("five").value > number) {
                    document.getElementById ("five").style.backgroundColor = "blue";
                    Swal.fire('YOU LOST', 'The game will restart in a moment.', 'error');
                    setTimeout(function(){ location.reload(); }, 3000);
                } else if (document.getElementById ("five").value == number) {
                            Swal.fire('YOU WON', 'The game will restart in a moment.', 'success');
                    setTimeout(function(){ location.reload(); }, 3000);
                } else if (document.getElementById ("five").value != number) {
                    Swal.fire('YOU LOST', 'The game will restart in a moment.', 'error');
                    setTimeout(function(){ location.reload(); }, 3000);
                }
            }


grecaptcha.ready(function(){
    grecaptcha.render("container", {
      sitekey: "6Le6KIcfAAAAALq0oY90OVSUgY-65-9NabZz0Fns"
    });
  });
