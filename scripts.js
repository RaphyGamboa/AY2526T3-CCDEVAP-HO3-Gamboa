let num1, num2, operator, correctAnswer = 2;
let score = 0;
let attempts = 0;
const operators = ["+", "-", "*"];

function playAgain() {
    score = 0;
    attempts = 0;
    document.getElementById("score").innerHTML = score;
    document.getElementById("message").innerHTML = "";
    document.getElementById("answer").value = "";
    document.getElementById("div-success").style.display = "none";
    document.getElementById("div-questions").style.display = "block";
    generateQuestion();
}

function checkAnswer() {
    let value = document.getElementById("answer").value;
    let p = document.getElementById("message");
    let p2 = document.getElementById("score");
    let success = document.getElementById("div-success");
    let result = document.getElementsByTagName("h2")[0];
    let question = document.getElementById("div-questions");
    attempts++;

    if (attempts <= 5) {
        if (value == correctAnswer){
            p.innerHTML = "Correct!";
            p.style.color = "green";
            score++;
        }
        else {
            p.innerHTML = "Wrong! Correct answer was " + correctAnswer;
            p.style.color = "red";
        }

        generateQuestion();
    }

    p2.innerHTML = score;
    document.getElementById("answer").value = "";
    
    if (score == 5) {
        result.innerHTML = "Congratulations!<br>You win!!";
        success.style.color = "green";
        question.style.display = "none";
        success.style.display = "block";
    }
    else if (attempts == 5) {
        result.innerHTML = "Game over!<br>You got " + score + " / 5.";
        success.style.color = "red";
        question.style.display = "none";
        success.style.display = "block";
    }
}

function generateQuestion () {
    let x = Math.floor(Math.random() * 11);
    let y = Math.floor(Math.random() * 11);
    let z = Math.floor(Math.random() * 3);
    let op = operators[z];

    switch (z) {
        case 1: correctAnswer = x - y; break;
        case 2: correctAnswer = x * y; break;
        default: correctAnswer = x + y; break;
    }

    x.toString();
    op.toString();
    y.toString();

    let question = x + " " + op + " " + y;

    document.getElementById("question").innerHTML = question;
}

generateQuestion();