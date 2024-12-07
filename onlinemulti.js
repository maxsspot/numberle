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

document.getElementById("openJoinRoom").addEventListener("click", openJoin);
document.getElementById("joinRoom").addEventListener("click", joinRoomF);
document.getElementById("openCreateRoom").addEventListener("click", openCreate);
document.getElementById("createRoom").addEventListener("click", createRoomF);
document.getElementById("changeUsernameB").addEventListener("click", openChange);
document.getElementById("confirmNameChange").addEventListener("click", confirmSettingsF);

import { database } from "./firebaseConfig.js";
import { getDatabase, ref, set, get, onValue, update} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

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
  maxNumber = document.getElementById ("maxNumberOnline")
  
  transitionCover.style.opacity = "1";
  transitionCover.style.pointerEvents = "all"

  // 
  
  /*const roomRef = ref(database, "lobbies/" + roomCode);
  set(roomRef, {
    host: username,
    players: [username]
  })
  .then(() => console.log("Data written successfully"))
  .catch((error) => console.error("Error writing data:", error));
  */
  const roomRef = ref(database, 'Lobbies/' + roomCode);
  set(roomRef, { 
    host:username.value,
    maxNumber:maxNumber.value
  })
  .then(() => console.log("Test data written successfully"))
  .catch(error => console.error("Error writing test data:", error));
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

function joinRoomF() {
  const roomCode = document.getElementById("joiningCode").value.trim();
  const roomRef = ref(database, "Lobbies/" + roomCode);

  get(roomRef).then((snapshot) => {
    if (snapshot.exists()) {
      const roomData = snapshot.val(); 
      
      const players = roomData.players || [];
      players.push(username.value); 

      update(roomRef, {
        players: players
      }).then(() => {
        setTimeout(function () {
          hideAll();
          lobby.style.display = "block";

          var player = document.createElement("p");
          player.innerHTML = username.value;
          playerContainer.appendChild(player);

          roomCodeText.innerHTML = roomCode;
          const host = roomData.host || "Unknown";
          const hostElement = document.createElement("p");
          hostElement.innerHTML = host;
          hostElement.style.color="yellow";
          playerContainer.appendChild(hostElement);

          players.forEach(player => {
            const playerElement = document.createElement("p");
            playerElement.innerHTML = player;
            playerContainer.appendChild(playerElement);
          });
        }, 750);
        
        setTimeout(function () {
          transitionCover.style.opacity = "0";
          transitionCover.style.pointerEvents = "none";
        }, 1500);
      })
      
      onValue(roomRef, (snapshot) => {
        const updatedRoomData = snapshot.val();
        const updatedPlayers = updatedRoomData.players || [];

        playerContainer.innerHTML = "";
        updatedPlayers.forEach(player => {
          const playerElement = document.createElement("p");
          playerElement.innerHTML = player;
          playerContainer.appendChild(playerElement);
        });
      });
    } else {
      alert("Room not found.");
    }
  })
}
