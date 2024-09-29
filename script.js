let humanScore = 0;
let computerScore = 0;
const choice = ["rock", "paper", "scissors"];

//Function that gets random value from array "choice" and returns it to "computerChoice" var;
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * choice.length);
    console.log(`Computer have chosen: ${computerChoice, choice[computerChoice]}`);
    return (choice[computerChoice]);
}
function getHumanChoice() {
    let humanChoice = prompt("Choose between rock, paper and scissors!");
    return humanChoice.toLowerCase(); 
}
function playRound (humanChoice, computerChoice) {
    if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper" ||
            humanChoice === "scissors" && computerChoice === "rock"||
            humanChoice === "paper" && computerChoice === "scissors") {
                computerScore++;
            }
}

//loop that repeats "playRound" function 5 times;
function playGame() {
    for (let round = 0; round < 5; round++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        alert(`Congratulations! Human have won :( 
        Human score: ${humanScore} 
        Computer score: ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`Good luck next time! Human have lost :)
        Computer score: ${computerScore} 
        Human score: ${humanScore}`);
    } else alert(`Draw :| 
        Computer score: ${computerScore} 
        Human score: ${humanScore}`);
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
}
playGame()