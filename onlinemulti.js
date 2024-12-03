<!DOCTYPE html>
<html lang = "en-US">
	<head>
		<meta name="mobile-web-app-capable" content="yes" />
                <meta name="keywords" content="numerale, numerals, number guessing game"/>
                <link rel="canonical" href="https://numerale.netlify.app/index.html">
                <meta name="description" content="You have five chances to guess the random number. The number ranges from 1 to 35 and changes every round. Do you think you could do it?">
                <meta name="google-site-verification" content="a0a5tEpiGzUwSogFn5ASJ0URLkgzpJC5GHIFos0OYxk" />
		<link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@5.0.15/dark.min.css" rel="stylesheet">
		<script crossorigin async defer src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"></script>
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
		<meta charset = "UTF-8">
                <meta property="og:title" content="Numerale">
                <meta property="og:description" content="You have five chances to guess the random number. The number ranges from 1 to 35 and changes every round. Do you think you could do it?">
                <meta name="twitter:title" content="Numerale">
                <meta name="twitter:description" content="You have five chances to guess the random number. The number ranges from 1 to 35 and changes every round. Do you think you could do it?">
		<link rel="apple-touch-icon" crossorigin href="numeralelogo.png" />
		<link rel="manifest" href="manifest.json">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link crossorigin href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300&display=swap" rel="stylesheet">
		
    <link rel = "icon" href = "numeralelogo.png" crossorigin type = "image/x-icon"> 
            <script crossorigin defer async src='onlinemulti.js'></script> 
        <link crossorigin href='styles.css' rel='stylesheet' type='text/css'/>
		<title>Numerale Local Multiplayer</title>
	</head>
	<body oncontextmenu = "return false;" id = "main" >
	<!--<div id = "settingsMenu">
		<br>
		<h1>SETTINGS</h1>
		<br><!-------------------->
		<h2>Number of Players</h2>
		<br>
		<label for = "playerNumber">Players: </label>
		<select id = "playerNumber" onchange = "updatePlayers()">
			<option value = "2">2 Players</option>
			<option value = "3">3 Players</option>
			<option value = "4">4 Players</option>
			<option value = "5">5 Players</option>
		</select>
		<br><br><!-------------------->
		<h2>Player Names</h2>
		<br>
		<input id = "p1name" value = "Player 1" placeholder = "Player 1 name..." /><br id = "p1br">
		<input id = "p2name" value = "Player 2" placeholder = "Player 2 name..." /><br id = "p2br">
		<input id = "p3name" value = "Player 3" placeholder = "Player 3 name..." /><br id = "p3br">
		<input id = "p4name" value = "Player 4" placeholder = "Player 4 name..." /><br id = "p4br">
		<input id = "p5name" value = "Player 5" placeholder = "Player 5 name..." /><br id = "p5br">
		<br><!-------------------->
		<h2>Miscellaneous</h2>
		<br>
		<label>Maximum Number: </label>
		<input id = "maxNumber" type = "number" value = "50" />
		<!--<br><br>
		<input id = "useIneq" type = "checkbox" />
		<label for = "useIneq">Show the numbers range in an inequality</label>-->
		<br><br><!-------------------->
		<input id = "saveOptions" type = "checkbox" />
		<label for = "saveOptions">Save and skip this in the future</label>
		<br><br>
		<span id = "apply" onclick = "applySettings()">START</span>
	</div>-->
		<nav>
        <br>
        <a id = "currentPlaying" style = "cursor:default;color:white;float:left;margin-left:15px;"><span id = "currentPlayer"></span>, go!</a>
		<select style = "float:right;color:white;background-color:transparent;border:transparent;margin-right:15px;cursor:pointer;" id = "modechooser">
			<!--<option style = "color:black;" value = "Normal Mode" selected>Normal Mode</option>
			<option style = "color:black;" value = "Timed Normal Mode">Timed Normal Mode</option>
			<option style = "color:black;" value = "Challenge Mode">Challenge Mode</option>
			<option style = "color:black;" value = "Timed Challenge Mode">Timed Challenge Mode</option>-->
		</select>
			<br>
        <br>
        <hr>
		</nav>
		<main>
        <br>
        <h1>Numerale</h1>
        <br>
		<input type = "number" id = "multiBox" aria-label = "Enter your number guess." />
        
        <br>
        <br>
	<div id = "buttons">
<!--<button id = "go" onclick = "makeAGuess()">Guess</button>-->
		<span id = "inequality"><p><span id = "lowest">0</span> ≤ x ≤ <span id = "highest">100</span></p></span>
		<span id = "words"><p>More than <span id = "lowestWords">0</span><br>Less than <span id = "highestWords">50</span></p></span>
		</div>
		<br>
	<hr>
		<br>
		<button onclick = "resetSettings()" id = "resetSettings">Reset Settings</button>
		</main>
		<br>
		<br>
		<!--<sub><a href = "/keyboard-shortcuts">Keyboard Shortcuts</a>• <a href = "/availability">Ways to play</a></sub>-->
		<br>
<br>

    </body>
</html>
