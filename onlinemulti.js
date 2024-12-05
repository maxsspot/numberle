var menu = document.getElementById("mainMenu");
var joinRoom = document.getElementById ("joinARoom");
var createRoom = document.getElementById ("createARoom");
var changeUsername = document.getElementById ("changeUsername");
var username = document.getElementById ("username");
//var changeUserButton = document.getElementById ("confirmNameChange");

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
  } else {
    username.style.borderBottom = "white solid 1px";
  }
}
