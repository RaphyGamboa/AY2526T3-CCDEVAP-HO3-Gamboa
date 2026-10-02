let num1, num2, operator, correctAnswer = 2;
let score = 0;
let attempts = 0;
const operators = ["+", "-", "*"];

function playAgain() {
    
}

function checkAnswer() {
    let value = document.getElementById("answer").value;
    let p = document.getElementById("message");
    let p2 = document.getElementById("score");

    attempts++;

    if (attempts < 5) {
        if (value == correctAnswer){
            p.innerHTML = "Correct!";
            p.style.color = "green";
            score++;
        }
        else {
            p.innerHTML = "Wrong! Correct answer was " + correctAnswer;
            p.style.color = "red";
        }

        console.log(value);
        console.log(correctAnswer);
        generateQuestion();
    }

    p2.innerHTML = score;

    console.log(score);
    console.log(attempts);
    console.log(correctAnswer);
}

function generateQuestion () {
    let x = Math.floor(Math.random() * 11);
    let y = Math.floor(Math.random() * 11);
    let z = Math.floor(Math.random() * 3);
    let op = operators[z];

    switch (z) {
        case 1: correctAnswer = x - y;
        case 2: correctAnswer = x * y;
        default: correctAnswer = x + y;
    }

    x.toString();
    op.toString();
    y.toString();

    let question = x + " " + op + " " + y;
    
    console.log(x + " " + op + " " + y);
    document.getElementById("question").innnerHTML = x + " " + op + " " + y;
}