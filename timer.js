var time = document.getElementById ("timer");
var initialTime = 25;
var shouldcountdown = true;

setInterval (function() {
  if (shouldcountdown) {
    initialTime--;
  }
  time.innerHTML = initialTime;
  if (initialTime = 0) {
    shouldcountdown=false;
    Swal.fire({
        title: 'Out of time!',
        icon: 'error',
        showConfirmButton: false,
        allowOutsideClick: false
    })
  }
},1000);
