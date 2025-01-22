const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let userPoints = 0;
let compPoints = 0;

const compgen = () => {
    const options = ["stone", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
};

const draw = () => {
    msg.innerHTML = `It's a Draw!`;
};

const playGame = (userChoice) => {
    let compChoice = compgen();
    let userWin = true;

    if (compChoice === userChoice) {
        draw();
        return;
    } else {
        if (compChoice === "paper") {
            userWin = userChoice === "scissors";
        } else if (compChoice === "stone") {
            userWin = userChoice === "paper";
        } else {
            userWin = userChoice === "stone";
        }
    }

    if (userWin) {
        userPoints++;
        userScore.innerHTML = userPoints;
        msg.innerHTML = `You won! You chose ${userChoice}, Computer chose ${compChoice}.`;
    } else {
        compPoints++;
        compScore.innerHTML = compPoints;
        msg.innerHTML = `You lost! You chose ${userChoice}, Computer chose ${compChoice}.`;
    }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        let userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
