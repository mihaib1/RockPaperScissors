var computerWins = 0;
var playerWins = 0;
var ties = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const tiesCount = document.getElementById('tie');
const winCount = document.getElementById('won');
const lossCount = document.getElementById('lost');
tiesCount.textContent = 0;
winCount.textContent = 0;
lossCount.textContent = 0;

rock.addEventListener('click', function(e) {
    if(playerWins<5 && computerWins<5) {
        playRound('Rock'); 
    }
    CheckWinner();
});


paper.addEventListener('click', function(e) {
    if(playerWins<5 && computerWins < 5) {
        playRound('Paper');
    }
    CheckWinner();
});
scissors.addEventListener('click', function(e){
    if(playerWins<5 && computerWins <5) {
        playRound('Scissors');
    }
    CheckWinner();
});



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

function playRound(player){
    computer = GetComputerChoice();
    if(player == computer) {
        console.log("It's a tie!");
        ties += 1;
        tiesCount.textContent = ties;
    }
    if(player == "Rock") {
        if(computer == "Paper") {
            computerWins += 1;
            winCount.textContent = playerWins;
            lossCount.textContent = computerWins;
        }
        if(computer == "Scissors") {
            playerWins += 1;
            winCount.textContent = playerWins;
            lossCount.textContent = computerWins;
        }
    }
    if(player == "Paper") {
        if(computer == "Rock") {
            playerWins += 1;
            winCount.textContent = playerWins;
            lossCount.textContent = computerWins;
        }
        if(computer == "Scissors") {
            computerWins += 1;
            winCount.textContent = playerWins;
            lossCount.textContent = computerWins;
        }
    }
    if(player == "Scissors") {
        if(computer == "Rock") {
            computerWins += 1;
            winCount.textContent = playerWins;
            lossCount.textContent = computerWins;
        }
        if(computer == "Paper") {
            playerWins += 1;
            winCount.textContent = playerWins;
            lossCount.textContent = computerWins;
        }
    }
};

function CheckWinner() {
    if(playerWins === 5) {
        document.getElementById('currentStatus').textContent = 'Player has won!'
    }
    if(computerWins === 5) {
        document.getElementById('currentStatus').textContent = 'Computer has won!' 
    }
}

