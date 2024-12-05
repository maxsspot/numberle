var menu = document.getElementById("mainMenu");
var joinRoom = document.getElementById ("joinARoom");
var createRoom = document.getElementById ("createARoom");
var changeUsername = document.getElementById ("changeUsername");
var username = document.getElementById ("username");
var confirmSettings = document.getElementById ("confirmNameChange");

document.onload = function(){
  if (!localStorage.getItem("savedUsername")) {
    username.value = "Player";
  } else {
    username.value = localStorage.getItem("savedUsername")
  }
};

function hideAll () {
  menu.style.display = "none";
  joinRoom.style.display = "none";
  createARoom.style.display = "none";
  changeUsername.style.display = "none";
}

function returnHome () {
  hideAll();
  menu.style.display = "block"
}

function openJoin () {
  hideAll();
  joinRoom.style.display = "block";
}

function openCreate () {
  hideAll();
  createRoom.style.display = "block";
}

function openChange () {
  hideAll();
  changeUsername.style.display = "block";
}

function checkForDisallowed () {
  var checkedValue = profanityCleaner.clean(username.value);
  if (username.value.includes ("<") || username.value.includes (">") || checkedValue.includes("*")) {
    username.style.borderBottom = "red solid 1px";
    confirmSettings.disabled = true;
  } else {
    username.style.borderBottom = "white solid 1px";
    confirmSettings.disabled = false;
  }
}

function confirmSettings () {
  localStorage.setItem("savedUsername",username.value)
}
