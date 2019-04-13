
function checkAnsw(strWaarde)
 {
	if (strWaarde == 'steen' && ComputerChoice == 'Steen'){
		document.getElementById('uitkomst').innerHTML = 'Het is gelijk spel!';
	}

	else if(strWaarde == 'steen' && ComputerChoice == 'Papier'){
		document.getElementById('uitkomst').innerHTML = 'Je hebt verloren! De computer koos papier';	
	
	}

	else if(strWaarde == 'steen' && ComputerChoice == 'Schaar'){
	    document.getElementById('uitkomst').innerHTML = 'Je hebt gewonnen! De computer koos schaar';	
}


	else if(strWaarde == 'papier' && ComputerChoice == 'Steen'){
	    document.getElementById('uitkomst').innerHTML = 'Je hebt gewonnen! De computer koos steen';
}

	else if(strWaarde == 'papier' && ComputerChoice == 'Papier'){
	    document.getElementById('uitkomst').innerHTML = 'Het is gelijk spel!';
}

	else if(strWaarde == 'papier' && ComputerChoice == 'Schaar'){
	    document.getElementById('uitkomst').innerHTML = 'Je hebt verloren! De computer koos schaar';
}

	else if(strWaarde == 'schaar' && ComputerChoice == 'Schaar'){
	    document.getElementById('uitkomst').innerHTML = 'Het is gelijk spel!';
}

	else if(strWaarde == 'schaar' && ComputerChoice == 'Steen'){
	    document.getElementById('uitkomst').innerHTML = 'Je hebt verloren! De computer koos Steen';
}

	else{
	    document.getElementById('uitkomst').innerHTML = 'Je hebt gewonnen! de computer koos papier';
	


	}
}




	var Choices = ["Steen" , "Papier" , "Schaar"];
	var i = Math.floor(Math.random() * 3);
	var ComputerChoice = Choices[i];

function startGame(){
	

	document.getElementById("compChoice").value = ComputerChoice; 
}

function opnieuw(){
	location.reload();
}