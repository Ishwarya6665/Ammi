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
    answers: ["Cascading Style Sheets", "Computer Style Sheet", "Creative Style System", "Colorful Style Sheets"],
    correct: 0
  }
];

let currentQuestion = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").textContent = q.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => checkAnswer(index);
    answersDiv.appendChild(button);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  if (selected === q.correct) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

document.getElementById("next").addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    alert("Quiz finished!");
    currentQuestion = 0;
    showQuestion();
  }
});

showQuestion();
