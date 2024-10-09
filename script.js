let humanScore = 0; // Score for human player
let computerScore = 0; // Score for computer player
const choices = ["rock", "paper", "scissors"]; // Array of choices

// Function to get random choice for computer
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length); // Get a random index
    return choices[randomIndex]; // Return computer's choice
}

// Function to update displayed human choice
function updateUserChoiceDisplay(choice) {
    const userChoiceDisplay = document.querySelector("#userChoiceDisplay");
    userChoiceDisplay.textContent = `You chose: ${choice}`; // Update text content
}

// Function to update displayed computer choice
function updateComputerChoiceDisplay(choice) {
    const computerChoiceDisplay = document.querySelector("#computerChoiceDisplay");
    computerChoiceDisplay.textContent = `Computer chose: ${choice}`; // Update text content
}

// Function to update game result
function updateResultDisplay(result) {
    const resultDisplay = document.querySelector("#result");
    resultDisplay.textContent = `Result: ${result}`; // Update text content
}

// Function to play one round of the game
function playRound(humanChoice) {
    const computerChoice = getComputerChoice(); // Get computer's choice
    updateComputerChoiceDisplay(computerChoice); // Update the display for computer's choice
    
    // Determine the winner of the round
    if (humanChoice === computerChoice) {
        updateResultDisplay("It's a draw!"); // Update result
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++; // Increase human score
        updateResultDisplay("You win!"); // Update result
    } else {
        computerScore++; // Increase computer score
        updateResultDisplay("You lose!"); // Update result
    }

    // Log scores in the console (optional)
    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);
}

// Event listeners for buttons
document.querySelector("#rock").addEventListener("click", () => {
    const humanChoice = "rock"; // Set human choice
    updateUserChoiceDisplay(humanChoice); // Update display
    playRound(humanChoice); // Play round
});

document.querySelector("#paper").addEventListener("click", () => {
    const humanChoice = "paper"; // Set human choice
    updateUserChoiceDisplay(humanChoice); // Update display
    playRound(humanChoice); // Play round
});

document.querySelector("#scissors").addEventListener("click", () => {
    const humanChoice = "scissors"; // Set human choice
    updateUserChoiceDisplay(humanChoice); // Update display
    playRound(humanChoice); // Play round
});
