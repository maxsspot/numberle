var time = document.getElementById ("timer");
var initialTime = 20;
var shouldcountdown = true;
var shouldalert = true;

setInterval (function() {
  if (shouldcountdown) {
    initialTime--;
  }
  time.innerHTML = initialTime;
  if (initialTime === 0) {
    shouldcountdown=false;
    if (shouldalert) {
      shouldalert=false;
      Swal.fire({
          title: 'Out of time!',
          icon: 'error',
          showConfirmButton: true,
          allowOutsideClick: false
      })
    }
  }
},1000);
