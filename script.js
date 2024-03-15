

const rockPaperScissor = ["rock", "paper", "scissor"];
const noOfRounds = 5;
let playerScore = 0;
let computerScore = 0;

function getUserChoice () {
    let userChoice;
    while (true) {
        userChoice = prompt("Enter either Rock paper or Scissor").toLowerCase();
        if (rockPaperScissor.includes(userChoice))
            return userChoice;
        else
            alert("your input is illlegol");
    }

}
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random()*rockPaperScissor.length); //this is bad, 3 hardly gets returned
    return rockPaperScissor[randomIndex];
}
//remove {}
function evaluateRound(player1choice, player2choice) {
    if (player1choice == "rock" && player2choice == "scissor") 
        return 1;
    else if (player1choice == "paper" && player2choice == "rock") 
        return 1;
    else if (player1choice == "scissor" && player2choice == "paper") 
        return 1;
    else if (player1choice === player2choice)
        return 0;
    else // case : anything else, meaning player2 wins, shouldnt return 0 as 0 indicates tie, perhaps -1?
        return 0; // 
}
function playRound(playerChoice, computerChoice) {
    console.log(playerChoice + " vs " + computerChoice);
    playerScore += evaluateRound(playerChoice, computerChoice);
    computerScore += evaluateRound(computerChoice,playerChoice); //not nescessary, if evaluate round returns -1   
}
function playGame() {
    for (i=0 ; i < noOfRounds; i++) {
        playRound(getUserChoice(),getComputerChoice());
    }
    console.log(playerScore);
    console.log(computerScore)
    console.log(playerScore > computerScore ? "User won with " + playerScore + " points."  
    : "Computer won with "  + computerScore + " points." );
}

//Main 
playGame()

