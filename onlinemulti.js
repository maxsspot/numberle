// Variables
var menu = document.getElementById("mainMenu");
var joinRoom = document.getElementById ("joinARoom");
var createRoom = document.getElementById ("createARoom");
var changeUsername = document.getElementById ("changeUsername");
var inGameUI = document.getElementById ("inGame");
var username = document.getElementById ("username");
var confirmSettings = document.getElementById ("confirmNameChange");
var censorExplicit = document.getElementById ("filterLanguage");
var transitionCover = document.getElementById ("transitionCover");
var lobby = document.getElementById ("lobby");
var maxNumberText = document.getElementById ("maxNumberText");
var playerContainer = document.getElementById ("playerContainer");
var roomCode;
var roomCodeText;
var maxNumber;
var chatbox = document.getElementById ("messageBox");
var inGame = false;
var shouldOpenChat = true;
var shouldOpenRemove = true;
var canSendMessage = true;
var chatStuff = document.getElementById("chatStuff");
var playerList = document.getElementById("playerList");

import { database } from "./firebaseConfig.js";
import { getDatabase, ref, set, remove, get, onValue, update, push } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

const addedTo = ["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","T","U","V","W","X","Y","Z"]

// Bind events to elements
document.getElementById("openJoinRoom").addEventListener("click", openJoin);
document.getElementById("joinRoom").addEventListener("click", joinRoomF);
document.getElementById("openCreateRoom").addEventListener("click", openCreate);
document.getElementById("createRoom").addEventListener("click", createRoomF);
document.getElementById("changeUsernameB").addEventListener("click", openChange);
document.getElementById("confirmNameChange").addEventListener("click", confirmSettingsF);
document.getElementById("openChatbox").addEventListener("click", openChatboxF);
document.getElementById("sendMessage").addEventListener("click", sendMessageF);
document.getElementById("openBanPlayer").addEventListener("click", openBanF);
document.getElementById("remove").addEventListener("click", banPlayer);
document.getElementById("username").addEventListener("input", checkForDisallowed);
document.getElementById("startGame").addEventListener("click", startGame);

// Do stuff on game load
window.onload = function(){
  menu = document.getElementById("mainMenu");
  joinRoom = document.getElementById ("joinARoom");
  createRoom = document.getElementById ("createARoom");
  changeUsername = document.getElementById ("changeUsername");
  inGame = document.getElementById ("inGame");
  username = document.getElementById ("username");
  confirmSettings = document.getElementById ("confirmNameChange");
  censorExplicit = document.getElementById ("filterLanguage");
  transitionCover = document.getElementById ("transitionCover");
  lobby = document.getElementById ("lobby");
  maxNumberText = document.getElementById ("maxNumberText");
  playerContainer = document.getElementById ("playerContainer");
  roomCodeText = document.getElementById ("roomCode");
  chatbox = document.getElementById ("messageBox");
  playerList = document.getElementById("playerList");

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
  chatStuff.style.display = "none";
}

// Return to main menu
function returnHome () {
  hideAll();
  menu.style.display = "block"

  if (localStorage.getItem("savedUsername")) {
    username.value = localStorage.getItem("savedUsername")
  } else {
    username.value = `Player${addedTo[Math.floor(Math.random()*23) + 1]}${addedTo[Math.floor(Math.random()*23) + 1]}`;
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

// Monitors room state
function keepRoomState() {
  const roomCodeInput = document.getElementById("joiningCode").value.trim();
  const roomRef = ref(database, "Lobbies/" + roomCodeInput);

  onValue(roomRef, (snapshot) => {
    if (snapshot.exists()) {
        const roomData = snapshot.val();
        if (roomData.gameStarted) {
          document.getElementById("gameStarts").style.opacity = "1";
          var toStart = 3;
          
          var countdown = setInterval(function() {
            var toStartText = document.getElementById("tillGameStartText");

            toStart-=1;
            toStartText.innerHTML = toStart;

            if (toStart == 0) {
              clearInterval(countdown);
              document.getElementById("gameStarts").style.opacity = "0";
              setTimeout(function() {
                hideAll()
                inGameUI.style.display="block";

                chatStuff.style.display = "block";
                
                document.getElementById("gameStarts").style.display = "none";

                chatStuff.style.marginTop = "-5px";
                chatStuff.style.right = "0px";
                chatStuff.style.position = "fixed";
              },500);
              
              inGame=true;

              //game()
            }
          },1000);
       }
    }
  });
}

// Checks for disallowed characters/words whenever a character is typed
function checkForDisallowed () {
  var checkedValue = profanityCleaner.clean(username.value.trim());
  if (username.value.includes ("<") || username.value.includes (">") || username.value.toLowerCase().includes("kys") || checkedValue.includes("*")) {
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
    roomActive: true,
    gameStarted: false,
  }).then(() => {
    setTimeout(function () {
      hideAll();
      lobby.style.display = "block";
      document.getElementById("forHost").style.display="block";
      //document.getElementById("removePlayer").style.display="block";
      roomCodeText.innerHTML = roomCode;
    }, 750);

    setTimeout(function () {
      transitionCover.style.opacity = "0";
      transitionCover.style.pointerEvents = "none";
      chatStuff.style.display = "block";

      maxNumberText.innerHTML = maxNumber;
    }, 1250);

    keepRoomState()

    onValue(roomRef, (snapshot) => {
      const updatedRoomData = snapshot.val();
      const updatedPlayers = updatedRoomData.players || [];

      playerContainer.innerHTML = "";
      updatedPlayers.forEach((player) => {
        var playerElement = document.createElement("p");
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
  
  transitionCover.style.opacity = "1";
  transitionCover.style.pointerEvents = "all";
  
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

            chatStuff.style.display = "block";
          }, 1250);

          keepRoomState()

          onValue(roomRef, (snapshot) => {
            const updatedRoomData = snapshot.val();
            const updatedPlayers = updatedRoomData.players || [];
  
            playerContainer.innerHTML = "";
            updatedPlayers.forEach((player) => {
              var playerElement = document.createElement("p");
              playerElement.innerHTML = player;
              if (player === updatedRoomData.host) {
                playerElement.style.color = "yellow";
              }
              playerContainer.appendChild(playerElement);
              
              var newPlayer = document.createElement("option");
              newPlayer.text = username.value;
              newPlayer.value = username.value;
              playerList.appendChild(newPlayer);
            });
          });
        });
      }
    } else {
      Swal.fire("Room not found");
    }
  }).catch((error) => console.error("Error joining room:", error));
}

