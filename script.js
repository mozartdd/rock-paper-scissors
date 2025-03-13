const choice = ['rock', 'paper', 'scissors'];

const rockBottom = document.getElementById('rock'); //WHO KNOWS THAT KNOWS :D
const scissorsButton = document.getElementById('scissors');
const paperButton = document.getElementById('paper');
const result = document.querySelector('.result');
const playSection = document.getElementById('play-game-section');
const resetButton = document.getElementById('reset-button');
const title = document.querySelector('h1');

let humanScore = 0;
let computerScore = 0;


// FUNCTION THAT RANDOMLY RETURN ONE OPTION FROM CHOICE ARRAY AND SETS IT AS COMPUTER CHOICE
const getComputerChoice = () => {
    let randomInt = Math.floor(Math.random() * choice.length);
    return choice[randomInt];
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


//TWO IF STATEMENTS TO LOG THE FIRST ONE WHO REACHES 5 WINS TO THE DIV BLOCK
    if(humanScore > computerScore && humanScore === 5) {
        result.innerText = `Human has won the game score is ${humanScore} vs ${computerScore}`;
        playSection.style.display = 'none';
        resetButton.style.display = 'inline';
        title.innerText = 'Game Over, you won!';
    }
    if(humanScore < computerScore && computerScore === 5) {
        result.innerText = `Computer has won the game score is ${humanScore} vs ${computerScore}`;
        playSection.style.display = 'none';
        resetButton.style.display = 'inline';
        title.innerText = 'Game Over, you lost!';
    }
};

//FUNCTION TO RESET THE GAME
const resetGame = () => {
    playSection.style.display = 'block';
    resetButton.style.display = 'none';
    result.innerText = '';
    title.innerText = 'Make your choice';
    humanScore = 0;
    computerScore = 0;
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
resetButton.addEventListener('click', resetGame);