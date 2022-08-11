let playerScore = 0;
let computerScore = 0;

// function playerPlay() {
//     let input = prompt('Choose your weapon. Rock, Paper or Scissors.');
//     input = input.toLowerCase(); //make sure input is in the right format
//     return playerSelection = input;
// }


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
    console.log(computerSelection);
    return computerSelection;
}

function playRound(playerSelection, computerSelection) { //make function that plays a round of rock paper scissors
    computerSelection = computerPlay();
    // playerSelection = playerPlay();
    console.log("computer played " + computerSelection);
    console.log("player played " + playerSelection);
    if (playerSelection === computerSelection) { //if player choice is equal to computer choice return tie
        alert('Tie Game!');
        console.log('Computer has ' + computerScore + ' points.');
        console.log('You have ' + playerScore + ' points.');
    } else if ( //computer wins
        (playerSelection == 'rock') && (computerSelection == 'paper') ||
        (playerSelection == 'paper') && (computerSelection == 'scissors') ||
        (playerSelection == 'scissors') && (computerSelection == 'rock')
    ) {
        alert('You Lose! ' + computerSelection + ' beats ' + playerSelection + '!');
        computerScore += 1;
        console.log('Computer has ' + computerScore + ' points.');
        console.log('You have ' + playerScore + ' points.');

    } else if ( //player wins
        (playerSelection == 'rock') && (computerSelection == 'scissors') ||
        (playerSelection == 'paper') && (computerSelection == 'rock') ||
        (playerSelection == 'scissors') && (computerSelection == 'paper')
    ) {
        alert('You Win! ' + playerSelection + ' beats ' + computerSelection + '!');
        playerScore += 1;
        console.log('Computer has ' + computerScore + ' points.');
        console.log('You have ' + playerScore + ' points.');
    } 
    // else alert("That's not a weapon!");

}

function scoreReset() {
    playerScore = 0;
    computerScore = 0;
}

function game() {
    const buttons = document.querySelectorAll('#div');
    buttons.forEach((div) => {
        div.addEventListener('click', () => {
            playerSelection = div.className;
            console.log(playerSelection);
            const computerSelection = computerPlay();
        })
    })
    // for (let i = 0; i < 5; i++) { //play 5 rounds
    playRound();
    // // }
    // if (playerScore == computerScore) {
    //     alert("It's all square. Draw. Let's go again!");
    // } else if ( playerScore > computerScore) {
    //     alert("You've beaten the computer! Well Done! Let's go again!");
    // } else if ( playerScore < computerScore) {
    //     alert("Computer wins. You are a disgrace. Let's go again!")
    // }
    // scoreReset();
    // game();
}
game();