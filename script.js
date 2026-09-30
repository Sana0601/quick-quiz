const questions = [
    {
        q: "Which language is used to style a webpage?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "CSS"
    },
    {
        q: "Which language makes a webpage interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },
    {
        q: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Markup Language"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        q: "Which symbol is used for comments in JavaScript?",
        options: ["//", "##", "<!--", "**"],
        answer: "//"
    }
];

let index = 0;
let score = 0;

function showQuestion() {

    let q = questions[index];

    document.getElementById("question").innerText =
        (index + 1) + ". " + q.q;

    let options = document.getElementById("options");

    options.innerHTML = "";

    q.options.forEach(function(option) {

        let button = document.createElement("button");

        button.innerText = option;
        button.className = "option";

        button.onclick = function() {
            checkAnswer(button, option);
        };

        options.appendChild(button);
    });

    document.getElementById("next").style.display = "none";
}


function checkAnswer(button, selected) {

    let correct = questions[index].answer;

    document.querySelectorAll(".option").forEach(function(btn) {
        btn.disabled = true;
    });

    if (selected === correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    document.getElementById("next").style.display = "inline-block";
}


function nextQuestion() {

    index++;

    if (index < questions.length) {
        showQuestion();
    } else {

        document.querySelector(".quiz").innerHTML = `
            <h1>🎉 Quiz Finished!</h1>
            <h2>Your Score</h2>
            <p>${score} / ${questions.length}</p>
            <button id="next" onclick="location.reload()">
                Play Again
            </button>
        `;
    }
}

showQuestion();