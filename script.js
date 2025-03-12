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


//FUNCTION TO PLAY THE GAME

const playRound = (humanChoice, computerChoice) => {

//SETS RESULT TO EMPTY STRING AFTER EACH ROUND
    result.innerText = '';
    
//IF ELSE PART TO FIND OUT WINNER OF THE ROUND AND LOG RESULT TO RESULT DIV
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


//TWO IF STATEMENTS TO LOG THE FIRST ONE WHO REACHES 5 WINS TO THE DIV BLOCK, AFTER RESET THE SCORE
    if(humanScore > computerScore && humanScore === 5) {
        result.innerText = `Human has won the game score is ${humanScore} vs ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
    }
    if(humanScore < computerScore && computerScore === 5) {
        result.innerText = result.innerText = `Computer has won the game score is ${humanScore} vs ${computerScore}`;
        humanScore = 0;
        computerScore = 0;
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