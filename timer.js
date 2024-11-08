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
