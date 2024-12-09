// Variables
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
var chatbox = document.getElementById ("messageBox").value;

import { database } from "./firebaseConfig.js";
import { getDatabase, ref, set, get, onValue, update, push } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const addedTo = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R",,"T","U","V","W","X","Y","Z"]

// Bind events to elements
document.getElementById("openJoinRoom").addEventListener("click", openJoin);
document.getElementById("joinRoom").addEventListener("click", joinRoomF);
document.getElementById("openCreateRoom").addEventListener("click", openCreate);
document.getElementById("createRoom").addEventListener("click", createRoomF);
document.getElementById("changeUsernameB").addEventListener("click", openChange);
document.getElementById("confirmNameChange").addEventListener("click", confirmSettingsF);
document.getElementById("openChatbox").addEventListener("click", openChatboxF);
document.getElementById("sendMessage").addEventListener("click", sendMessageF);
document.getElementById("username").addEventListener("input", checkForDisallowed);

// Do stuff on game load
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
  chatbox = document.getElementById ("messageBox").value;
  
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
  firebase.database().goOffline();
  console.log("Disconnected from Firebase Realtime Database.");
} catch (error) {
  console.log("Error disconnecting:", error);
}


window.addEventListener("unload", () => {
    firebase.database().goOffline();
});

// Hide all menus
function hideAll () {
  menu.style.display = "none";
  joinRoom.style.display = "none";
  createARoom.style.display = "none";
  changeUsername.style.display = "none";
  lobby.style.display = "none";
}

// Return to main menu
function returnHome () {
  hideAll();
  menu.style.display = "block"

  if (localStorage.getItem("savedUsername")) {
    username.value = localStorage.getItem("savedUsername")
  } else {
    username.value = `Player${addedTo[Math.floor(Math.random()*25) + 1]}${addedTo[Math.floor(Math.random()*25) + 1]}`;
  }
}

// Opens the join room page
function openJoin () {
  hideAll();
  joinRoom.style.display = "block";
}

// Opens the create room page
function openCreate () {
  hideAll();
  createRoom.style.display = "block";
}

// Opens the settings page
function openChange () {
  hideAll();
  changeUsername.style.display = "block";
}

// Checks for disallowed characters/words whenever a character is typed
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

// Confirms and saves your chosen settings
function confirmSettingsF () {
  localStorage.setItem("savedUsername",username.value)
  if (censorExplicit.checked) {
    localStorage.setItem ("censorExplicit","true");
  } else {
    localStorage.removeItem ("censorExplicit");
  }
  returnHome();
}

// Creates a room
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

// Joins a room
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

// Opens the chatbox
function openChatboxF () {
  document.getElementById("chatbox").style.opacity = "1"
  document.getElementById("chatbox").style.pointerEvents = "all"
}

// Sends a message
function sendMessageF() {
  var messageContent = document.getElementById ("yourMessage");
  const roomCodeInput = document.getElementById("joiningCode").value.trim();
  const roomRef = ref(database, "Lobbies/" + (roomCodeInput || roomCode) + "/messages");
  const newMessageRef = push(roomRef);

  set(newMessageRef, {
    sender:username.value,
    content:messageContent.value.trim(),
  }).then(() => {
    messageContent.value="";
  });
}

// Recieves messages
const roomCodeInput = document.getElementById("joiningCode").value.trim();
const messagesRef = ref(database, "Lobbies/" + (roomCodeInput || roomCode) + "/messages");

onValue(messagesRef, (snapshot) => {
  const messages = snapshot.val();

  for (const key in messages) {
    const message = messages[key];
    chatbox.value += "hi\n";
  }

  chatbox.scrollTop = chatbox.scrollHeight;
});
