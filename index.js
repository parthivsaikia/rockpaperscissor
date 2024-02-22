let moves = ["ROCK","PAPER","SCISSOR"];
let playerScore = 0;
let computerScore = 0;

function gameLoop(){
    for( i = 0;i< 5; i++){
        let playerSelection = prompt("Chose between rock, paper and scissors");
        let checkPS = playerSelection.toUpperCase();
        let computerSelection = moves[Math.floor(Math.random()* 3)];
        if(checkPS == computerSelection){
            alert("Draw!");
        }else if(checkPS == "ROCK" && computerSelection == "PAPER"){
            alert(`You lose. You chose ${checkPS} and computer chose ${computerSelection}`);
            playerScore -= 10;
            computerScore += 10;
        }else if(checkPS == "ROCK" && computerSelection == "SCISSOR"){
            alert(`You won. You chose ${checkPS} and computer chose ${computerSelection}`);
            playerScore+= 10;
            computerScore-= 10;
        }else if(checkPS == "PAPER" && computerSelection == "ROCK"){
            alert(`You won. You chose ${checkPS} and computer chose ${computerSelection}`);
            playerScore += 10;
            computerScore -= 10;
        }else if(checkPS == "PAPER" && computerSelection == "SCISSOR"){
            alert(`You lose. You chose ${checkPS} and computer chose ${computerSelection}`);
            playerScore -= 10;
            computerScore += 10;
        }else if(checkPS == "SCISSOR" && computerSelection == "PAPER"){
            alert(`You won. You chose ${checkPS} and computer chose ${computerSelection}`);
            playerScore += 10;
            computerScore -= 10;
        }else if(checkPS == "SCISSOR" && computerSelection == "ROCK"){
            alert(`You lose. You chose ${checkPS} and computer chose ${computerSelection}`);
            playerScore -= 10;
            computerScore += 10;
        }else{
            alert("Wrong input");
            i -= 1;
        }
        
    }
    alert(`Your score is ${playerScore} and computer's score is ${computerScore}`);
    playerScore = 0;
    computerScore = 0;


}

let btn = document.querySelector(".btn");
btn.addEventListener("click",gameLoop);

// gameLoop()
