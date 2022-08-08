var computerWins = 0;
var playerWins = 0;
var ties = 0;

game()


function game() {
    var i = 1;
    while (i <= 5) {
        console.log("NEW GAME !!!!!!")
        playersChoice = GetPlayerInput();
        computerSelection =  GetComputerChoice();
        if(playersChoice != "Rock" && playersChoice != "Paper" && playersChoice != "Scissors"){
            alert("Please enter a valid choice!");
        } else {
            playRound(playersChoice, computerSelection);
            console.log(`playerSelection is ${playersChoice}`);
            console.log(`computerSelection is ${computerSelection}`);
            console.log("Match number " + i);
            console.log(`playerWins: ${playerWins}`);
            console.log(`computerWins: ${computerWins}`);
            console.log(`ties: ${ties}`);
            i+=1;
        }
    }
}

function GetPlayerInput() {
    playerInput = prompt("What is your weapon of choice?");
    playerSelection = playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();
    return playerSelection;
}

function GetComputerChoice() {
    number = Math.floor(Math.random() * 3);
    if(number == 0) {
        return "Rock";
    }
    if(number == 1) {
        return "Paper";
    }
    if(number == 2) {
        return "Scissors";
    }
}

function playRound(player, computer){
    if(player == computer) {
        console.log("It's a tie!");
        ties += 1;
    }
    if(player == "Rock") {
        if(computer == "Paper") {
            console.log("You lost! Paper beats Rock!");
            computerWins += 1;
        }
        if(computer == "Scissors") {
            console.log("You won! Rock beats Scissors");
            playerWins += 1;
        }
    }
    if(player == "Paper") {
        if(computer == "Rock") {
            console.log("You won! Paper beats Rock!");
            playerWins += 1;
        }
        if(computer == "Scissors") {
            console.log("You lost! Scissors beat Paper");
            computerWins += 1;
        }
    }
    if(player == "Scissors") {
        if(computer == "Rock") {
            console.log("You lost! Rock beats Scissors");
            computerWins += 1;
        }
        if(computer == "Paper") {
            console.log("You won! Scissors beat Paper!");
            playerWins += 1;
        }
    }
};


