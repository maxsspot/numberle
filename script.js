{
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
            
            document.addEventListener("keydown", function(event) {
                        var numer = 0;
    if (event.code === 'Enter' && numer = 0) {
        tryguess();
    } else if (event.code === 'Enter' && numer = 1) {
        tryguess2();
    } else if (event.code === 'Enter' && numer = 2) {
        tryguess3();
    } else if (event.code === 'Enter' && numer = 3) {
        tryguess4();
    } else if (event.code === 'Enter' && numer = 4) {
        tryguess5();
    } 
});
            
fetch('https://api.ipregistry.co/?key=8fcxilgrv5jplgze')
    .then(function (response) {
        return response.json();
    })
    .then(function (payload) {
        if (payload.location.country.name == "Russian Federation" || payload.location.country.name == "China" || payload.location.country.name == "North Korea") {
            location.href = "blocked";
        }
      
    });
}
