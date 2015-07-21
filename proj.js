
//checks if js file linked.
console.log("js works")


//uses Math.random function to choose player symbol.
function startGame() {
	if (Math.random() < 0.5) {
		document.turn = "o";
	}else {
		document.turn = "x"
	}

}





//marks move, implements changePlayer function
function makeMove (box) {
	    
		box.innerText = document.turn;
		changePlayer();
	
}

//changes player
function changePlayer () {

 if (document.turn == "x") {
		document.turn = "o";
		
	} else {
		document.turn = "x";
		
	}
}




