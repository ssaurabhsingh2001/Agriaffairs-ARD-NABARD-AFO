// Quiz Questions
const questions = [
    {
        question: "Which crop is known as the 'Golden Fiber'?",
        choices: ["Cotton", "Jute", "Silk", "Wool"],
        correctAnswer: 1
    },
    {
        question: "Which breed of poultry is famous for its meat?",
        choices: ["Leghorn", "Karaknath", "Asil", "Rhode Island Red"],
        correctAnswer: 2
    },
    {
        question: "What is the primary function of nitrogen in plants?",
        choices: ["Protein synthesis", "Root development", "Flowering", "Pest control"],
        correctAnswer: 0
    },
    {
        question: "Which organization is responsible for developing high-yielding varieties of crops in India?",
        choices: ["ICAR", "IFFCO", "NABARD", "FAO"],
        correctAnswer: 0
    },
    {
        question: "Which is the largest dairy breed of buffalo?",
        choices: ["Murrah", "Jaffarabadi", "Nili-Ravi", "Surti"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("result").textContent = "";
    const quizContainer = document.getElementById('quiz-container');
    const questionEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");

    const question = questions[currentQuestion];

    questionEl.textContent = question.question;

    choicesEl.innerHTML = "";
    question.choices.forEach((choice, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="choice" value="${index}"> ${choice}`;
        choicesEl.appendChild(li);
    });
}

function nextQuestion() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    
    if (!selectedChoice) {
        alert("Please select an answer!");
        return;
    }

    const answer = parseInt(selectedChoice.value);
    if (answer === questions[currentQuestion].correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result").textContent = `Your score is ${score} out of ${questions.length}`;
}

// Initialize quiz
window.onload = function () {
    loadQuestion();
};
