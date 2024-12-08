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
var maxNumber;
var chatbox = document.getElementById ("chatbox");

import { database } from "./firebaseConfig.js";
import { getDatabase, ref, set, get, onValue, update } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const addedTo = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R",,"T","U","V","W","X","Y","Z"]

document.getElementById("openJoinRoom").addEventListener("click", openJoin);
document.getElementById("joinRoom").addEventListener("click", joinRoomF);
document.getElementById("openCreateRoom").addEventListener("click", openCreate);
document.getElementById("createRoom").addEventListener("click", createRoomF);
document.getElementById("changeUsernameB").addEventListener("click", openChange);
document.getElementById("confirmNameChange").addEventListener("click", confirmSettingsF);
document.getElementById("openChatbox").addEventListener("click", openChatboxF);
document.getElementById("username").addEventListener("input", checkForDisallowed);

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
  chatbox = document.getElementById ("chatbox");
  
  if (localStorage.getItem("savedUsername")) {
    username.value = localStorage.getItem("savedUsername")
  } else {
    username.value = `Player${addedTo[Math.floor(Math.random()*23) + 1]}${addedTo[Math.floor(Math.random()*23) + 1]}`;
  }

  if (localStorage.getItem("censorExplicit")) {
    censorExplicit.checked = true;
  }
}

try {
  goOffline(database);
  console.log("Disconnected from Firebase Realtime Database.");
} catch (error) {
  console.log("Error disconnecting:", error);
}



window.addEventListener("unload", () => {
    firebase.database().goOffline();
});

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
    username.value = `Player${addedTo[Math.floor(Math.random()*25) + 1]}${addedTo[Math.floor(Math.random()*25) + 1]}`;
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

function createRoomF() {
  roomCode = Math.floor(Math.random() * 999999) + 100000;
  maxNumber = document.getElementById("maxNumberOnline").value;

  transitionCover.style.opacity = "1";
  transitionCover.style.pointerEvents = "all";

  const roomRef = ref(database, "Lobbies/" + roomCode);

  set(roomRef, {
    host: username.value,
    maxNumber: maxNumber,
    players: [username.value],
  }).then(() => {
    setTimeout(function () {
      hideAll();
      lobby.style.display = "block";
      roomCodeText.innerHTML = roomCode;
    }, 750);

    setTimeout(function () {
      transitionCover.style.opacity = "0";
      transitionCover.style.pointerEvents = "none";
    }, 1500);

    onValue(roomRef, (snapshot) => {
      const updatedRoomData = snapshot.val();
      const updatedPlayers = updatedRoomData.players || [];

      playerContainer.innerHTML = "";
      updatedPlayers.forEach((player) => {
        const playerElement = document.createElement("p");
        playerElement.innerHTML = player;
        if (player === updatedRoomData.host) {
          playerElement.style.color = "yellow";
        }
        playerContainer.appendChild(playerElement);
      });
    });
  }).catch((error) => console.error("Error creating room:", error));
}


function joinRoomF() {
  const roomCodeInput = document.getElementById("joiningCode").value.trim();
  const roomRef = ref(database, "Lobbies/" + roomCodeInput);

  get(roomRef).then((snapshot) => {
    if (snapshot.exists()) {
      const roomData = snapshot.val();
      const currentPlayers = roomData.players || [];

      if (!currentPlayers.includes(username.value)) {
        currentPlayers.push(username.value);
  
        update(roomRef, { players: currentPlayers }).then(() => {
          setTimeout(function () {
            hideAll();
            lobby.style.display = "block";
            roomCodeText.innerHTML = roomCodeInput;
          }, 750);
  
          setTimeout(function () {
            transitionCover.style.opacity = "0";
            transitionCover.style.pointerEvents = "none";
          }, 1500);
  
          onValue(roomRef, (snapshot) => {
            const updatedRoomData = snapshot.val();
            const updatedPlayers = updatedRoomData.players || [];
  
            playerContainer.innerHTML = "";
            updatedPlayers.forEach((player) => {
              const playerElement = document.createElement("p");
              playerElement.innerHTML = player;
              if (player === updatedRoomData.host) {
                playerElement.style.color = "yellow";
              }
              playerContainer.appendChild(playerElement);
            });
          });
        });
      }
    } else {
      Swal.fire("Room Not Found");
    }
  }).catch((error) => console.error("Error joining room:", error));
}

function openChatboxF () {
  chatbox.style.opacity = "1"
  chatbox.style.pointerEvents = "all"
}
