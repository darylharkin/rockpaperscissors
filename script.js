function playerPlay() {
    let input = prompt('Choose your weapon. Rock, Paper or Scissors.');
    input = input.toLowerCase(); //make sure input is in the right format
    return playerSelection = input;
    }


function computerPlay() { // make computer pick rock paper or scissors randomly
    var computerSelection = Math.floor(Math.random() * 3) + 1; //picks a random number between 1 and 3
    if (computerSelection === 1) { //assign each number to a game move
        computerSelection = "rock" }
    else if (computerSelection === 2) {
        computerSelection = "paper"
    }
    else if (computerSelection === 3) {
        computerSelection ="scissors"
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) { //make function that plays a round of rock paper scissors
    computerSelection = computerPlay();
    playerSelection = playerPlay();
    console.log(computerSelection);
    console.log(playerSelection);
    if (playerSelection === computerSelection) { //if player choice is equal to computer choice return tie
        alert('Tie Game!');
    } else if ( //computer wins
        (playerSelection == 'rock') && (computerSelection == 'paper') ||
        (playerSelection == 'paper') && (computerSelection == 'scissors') ||
        (playerSelection == 'scissors') && (computerSelection == 'rock')
    ) {
        alert('You Lose!');
    } else if ( //player wins
        (playerSelection == 'rock') && (computerSelection == 'scissors') ||
        (playerSelection == 'paper') && (computerSelection == 'rock') ||
        (playerSelection == 'scissors') && (computerSelection == 'paper')
    ) {
        alert('You Win!');
    } else alert("That's not a weapon!");

}

function game() {
    for (let i = 0; i < 5; i++) { //play 5 rounds
        playRound();
    }
}
game();