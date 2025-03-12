const choice = ['rock', 'paper', 'scissors'];

const rockBottom = document.getElementById('rock');
const scissorsButton = document.getElementById('scissors');
const paperButton = document.getElementById('paper');
const result = document.querySelector('.result');

let roundCount = 0;
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
        alert('Enter a valid choice');
        return getHumanChoice()
    } else {
        return userChoice.toLowerCase()
    };
};

    // let humanChoice = getHumanChoice();
    // let computerChoice = getComputerChoice();

const playRound = (humanChoice, computerChoice) => {
    
    result.innerText = '';
    
    if(
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        humanScore++;
        result.innerText = `Human has won the round, your choice was ${humanChoice} and machine's choice was ${computerChoice}.
        Human score: ${humanScore}
        Computer score: ${computerScore}`;
        result.classList.add('win');
        result.classList.remove('draw');
        result.classList.remove('lose'); 
    } else if (humanChoice === computerChoice) {
        result.innerText = `Hey look it\'s draw, congratulations! You are as smart as your pc :), you both chose ${humanChoice}
        Human score: ${humanScore}
        Computer score: ${computerScore}`;
        humanScore + 0;
        computerScore + 0;
        result.classList.add('draw');
        result.classList.remove('lose');
        result.classList.remove('win');
    } else {
        computerScore++;
        result.innerText = `Computer has won the round, machine's choice was ${computerChoice} and your's choice was ${humanChoice}.
        Human score: ${humanScore}
        Computer score: ${computerScore}`;
        result.classList.add('lose');
        result.classList.remove('draw');
        result.classList.remove('win');
    }
};

rockBottom.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});
paperButton.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

// Function to play 5 round of game.
// const playGame = () => {
//     let roundCount = 0;
//     let humanScore = 0;
//     let computerScore = 0;

// // Function to play single round of rock, paper and scissors game.
//     const playRound = (humanChoice, computerChoice) => {
//         humanChoice = getHumanChoice();
//         computerChoice = getComputerChoice();
    
//         if(
//             humanChoice === 'rock' && computerChoice === 'scissors' ||
//             humanChoice === 'paper' && computerChoice === 'rock' ||
//             humanChoice === 'scissors' && computerChoice === 'paper'
//         ) {
//             humanScore++;
//             console.log(`Human has won the round, your choice was ${humanChoice} and machine's choice was ${computerChoice}.
//             Human score: ${humanScore}
//             Computer score: ${computerScore}`);
//         } else {
//             computerScore++;
//             console.log(`Computer has won the round, machine's choice was ${computerChoice} and your's choice was ${humanChoice}.
//             Human score: ${humanScore}
//             Computer score: ${computerScore}`);
//         }
//     };
// // Loop to play 5 rounds of game, and declare winner of game.
//     for(roundCount; roundCount < 5; roundCount++) {
//         playRound()
//     };
//     if(humanScore > computerScore) {
//         console.log(`Human has won the game score is ${humanScore} vs ${computerScore}`);
//     } else {
//         console.log(`Computer has won the game score is ${humanScore} vs ${computerScore}`);
//     }
// };