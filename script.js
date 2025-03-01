const choice = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

// Function that randomly returns one element from choice array.
const getComputerChoice = () => {
    let randomInt = Math.floor(Math.random() * choice.length);
    return choice[randomInt];
};

// Function that returns users choice to lower case or if choice is invalid return functions callback.
const getHumanChoice = userChoice => {
    userChoice = prompt('Make your choice between rock, paper and scissors').toLowerCase().trim();
    if(!(userChoice === 'rock' || userChoice === 'scissors' || userChoice === 'paper')) {
        return getHumanChoice()
    } else {
        return userChoice.toLowerCase()
    };
};

// Function that play single round of rock, paper and scissors game and declares a winner of the round.
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

