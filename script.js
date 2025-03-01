const choice = ['rock', 'paper', 'scissors'];

// Function that randomly returns one element from choice array.
const getComputerChoice = () => {
    let randomInt = Math.floor(Math.random() * choice.length);
    return choice[randomInt];
};

// Function that returns users choice to lower case or if choice is invalid return functions callback.
const getHumanChoice = userChoice => {
    userChoice = prompt('Make your choice between rock, paper and scissors').toLowerCase().trim();
    if(!(userChoice === 'rock' || userChoice === 'scissors' || userChoice === 'paper')) {
        alert('Enter a valid choice');
        return getHumanChoice()
    } else {
        return userChoice.toLowerCase()
    };
};
// Function to play 5 round of game.
const playGame = () => {
    let roundCount = 0;
    let humanScore = 0;
    let computerScore = 0;

// Function to play single round of rock, paper and scissors game.
    const playRound = (humanChoice, computerChoice) => {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
    
        if(
            humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissors' && computerChoice === 'paper'
        ) {
            humanScore++;
            console.log(`Human has won the round, your choice was ${humanChoice} and machine's choice was ${computerChoice}.
            Human score: ${humanScore}
            Computer score: ${computerScore}`);
        } else {
            computerScore++;
            console.log(`Computer has won the round, machine's choice was ${computerChoice} and your's choice was ${humanChoice}.
            Human score: ${humanScore}
            Computer score: ${computerScore}`);
        }
    };
// Loop to play 5 rounds of game.
    for(roundCount; roundCount < 5; roundCount++) {
        playRound()
    };
    if(humanScore > computerScore) {
        console.log(`Human has won the game score is ${humanScore} vs ${computerScore}`);
    } else {
        console.log(`Computer has won the game score is ${humanScore} vs ${computerScore}`);
    }
};