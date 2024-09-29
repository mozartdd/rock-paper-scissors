let humanScore = 0;
let computerScore = 0;
const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * choice.length);
    console.log(`Computer have chosen: ${computerChoice, choice[computerChoice]}`);
    return (choice[computerChoice]);
}
function getHumanChoice() {
    let humanChoice = prompt("Choose between rock, paper and scissors!");
    return humanChoice; 
}
function playRound (humanChoice, computerChoice) {
    // if (humanChoice !== "rock" || humanChoice !== "paper" || humanChoice !== "scissors") {
    //     alert("wrong input");
    // } else if (humanChoice === "" || humanChoice === null) {
    //     alert("Canceled");}
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


function playGame() {
    for (let round = 0; round < 5; round++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (humanScore > computerScore) {
        alert(`Human have won computer :( 
        Human score: ${humanScore} 
        Computer score: ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`Human have lost to computer :)
        Computer score: ${computerScore} 
        Human score: ${humanScore}`);
    } else alert(`Draw :| 
        Computer score: ${computerScore} 
        Human score: ${humanScore}`);
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);
}
playGame()