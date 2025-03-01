const choice = ['rock', 'paper', 'scissors']

// Function that randomly returns one element from choice array.
const getComputerChoice = () => {
    let randomInt = Math.floor(Math.random() * choice.length);
    return choice[randomInt];
}

// Function that returns users choice to lower case or if choice is invalid return functions callback
const getHumanChoice = userChoice => {
    userChoice = prompt('Make your choice between rock, paper and scissors').toLowerCase().trim();
    if(!(userChoice === 'rock' || userChoice === 'scissors' || userChoice === 'paper')) {
        return getHumanChoice()
    } else {
        return userChoice.toLowerCase()
    }
}

