let a = 0;
let b = 0;

function computerPlay () {
    const computer = Math.floor(Math.random() * 3) + 1;
    if (computer === 1)
        {
            return "rock"
        }
    else if (computer === 2)
        {
            return "paper"
        }
    return "scissors";
};

let result = document.getElementById('display')
let score = document.getElementById('score')
// const buttons = document.querySelectorAll('button')
const button_1 = document.querySelector('#rock')
const button_2 = document.querySelector('#paper')
const button_3 = document.querySelector('#scissors')
button_1.addEventListener('click', () => playRound('rock', computerPlay()))
button_2.addEventListener('click', () => playRound('paper', computerPlay()))
button_3.addEventListener('click', () => playRound('scissors', computerPlay()))

// buttons.forEach((button) => {button.addEventListener('click', playRound(button.id, computerPlay())) } )

function playRound (playerSelection, computerSelection) {
    if (a === 5) {
        result.textContent = "Congratulations, you won the series!"
        return;
    }
    if (b === 5) {
        result.textContent = "Sorry, you lost the series"
        return;
    }
    let x = playerSelection;
    let y = computerSelection;
    if (x === y) {
        result.textContent = "This is a draw!" + ""
        console.log("1")
        score.textContent = `The score is ${a} - ${b} (You vs Computer)`
        } 
    else if (x === "rock" && y === "paper") {
        result.textContent = "You lose! Rock loses to Paper"
        console.log("2")
        b++;
        score.textContent = `The score is ${a} - ${b} (You vs Computer)`
        } 
    else if (x === "rock" && y === "scissors") {
        result.textContent = "You win! Rock beats Scissors"
        console.log("3")
        a++;
        score.textContent = `The score is ${a} - ${b} (You vs Computer)`
        } 
    else if (x === "paper" && y === "rock") {
        result.textContent = "You win! Paper beats Rock"
        console.log("4")
        a++;
        score.textContent = `The score is ${a} - ${b} (You vs Computer)`
         } 
    else if (x === "paper" && y === "scissors") {
        result.textContent = "You lose! Paper loses to Scissors"
        console.log("5")
        b++;
        score.textContent = `The score is ${a} - ${b} (You vs Computer)`
        } 
    else if (x === "scissors" && y === "rock") {
        result.textContent = "You lose! Scissors lose to Rock"
        console.log("7")
        b++;
        score.textContent = `The score is ${a} - ${b} (You vs Computer)`
        } 
    else if (x === "scissors" && y === "paper") {
        result.textContent = "You win! Scissors beat Paper"
        console.log("8")
        a++;
        score.textContent = `The score is ${a} - ${b} (You vs Computer)`
        }
    if (a === 5) {
        result.textContent = "Congratulations, you won the series!"
        return;
    }
    if (b === 5) {
        result.textContent = "Sorry, you lost the series"
        return;
    }        
    };
