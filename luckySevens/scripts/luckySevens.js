/*
Name: Christina Jeong
Date Created: 05/25/2019
Most recent revision: 05/25/2019
Purpose: Lucky Sevens Project javaScript
*/

//rolls dice with values 1-6
function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

//starts the game
function play() {
    var die1;
	var die2;
    var dieSum;
	var startBet = Number(document.forms["luckySevens"]["bet"].value);
	var money = startBet;
	var maxWin = 0;
	var rolls = 0;
	var maxRolls = 0;

//if user inputs value less than 0, error message
	if(money<=0){
		alert("Starting bet needs to be greater than $0");
	} else{
		while(0<money){
			die1 = rollDice();
			die2 = rollDice();
			dieSum = die1 + die2;
			rolls++;
            
			if(7 != dieSum){
				money--;
				console.log("lost");
			} else{
				money += 4;
				if(money > maxWin){
					maxWin = (money + (money-maxWin));
					maxRolls = rolls;
				}
				console.log("Winner!");
			}
		}
	}
	document.getElementById("results").style.display = "block";
	document.getElementById("startBet").innerText = startBet;
	document.getElementById("rollsNum").innerText = rolls;
	document.getElementById("rich").innerText = maxWin;
	document.getElementById("maxRolls").innerText = maxRolls;
    document.getElementById("submitButton").innerText = "Play Again!";
    
	return false;
}