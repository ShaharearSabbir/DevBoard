const questions = [
  {
    question: `Question-1: What are the different ways to select an element in the DOM?`,
    answer: `muhaha`,
  },
  {
    question: `Question-2: What is the difference between innerHTML, innerText, and textContent ?`,
    answer: `muhaha`,
  },
  {
    question: `Question-3: What is event delegation in the DOM?`,
    answer: `muhaha`,
  },
  {
    question: `Question-4: What is event bubbling in the DOM?`,
    answer: `muhaha`,
  },
  {
    question: `Question-5: How do you create, add, and remove elements using JavaScript?`,
    answer: `muhaha`,
  },
];

for (const question of questions) {
  addQuestion(question.question, question.answer);
}

document.getElementById("back-to-desk").addEventListener("click", function () {
  window.location.href = "index.html";
});
