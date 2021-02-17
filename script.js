let playerScore = 0;
let computerScore = 0;

//randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
//We’ll use this function in the game to make the computer’s play.
function computerPlay() {
    const computerOptions = ["paper", "rock", "scissors"]
    let randomChoice = Math.floor((Math.random() * 3));
    let randomComputerChoice = computerOptions[randomChoice]

    return randomComputerChoice
}


//function that plays a single round of Rock Paper Scissors
//and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)
function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === "rock") {
        if(computerSelection === "paper") {
            computerScore += 1;
            document.getElementById("result").innerHTML = "You lose, paper beats rock!";
        }
        else if(computerSelection === "rock") {
            document.getElementById("result").innerHTML = "It's a tie!";
        }
        else if (computerSelection === "scissors"){
            document.getElementById("result").innerHTML = "Congratulations you won, rock beats scissors!";
            playerScore += 1;
        }
    }

    if (playerSelection === "paper"){
        if(computerSelection === "scissors") {
            document.getElementById("result").innerHTML = "You lose, scissors beats paper!";
            computerScore += 1;
        }
        else if(computerSelection === "paper") {
            document.getElementById("result").innerHTML = "It's a tie!";
        }
        else if(computerSelection === "rock") {
            document.getElementById("result").innerHTML = "Congratulations you won, paper beats rock!";
            playerScore += 1;
        }
    }

    if (playerSelection === "scissors") {
        if(computerSelection === "rock") {
            computerScore += 1;
            document.getElementById("result").innerHTML = "You lose, rock beats scissors!";
        }
        else if(computerSelection === "scissors") {
            document.getElementById("result").innerHTML = "It's a tie!";
        }
        else if(computerSelection === "paper"){
            playerScore += 1;
            document.getElementById("result").innerHTML = "Congratulations you won, scissors beats paper!";
        }
    }

}



function playerChoiceButton(choiceFromButton) {
    playRound(choiceFromButton, computerPlay())
    document.getElementById("playerScore").innerHTML = playerScore; 
    document.getElementById("computerScore").innerHTML = computerScore;

    if (playerScore == 5) {
        document.getElementById("finalResult").innerHTML = "Player Wins stupid Computer";
        
        //disable buttons after we find a winner
        document.getElementById("paper").disabled = true; 
        document.getElementById("rock").disabled = true; 
        document.getElementById("scissors").disabled = true; 
    }
    else if (computerScore == 5) {
        document.getElementById("finalResult").innerHTML = "Computer Wins you SUCK!!!";

        //disable buttons after we find a winner
        document.getElementById("paper").disabled = true; 
        document.getElementById("rock").disabled = true; 
        document.getElementById("scissors").disabled = true; 
    }
}

function refreshPage() {
    window.location.reload();
}







