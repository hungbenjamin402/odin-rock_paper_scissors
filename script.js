var scoreUserScoreData = [0, 0];

function getComputerChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return gameChoices[randomNumber].toLowerCase();
}

function getUserChoice() {
    let userChoice = prompt("Choose \"rock\", \"paper\", \"scissors\"");
    return userChoice.toLowerCase();
}

function playGame(hScore, cScore) {
    var humanScore = hScore;
    var computerScore = cScore;

    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();

    if (userChoice == 'rock') {
        if (computerChoice == 'scissors') {
            console.log('Users win!')
            humanScore += 1;
        }
        else if (computerChoice == 'paper') {
            console.log('Computer win!')
            computerScore += 1;
        }
        else {
            console.log('Tie!')
        }
    }

    else if (userChoice == 'scissors') {
        if (computerChoice == 'paper') {
            console.log('Users win!')
            humanScore += 1;
        }
        else if (computerChoice == 'rock') {
            console.log('Computer win!')
            computerScore += 1;
        }
        else {
            console.log('Tie!')
        }
    }

    else if (userChoice == 'paper') {
        if (computerChoice == 'rock]') {
            console.log('Users win!')
            humanScore += 1;
        }
        else if (computerChoice == 'scissors') {
            console.log('Computer win!')
            computerScore += 1;
        }
        else {
            console.log('Tie!')
        }
    }

    console.log('Computer Selection:' + userChoice);
    console.log('Computer Selection:' + computerChoice);
    
    return [humanScore, computerScore];
}

// Play 5 rounds Rock, Paper, and Scissors 
for (let i = 0; i < 5; i++) {
    scoreUserScoreData = playGame(scoreUserScoreData[0], scoreUserScoreData[1]);
    console.log('Results:')
    console.log('Round ' + (i+1) + ': Human score:' + scoreUserScoreData[0]);
    console.log('Round ' + (i+1) + ': Computer score:' + scoreUserScoreData[1]);
    console.log('-----------------------------------------------------')
}