function getComputerChoice() {
    let result1;
    result1 = Math.floor(Math.random()*3)
    if (result1===0) {
        return result1 = "scissors";
    }
    else if (result1===1) {
        return result1 = "paper";
    }
    else {
        return result1 = "rock";
    }
}

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection==="scissors") {
        if (computerSelection==="paper") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return result = "win";
        }
        else if (computerSelection==="scissors") {
            console.log(`Draw! ${playerSelection} and ${computerSelection} is a tie`);
            return result = "draw";
        }
        else {
            console.log(`You Lose! ${playerSelection} gets beaten by ${computerSelection}`);
            return result = "lose";
        }
    }
    else if (playerSelection==="paper") {
        if (computerSelection==="rock") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`)
            return result = "win";
        }
        else if (computerSelection==="paper") {
            console.log(`Draw! ${playerSelection} and ${computerSelection} is a tie`);
            return result = "draw";
        }
        else {
            console.log(`You Lose! ${playerSelection} gets beaten by ${computerSelection}`);
            return result = "lose";
        }
    }
    else {
        if (computerSelection==="scissors") {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return result = "win";
        }
        else if (computerSelection==="rock") {
            console.log(`Draw! ${playerSelection} and ${computerSelection} is a tie`);
            return result = "draw";
        }
        else {
            console.log(`You Lose! ${playerSelection} gets beaten by ${computerSelection}`);
            return result = "lose";
        }
    }
}
function game() {
    let wins = 0; draw = 0; losses = 0;
    for (let i= 0 ; i < 5; i++) {
        const playerSelection = prompt("What hand do you want to play (Rock, Paper, or Scissors)")
        const computerSelection = getComputerChoice();
        let end = playRound(playerSelection, computerSelection);
        if (end==="win")
            wins++
        else if (end==="draw")
            draw++
        else 
            losses++
    }
    console.log(`You have ${wins} wins, ${draw} draws, and ${losses} losses`)
}
console.log(game())