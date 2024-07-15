function getComputerChoice() {
    let computerChoice = '';
    let number = Math.random();
    if (number >= 0 && number < 1/3) {
        computerChoice = 'rock';
    }  else if (number >= 1/3 && number < 2/3) {
        computerChoice = 'paper';
    }  else if (number >= 2/3 && number < 1) {
        computerChoice = 'scissors';

        
    }

    return computerChoice;
}

console.log(getComputerChoice())