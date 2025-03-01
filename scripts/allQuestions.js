const questions = [
  {
    question: `Question-1: What are the different ways to select an element in the DOM?`,
    answer: `<h4 class="font-bold mb-2">
  We can use multiple way to select an element. Some ways are given below:
</h4>
<ul>
  <li>
    <span class="font-medium">getElementsByTagName: </span> If we want to
    select the elements under same tag name, we can use getElementsByTagName and
    this will return a html collection.
  </li>
  <li>
    <span class="font-medium">getElementById: </span> If we want to select an
    element with an id, we can use getElementById.
  </li>
  <li>
    <span class="font-medium">getElementsByClassName:</span>We can use
    getElementsByClassName to select all the element under same class name.
  </li>
  <li>
    <span class="font-medium">querySelectorAll: </span>We can use
    querySelector to select as we select elements on css. It will give all
    the element under spesific css selector.
  </li>
  <li>
    <span class="font-medium">querySelector: </span>We can use querySelectorAll to select as we select element on css. It will give all the first element under specific css selector.
  </li>
</ul>


`,
  },
  {
    question: `Question-2: What is the difference between innerHTML, innerText, and textContent ?`,
    answer: `
  <li>
    <span class="font-medium">innerHTML: </span>Retrieves everything inside the element, including text, scripts, and HTML tags.
  </li>
  <li>
    <span class="font-medium">innerText: </span> Returns only the visible text within the element, ignoring hidden content and scripts.
  </li>
  <li>
    <span class="font-medium">textContent:</span>Provides all text inside the element, including hidden text but excluding HTML tags.
  </li>
</ul>
    `,
  },
  {
    question: `Question-3: What is event delegation in the DOM?`,
    answer: `<p>Event Delegation is a pattern of handling event bubble. Using event delegation we can handle how event bubble will act.</p>`,
  },
  {
    question: `Question-4: What is event bubbling in the DOM?`,
    answer: `Event Bubbling is the way events are handled on Javascript. After the event target action is done the event goes to document element from the target element touching every parent element like a bubble and this process is called event bubbling.`,
  },
  {
    question: `Question-5: How do you create, add, and remove elements using JavaScript?`,
    answer: `
    createElement method is used to create an element on javascript. we can use append and appendChild method to add a element in particular parent element. we can target the parent of that element we wanna delete and set and empty string as a value if the parent elements InnerHTML.
    `,
  },
];

for (const question of questions) {
  addQuestion(question.question, question.answer);
}

document.getElementById("back-to-desk").addEventListener("click", function () {
  window.location.href = "index.html";
});

document.querySelectorAll;
