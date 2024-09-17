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
            alert('Users win!');
            humanScore += 1;
        }
        else if (computerChoice == 'paper') {
            alert('Computer win!');
            computerScore += 1;
        }
        else {
            alert('Tie!');
        }
    }

    else if (userChoice == 'scissors') {
        if (computerChoice == 'paper') {
            alert('Users win!');
            humanScore += 1;
        }
        else if (computerChoice == 'rock') {
            alert('Computer win!');
            computerScore += 1;
        }
        else {
            alert('Tie!');
        }
    }

    else if (userChoice == 'paper') {
        if (computerChoice == 'rock]') {
            alert('Users win!');
            humanScore += 1;
        }
        else if (computerChoice == 'scissors') {
            alert('Computer win!');
            computerScore += 1;
        }
        else {
            alert('Tie!');
        }
    }

    alert('User Selection:' + userChoice + ', Computer Selection:' + computerChoice);
    alert('Human score:' + humanScore + ', Computer score:' + computerScore);
    
    return[humanScore, computerScore];
}

// Play 5 rounds Rock, Paper, and Scissors 
for (let i = 0; i < 5; i++) {
    scoreUserScoreData = playGame(scoreUserScoreData[0], scoreUserScoreData[1]);
}