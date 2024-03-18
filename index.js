function game(){
    let moves = 0;
    let playerScore = 0;
    let computerScore = 0;
    const infoDiv = document.querySelector(".gameInfo");
    function playGame(){
        const rockBtn = document.querySelector(".rock");
        const paperBtn = document.querySelector(".paper");
        const scissorBtn = document.querySelector(".scissor");
        const movesLeft = document.querySelector(".movesLeft");
        const playerOptions = [rockBtn,paperBtn,scissorBtn];
        const computerOptions = ["rock","paper","scissor"];
        playerOptions.forEach(option => {
            option.addEventListener("click",function(){
                moves++;
                movesLeft.textContent = `moves left : ${10-moves}`;
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];

                
                // infoDiv.textContent = "" 

                winner(this.innerText,computerChoice)
                if(moves == 10){
                    gameOver(movesLeft,playerOptions);
                }
            })
        })

        
    }

    function winner(player,computer){
        
        const playerScoreBoard = document.querySelector(".pScore");
        const computerScoreBoard = document.querySelector(".cScore");

        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            infoDiv.textContent = "Draw hoise🥱" ;
            playerScoreBoard.textContent = `Your score is : ${playerScore}`;
            computerScoreBoard.textContent = `Computer's score is: ${computerScore}`;          
        }else if(player == "rock"){
            if(computer == "scissor"){
                infoDiv.textContent = "Wohooo jikili reward lo😘😘😘😘😘" ;
                playerScore++;
                playerScoreBoard.textContent = `Your score is : ${playerScore}`;
                computerScoreBoard.textContent = `Computer's score is: ${computerScore}`;
            }else{
                infoDiv.textContent = "Chii harili 💩💩💩💩💩" ;
                computerScore++;
                playerScoreBoard.textContent = `Your score is : ${playerScore}`;
                computerScoreBoard.textContent = `Computer's score is: ${computerScore}`;
            }
        }else if(player == "paper"){
            if(computer == "scissor"){
                infoDiv.textContent = "Chii harili 💩💩💩💩💩" ;
                computerScore++;
                playerScoreBoard.textContent = `Your score is : ${playerScore}`;
                computerScoreBoard.textContent = `Computer's score is: ${computerScore}`;
            }else{
                infoDiv.textContent = "Wohooo jikili reward lo😘😘😘😘😘" ;
                playerScore++;
                playerScoreBoard.textContent = `Your score is : ${playerScore}`;
                computerScoreBoard.textContent = `Computer's score is: ${computerScore}`;
            }
        }else if(player == "scissor"){
            if(computer == "paper"){
                infoDiv.textContent = "Wohooo jikili reward lo😘😘😘😘😘" ;
                playerScore++;
                playerScoreBoard.textContent = `Your score is : ${playerScore}`;
                computerScoreBoard.textContent = `Computer's score is: ${computerScore}`;
            }else{
                infoDiv.textContent = "Chii harili 💩💩💩💩💩" ;
                computerScore++;
                playerScoreBoard.textContent = `Your score is : ${playerScore}`;
                computerScoreBoard.textContent = `Computer's score is: ${computerScore}`;
            }
        }
    }

    function gameOver(movesLeft,playerOptions){
        playerOptions.forEach(options => {
            options.style.display = "none";
        })
        movesLeft.style.display = "none";
        const resultBoard = document.querySelector(".result");
        infoDiv.style.display = "none";
        // const reloadbtn = document.querySelector(".reload");
        
        if(playerScore == computerScore){
            resultBoard.textContent = "Jen ten draw koriso ru ";
        }else if(playerScore > computerScore){
            resultBoard.textContent = "😘😘😘😘😘 gutei round tu jikili";          
        }else{
            resultBoard.textContent = "gutei round tu harili💩💩💩💩💩";
        }
        const reloadbtn = document.createElement('button');
        resultBoard.appendChild(reloadbtn);
        reloadbtn.textContent = "Ako khel 🥱";
        reloadbtn.addEventListener('click',()=>{
            window.location.reload();
        })

        // reloadbtn.textContent = "Ako khel ";
        // let lastmsg = document.querySelector(".secondpart")
        // lastmsg.textContent = "I love you jaan ";
        // lastmsg.setAttribute('font-size','200px');
        
    }
    playGame();
}
game();