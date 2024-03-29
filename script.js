let playerScore = 0;
let computerScore = 0;
let battleMessage = ''
document.getElementById("reset").addEventListener("click", scoreReset);

function computerPlay() { // make computer pick rock paper or scissors randomly
    var computerSelection = Math.floor(Math.random() * 3) + 1; //picks a random number between 1 and 3
    if (computerSelection === 1) { //assign each number to a game move
        computerSelection = "rock"
        document.getElementById("cpuRock").classList.add('played');
    }
    else if (computerSelection === 2) {
        computerSelection = "paper"
        document.getElementById("cpuPaper").classList.add('played');
    }
    else if (computerSelection === 3) {
        computerSelection ="scissors"
        document.getElementById("cpuScissors").classList.add('played');
    }
    return computerSelection;
}

function playRound(playerSelection) { //make function that plays a round of rock paper scissors
    removeHighlight();
    computerSelection = computerPlay();
    console.log("computer played " + computerSelection);
    console.log("player played " + playerSelection);
    if (playerSelection === computerSelection) { //if player choice is equal to computer choice return tie
        battleMessage = 'Tie Game!';
        updateBattleMessage();
    } else if ( //computer wins
        (playerSelection == 'rock') && (computerSelection == 'paper') ||
        (playerSelection == 'paper') && (computerSelection == 'scissors') ||
        (playerSelection == 'scissors') && (computerSelection == 'rock')
        ) {
        console.log('You Lose! ' + computerSelection + ' beats ' + playerSelection + '!');
        computerScore += 1;
        battleMessage = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + " beats " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        updateBattleMessage();
        updateScoreboard();
    } else if ( //player wins
        (playerSelection == 'rock') && (computerSelection == 'scissors') ||
        (playerSelection == 'paper') && (computerSelection == 'rock') ||
        (playerSelection == 'scissors') && (computerSelection == 'paper')
    ) {
        battleMessage = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
        updateBattleMessage();
        playerScore += 1;
        updateScoreboard();
    } 
}

function updateScoreboard() {
    console.log("updateScoreboard")
    document.getElementById("scoreboardCpu").textContent = "CPU: " + computerScore; 
    document.getElementById("scoreboardPlayer").textContent = "Player1: " + playerScore;
    checkScore();
}

function updateBattleMessage() {
    console.log("updateBattleMessage")
    document.getElementById("bmContainer").textContent = battleMessage;
}

function removeHighlight() {
    console.log("removeHighlight")
    document.getElementById("cpuRock").classList.remove('played');
    document.getElementById("cpuPaper").classList.remove('played');
    document.getElementById("cpuScissors").classList.remove('played');
}

function scoreReset() {
    playerScore = 0;
    computerScore = 0;
    battleMessage = 'Rock Paper Scissors';
    console.log("scoreReset");
    updateBattleMessage();
    updateScoreboard();
    removeHighlight();
}

function game() {
    const buttons = document.querySelectorAll('#div');
    buttons.forEach((div) => {
        div.addEventListener('click', () => {
            playerSelection = div.className;
            console.log(playerSelection);
            playRound(playerSelection);
        })
    })
}
function checkScore() {
    if ( playerScore === 5) {
        battleMessage = "Player1 Wins!"
        // alert("You've beaten the computer! Well Done! Let's go again!");
        updateBattleMessage();
        // location.reload();
    } else if ( computerScore === 5) {
        battleMessage = "CPU Wins!"
        // alert("Computer wins. You are a disgrace. Let's go again!")
        updateBattleMessage();
        // location.reload();
    }
}

// currently the game will throw up the alert before it updates the scoreboard, meaning the alert is there
// while the scoreboard still shows that the game isn't yet finished. See about adding an event listener
// to the scoreboard so that it only runs the checkScore function after it has updated the scoreboard.

game();