var menu = document.getElementById("menu");
var joinRoom = document.getElementById ("joinARoom");

function hideAll () {
  menu.style.display = "none";
  joinRoom.style.display = "none";
}

function returnHome () {
  hideAll();
  menu.style.display = "block"
}

function openJoin () {
  hideAll();
  joinRoom.style.display = "block";
}
