var menu = document.getElementById("mainMenu");
var joinRoom = document.getElementById ("joinARoom");
var createRoom = document.getElementById ("createARoom");
var changeUsername = document.getElementById ("changeUsername");
var username = document.getElementById ("username");
var confirmSettings = document.getElementById ("confirmNameChange");
var censorExplicit = document.getElementById ("filterLanguage");
var transitionCover = document.getElementById ("transitionCover");
var lobby = document.getElementById ("lobby");
var playerContainer = document.getElementById ("playerContainer");
var roomCode;
var roomCodeText;

window.onload = function(){
  menu = document.getElementById("mainMenu");
  joinRoom = document.getElementById ("joinARoom");
  createRoom = document.getElementById ("createARoom");
  changeUsername = document.getElementById ("changeUsername");
  username = document.getElementById ("username");
  confirmSettings = document.getElementById ("confirmNameChange");
  censorExplicit = document.getElementById ("filterLanguage");
  transitionCover = document.getElementById ("transitionCover");
  lobby = document.getElementById ("lobby");
  playerContainer = document.getElementById ("playerContainer");
  roomCodeText = document.getElementById ("roomCode");
  
  if (localStorage.getItem("savedUsername")) {
    username.value = localStorage.getItem("savedUsername")
  } else {
    username.value = "Player";
  }

  if (localStorage.getItem("censorExplicit")) {
    censorExplicit.checked = true;
  }
  
function hideAll () {
  menu.style.display = "none";
  joinRoom.style.display = "none";
  createARoom.style.display = "none";
  changeUsername.style.display = "none";
  lobby.style.display = "none";
}

function returnHome () {
  hideAll();
  menu.style.display = "block"

  if (localStorage.getItem("savedUsername")) {
    username.value = localStorage.getItem("savedUsername")
  } else {
    username.value = "Player";
  }
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
  var checkedValue = profanityCleaner.clean(username.value.trim());
  if (username.value.includes ("<") || username.value.includes (">") || checkedValue.includes("*")) {
    username.style.borderBottom = "red solid 1px";
    confirmSettings.disabled = true;
  } else {
    username.style.borderBottom = "white solid 1px";
    confirmSettings.disabled = false;
  }
}

function confirmSettingsF () {
  localStorage.setItem("savedUsername",username.value)
  if (censorExplicit.checked) {
    localStorage.setItem ("censorExplicit","true");
  } else {
    localStorage.removeItem ("censorExplicit");
  }
  returnHome();
}

function createRoomF () {
  roomCode = Math.floor(Math.random()*999999999) + 100000000;
  
  transitionCover.style.opacity = "1";
  transitionCover.style.pointerEvents = "all"

  // 
  
  const roomRef = ref(database, "lobbies/" + roomCode);

  set(roomRef, {
    host:username,
    players:[username]
  });

  //
  
  setTimeout (function () {
    hideAll();
    lobby.style.display = "block";
    var lobbyHost = document.createElement("p");
    lobbyHost.innerHTML = username.value;
    lobbyHost.style.color = "yellow";
    playerContainer.appendChild(lobbyHost);
    roomCodeText.innerHTML = roomCode;
  },750);
  
  setTimeout(function () {
    transitionCover.style.opacity = "0";
    transitionCover.style.pointerEvents = "none"
  },1500);
}
}

window.openJoin = openJoin;
window.openCreate = openCreate;
window.openChange = openChange;
window.returnHome = returnHome;
