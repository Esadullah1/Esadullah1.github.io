function checkAnsw(operator){

	if (operator == 'plus1'){
		document.getElementById('antwoord1').innerHTML = 'Je hebt gelijk!';
	}

	else if (operator == 'min2'){
		document.getElementById('antwoord2').innerHTML = 'Je hebt het goed!';
	}

	else{
		document.getElementById('antwoord1,2').innerHTML = 'Je hebt het fout!';
	}


	

	
}