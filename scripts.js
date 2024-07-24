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




function getHumanChoice() {
    let humanChoice = prompt('Pick rock, paper or scissors').toLowerCase();


    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
    alert('Invalid choice, please pick rock, paper, or scissors');
    return getHumanChoice();
    }

    return humanChoice;
    console.log(humanChoice);
}




/*let humanScore = 0;
let computerScore = 0; 



function playRound(theHumanChoice, theComputerChoice) {
    console.log(`Human choice: ${theHumanChoice}`);
    console.log(`Computer choice: ${theComputerChoice}`);
    
    

        if (theComputerChoice === theHumanChoice) {
        console.log('It is a tie');
        } else if (theComputerChoice === 'paper' && theHumanChoice === 'rock' || theComputerChoice === 'rock' && theHumanChoice === 'scissors' || theComputerChoice ==='scissors' && theHumanChoice === 'paper'){
            computerScore = computerScore + 1;
            console.log('you lose');
            console.log(`computer score = ${computerScore}`);
        } else if (theComputerChoice === 'paper' && theHumanChoice === 'scissors' || theComputerChoice === 'rock' && theHumanChoice === 'paper' || theComputerChoice ==='scissors' && theHumanChoice === 'rock') {
            humanScore = humanScore + 1;
            console.log('you win');
            console.log(`human score: ${humanScore}`)
        };

}     

const theHumanChoice = getHumanChoice();
const theComputerChoice = getComputerChoice();
playRound(theHumanChoice, theComputerChoice); */




function playGame() {
    let humanScore = 0;
    let computerScore = 0; 



function playRound(theHumanChoice, theComputerChoice) {
    console.log(`Human choice: ${theHumanChoice}`);
    console.log(`Computer choice: ${theComputerChoice}`);
    
    

        if (theComputerChoice === theHumanChoice) {
        console.log('It is a tie');
        } else if (theComputerChoice === 'paper' && theHumanChoice === 'rock' || theComputerChoice === 'rock' && theHumanChoice === 'scissors' || theComputerChoice ==='scissors' && theHumanChoice === 'paper'){
            computerScore = computerScore + 1;
            console.log('you lose');
            console.log(`computer score = ${computerScore}`);
        } else if (theComputerChoice === 'paper' && theHumanChoice === 'scissors' || theComputerChoice === 'rock' && theHumanChoice === 'paper' || theComputerChoice ==='scissors' && theHumanChoice === 'rock') {
            humanScore = humanScore + 1;
            console.log('you win');
            console.log(`human score: ${humanScore}`)
        };

}   


    for (i = 0; i < 5; i++) {
        const theHumanChoice = getHumanChoice();
    const theComputerChoice = getComputerChoice();
    playRound(theHumanChoice, theComputerChoice);
    };


    if (humanScore > computerScore) {
        alert('you won')
    } else {
        alert('booboo')
    };
    
}

playGame();