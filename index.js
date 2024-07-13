let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randId = Math.floor(Math.random() * 3);
    return options[randId];
};

const drawGame = () => {
    msg.innerText = "Game was draw, Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You are win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // Generate user choice
    // console.log(`User Choice = ${userChoice}`);
    // Generate computer choice
    const compChoice = genCompChoice();
    // console.log(`Computer Choice = ${compChoice}`);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            // scissor , paper
            userWin = compChoice === "paper" ? false : true ;
        }else if(userChoice === "paper"){
            // rock ,scissor
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click",() => {
        playGame(userChoice);
    });
});