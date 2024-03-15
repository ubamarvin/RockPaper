const rockPaperScissor = ["rock", "paper", "scissor"];
        const noOfGames = 5;
        let playerScore = 0;
        
        function getUserChoice () {
            userChoice = prompt("Enter either Rock paper or Scissor");
            return userChoice.toLocaleLowerCase();
        };

        function getComputerChoice() {
            let randomIndex = Math.floor(Math.random()*rockPaperScissor.length);
            return rockPaperScissor[randomIndex];
        };


        function playRound(playerSelection, computerChoice) {

            //User wins
            if (playerSelection == "rock" && computerChoice == "scissor") {
                console.log("Round Won, " + playerSelection + " beats " + computerChoice);
                return 1;
            }
            else if (playerSelection == "paper" && computerChoice == "rock") {
                console.log("Round Won, " + playerSelection + " beats " + computerChoice);
                return 1;
            }
            else if (playerSelection == "scissor" && computerChoice == "paper") {
                console.log("Round Won, " + playerSelection + " beats " + computerChoice);
                return 1;
            }
            //user draws
            else if (playerSelection == computerChoice) {
                console.log("Draw!, " + playerSelection + " draws " + computerChoice);
                return 0;
            }
            //user looses
            else if (playerSelection == "rock" && computerChoice == "paper") {
                console.log("Round Lost, " + playerSelection + " looses to " + computerChoice);
                return -1;
            }
            else if (playerSelection == "paper" && computerChoice == "scissor") {
                console.log("Round Lost, " + playerSelection + " looses to " + computerChoice);
                return -1;
            }
            else if (playerSelection == "scissor" && computerChoice == "rock") {
                console.log("Round Lost, " + playerSelection + " looses to " + computerChoice);
                return -1;
            }
                
        };


        function playGame() {
            for (i=0 ; i < noOfGames; i++) {
                playerScore += playRound(getUserChoice(),getComputerChoice());
            }
            console.log(playerScore > 0 ? "User won" : "Computer won" );
        };
        //Main 
        playGame();