// Opens/Closes the chatbox
function openChatboxF () {
  if (shouldOpenChat) {
    document.getElementById("chatbox").style.opacity = "1"
    document.getElementById("chatbox").style.pointerEvents = "all"
    initListening()
    shouldOpenChat = false;
  } else {
    document.getElementById("chatbox").style.opacity = "0"
    document.getElementById("chatbox").style.pointerEvents = "none"
    shouldOpenChat = true;
  }
}

// Sends a message
function sendMessageF() {
  if (canSendMessage) {
    canSendMessage = false;
    var messageContent = document.getElementById ("yourMessage");
    if (messageContent.value.trim() != "") {
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

    setTimeout(function() {
      canSendMessage = true;
    },1500);
  }
}

// Starts listening for new messages
function initListening() {
  var roomCodeInput = document.getElementById("joiningCode").value.trim();
  const messagesRef = ref(database, "Lobbies/" + roomCodeText.innerHTML + "/messages");
  
  onValue(messagesRef, (snapshot) => {
    const messages = snapshot.val();
    chatbox.value = '';
    
    for (const key in messages) {
      const message = messages[key];
      if (censorExplicit.checked) {
        chatbox.value += `${message.sender}: ${profanityCleaner.clean(message.content)}\n`;
      } else {
        chatbox.value += `${message.sender}: ${message.content}\n`;
      }

      /*if (shouldOpenChat) {
        document.getElementById ("openChatbox").style.border = "#FF6666 solid 1px"
  
        setTimeout(function() {
          document.getElementById ("openChatbox").style.border = "white solid 1px"
        },1000);
      }*/
    }
    
    chatbox.scrollTop = chatbox.scrollHeight;
  });
}

// In relation to sending messages
document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter' && !shouldOpenChat) {
      sendMessageF();
    } else if (event.key === 'Escape' && !shouldOpenChat) {
      openChatboxF();
    }
});  

// Leaves the room
window.onbeforeunload = function removePlayer() {
    const roomRef = ref(database, "Lobbies/" + (roomCodeText.innerHTML || roomCode));

    get(roomRef).then((snapshot) => {
      if (snapshot.exists()) {
        const roomData = snapshot.val();
        const players = roomData.players || [];
        
        const updatedPlayers = players.filter(player => player !== username.value);

        if (roomData.host === username.value) {
            update(roomRef, { roomActive: false })
        }

        if (updatedPlayers.length === 0) {
            remove(roomRef);
        }

        update(roomRef, { players: updatedPlayers })
      }
    })
}

// Open the remove player box
function openBanF () {
  if (shouldOpenRemove) {    
    document.getElementById("removePlayerBox").style.opacity = "1";
    document.getElementById("removePlayerBox").style.pointerEvents = "all"
    shouldOpenRemove=false;
  } else {
    document.getElementById("removePlayerBox").style.opacity = "0";
    document.getElementById("removePlayerBox").style.pointerEvents = "none"
    shouldOpenRemove=true;
  }
}

// Host removed a player
function banPlayer() {
  const roomRef = ref(database, "Lobbies/" + (roomCodeText.innerHTML || roomCode));

  get(roomRef).then((snapshot) => {
    if (snapshot.exists()) {
      const roomData = snapshot.val();
      const players = roomData.players || [];
      const playerToRemove = document.getElementById ("playerList");
      
      const updatedPlayers = players.filter(player => player !== playerToRemove.value);

      update(roomRef, { players: updatedPlayers })
    }
  })
}

// Starts the game
function startGame() {
  const roomRef = ref(database, "Lobbies/" + (roomCodeText.innerHTML || roomCode));
  update(roomRef, { gameStarted: true })

  document.getElementById("gameStarts").style.opacity = "1";
  var toStart=3;
  
  var countdown = setInterval(function() {
    var toStartText = document.getElementById("tillGameStartText");

    toStart-=1;
    toStartText.innerHTML = toStart;

    if (toStart == 0) {
      clearInterval(countdown);
      document.getElementById("gameStarts").style.opacity = "0";
      setTimeout(function() {
          hideAll()
          inGameUI.style.display="block";
        
          chatStuff.style.display = "block";
        
          document.getElementById("gameStarts").style.display = "none";
          chatStuff.style.marginTop = "-5px";
          chatStuff.style.right = "0px";
          chatStuff.style.position = "fixed";
      },500);
      
      inGame=true;

      //game();
    }
  },1000);
}
