var menu = document.getElementById("mainMenu");
var joinRoom = document.getElementById ("joinARoom");
var createRoom = document.getElementById ("createARoom");

function hideAll () {
  menu.style.display = "none";
  joinRoom.style.display = "none";
  createARoom.style.display = "none";
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
