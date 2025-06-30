const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "London"],
    correct: 2
  },
  {
    question: "Which language runs in a web browser?",
    answers: ["Java", "C", "Python", "JavaScript"],
    correct: 3
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Computer Style Sheet",
      "Creative Style System",
      "Colorful Style Sheets"
    ],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", () => checkAnswer(index, button));
    answersDiv.appendChild(button);
  });

  document.getElementById("next").style.display = "none";
}

function checkAnswer(selectedIndex, button) {
  const q = questions[currentQuestion];
  const answerButtons = document.querySelectorAll("#answers button");

  if (selectedIndex === q.correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    answerButtons[q.correct].classList.add("correct");
  }

  // disable all buttons
  answerButtons.forEach(btn => btn.disabled = true);

  document.getElementById("next").style.display = "inline-block";
}

document.getElementById("next").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
});

document.getElementById("start").addEventListener("click", () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-screen").style.display = "block";
  currentQuestion = 0;
  score = 0;
  showQuestion();
});

document.getElementById("restart").addEventListener("click", () => {
  document.getElementById("end-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
});

function endQuiz() {
  document.getElementById("quiz-screen").style.display = "none";
  document.getElementById("end-screen").style.display = "block";
  document.getElementById("score").textContent = `You got ${score} out of ${questions.length} correct!`;
}
