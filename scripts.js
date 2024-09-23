function getComputerChoice(){
    const minCeiled = 1;
    const maxFloored = 4;
    let choices = ["rock", "paper", "scissors"];
    choiceIndex = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return choices[choiceIndex-1];
}

function getHumanChoice(){
    let choice = prompt("Make your choice!!!").toLowerCase()
    return choice;
}

function playRound(){
    console.log("Rock, paper, scissors!!!");
    human = getHumanChoice();
    console.log("Human choice: " + human);
    computer = getComputerChoice();
    console.log("Computer choice: " + computer);
    switch(human){
        case "rock":
            switch(computer){
                case "rock":
                    return [0,0];
                    break;
                case "paper":
                    return [0,1];
                    break;

                case "scissors":
                    return [1,0];
                    break;
            }
        case "paper":
            switch(computer){
                case "rock":
                    return [1,0];
                    break;
                case "paper":
                    return [0,0];
                    break;
                case "scissors":
                    return [0,1];
                    break;
            }

        case "scissors":
            switch(computer){
                case "rock":
                    return [0,1];
                    break;
                case "paper":
                    return [1,0];
                    break;
                case "scissors":
                    return [0,0];
                    break;
            }
    }
}

function startGame(){
    humanScore = 0;
    computerScore = 0;
    round = 1;
    while  (round < 5){
        scoreArr = playRound();
        humanScore+=scoreArr[0];
        computerScore+=scoreArr[1];
        round+=1;
        console.log("Score:"+humanScore+"|"+computerScore);
    }
    if (humanScore > computerScore){
        console.log("Humanity has won!");
    }
    else if (humanScore < computerScore){
        console.log("Skynet has won, humanity is enslaved!");
    }
    else{
        console.log("No one left alive!");
    }
}
startGame();