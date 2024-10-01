let start = document.querySelector(".startButton");
start.addEventListener("click", () => {
    startGame();
});

let humanScore = 0;
let computerScore = 0;

async function startGame() {
    humanScore = 0;
    computerScore = 0;
    let scroreTab = document.querySelector(".score");
    for (let i = 0; i < 5; i++) {
        let scoreArr = await playRound(); // Ждем результат
        humanScore += scoreArr[0];
        computerScore += scoreArr[1];
        console.log("Score: " + humanScore + "|" + computerScore);
        scroreTab.textContent = ("Score: " + humanScore + "|" + computerScore);
    }
    let gameWindow = document.querySelector(".tablo");
    if (humanScore > computerScore) {
        gameWindow.textContent = "Humanity has won!";
        console.log("Humanity has won!");
    } else if (humanScore < computerScore) {
        gameWindow.textContent = "Skynet has won, humanity is enslaved!";
        console.log("Skynet has won, humanity is enslaved!");
    } else {
        gameWindow.textContent = "No one left alive!";
        console.log("No one left alive!");
    }
}

async function playRound() {
    let gameWindow = document.querySelector(".tablo");
    console.log("Rock, paper, scissors!!!");
    let human = await getHumanChoice(); // Ждем выбор человека
    console.log("Human choice: " + human);
    let computer = getComputerChoice();
    console.log("Computer choice: " + computer);
    gameWindow.textContent = "Human choice: " + human +"   Computer choice: " + computer;  
    switch (human) {
        case "rock":
            switch (computer) {
                case "rock":
                    return [0, 0];
                case "paper":
                    return [0, 1];
                case "scissors":
                    return [1, 0];
            }
        case "paper":
            switch (computer) {
                case "rock":
                    return [1, 0];
                case "paper":
                    return [0, 0];
                case "scissors":
                    return [0, 1];
            }
        case "scissors":
            switch (computer) {
                case "rock":
                    return [0, 1];
                case "paper":
                    return [1, 0];
                case "scissors":
                    return [0, 0];
            }
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * 3); // Исправлено на 3
    return choices[choiceIndex];
}

function getHumanChoice() {
    return new Promise((resolve) => {
        let menu = document.querySelector('#choice');
        
        menu.addEventListener('click', (event) => {
            let target = event.target;
            let choice = '';

            switch (target.id) {
                case 'rock':
                    choice = 'rock';
                    break;
                case 'paper':
                    choice = 'paper';
                    break;
                case 'scissors':
                    choice = 'scissors';
                    break;
                default:
                    return; // Игнорируем клик, если не по кнопке
            }
            
            resolve(choice); // Завершаем промис с выбранным вариантом
        }, { once: true }); // Обработчик сработает только один раз
    });
}