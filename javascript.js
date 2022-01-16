/*
1 - rock
2 - paper
3 - scissors
*/

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



// input value from the user
// generate a random value for the computer
// compare the two
// output a message
// iterate 5 times
// output the name of the winner



function playRound (playerSelection, computerSelection) {
    if (computerSelection === "rock")
        {
            return "You Draw! Rock is even with Rock"
        }
    else if (computerSelection === "scissors")
        {
            return "You Win! Rock beats Scissors!"
        }
    return "You Lose! Rock loses to Paper";        
  };

function game () {
    let a,b = 0;

    for (let i=0; i<5; i++) {
        let x = window.prompt('Enter one of: rock, paper, scissors. No other symbols, please.');
        let y = computerPlay();
        if (x === y) {
            console.log("This is a draw!");
        } else if (x === "rock" && y === "paper") {
            b++;
            console.log("You lose! Rock loses to Paper");
        } else if (x === "rock" && y === "scissors") {
            a++;
            console.log("You win! Rock beats Scissors");
        } else if (x === "paper" && y === "rock") {
            a++;
            console.log("You win! Paper beats Rock");
        } else if (x === "paper" && y === "scissors") {
            b++;  
            console.log("You lose! Paper loses to Scissors");   
        } else if (x === "scissors" && y === "rock") {
            b++;
            console.log("You lose! Scissors lose to Rock");
        } else if (x === "scissors" && y === "paper") {
            a++;
            console.log("You win! Scissors beat Paper");
        }
    };
    if (a > b) {
        console.log("You won!");
    } else if (a === b) {
        console.log("It's a draw!");
    } else console.log("You lost");
  };



const playerSelection = "rock";
const computerSelection = computerPlay();
game();




// function that plays the game 5 times
// use print the winner of each game in console and the winner of the TOTAL game at the end
