let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector('.msg');
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () =>{
    let options = ["rock","paper","scissors"];
    const randInx = Math.floor(Math.random()*3);
    return options[randInx];
}
const drawGame = () =>{
    msg.innerText = "Game was Draw.Play again";
    msg.style.backgroundColor = "#081b31";
}
const showWinner = (userWin,compChoice,userChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `YOU WIN! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `YOU LOSE! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin =  compChoice ==="paper" ? false : true;  
        }else if(userChoice === 'paper'){
            userWin =  compChoice ==="scissors" ? false : true;
        }else{
            userWin =  compChoice ==="rock" ? false : true;
        }
        showWinner(userWin,compChoice,userChoice);
    }


}
choices.forEach((choice) => {
    choice.addEventListener("click" ,()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})