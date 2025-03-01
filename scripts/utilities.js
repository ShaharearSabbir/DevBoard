function getInnerTextByIdInNum(id) {
  const textFromId = Number(document.getElementById(id).innerText);
  return textFromId;
}

function getDate() {
  const dateToday = document.getElementById("date-today");
  const date = new Date();
  const format = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const dateOnformat = date.toLocaleDateString("en-US", format);
  const dateArray = dateOnformat.split("");
  for (let i = 0; i < dateArray.length; i++) {
    if (dateArray[i] === ",") {
      dateArray.splice(i, 1);
    }
  }
  const convertedDate = dateArray.join("");
  dateToday.innerText = convertedDate;
}

getDate();

function getDay() {
  const dayToday = document.getElementById("day-today");
  const date = new Date();
  const format = {
    weekday: "short",
  };
  const dayOnFormat = date.toLocaleDateString("en-US", format);
  const dayWithComma = dayOnFormat + " ,";
  dayToday.innerText = dayWithComma;
}

getDay();

function CreateAndAddToLog(title, time) {
  const logContainer = document.getElementById("log-container");
  const div = document.createElement("div");
  div.innerHTML = `
    <p class="bg-blue-50 p-3 rounded-xl">
        You have Complete The Task ${title} at ${time}
    </p>
  `;
  logContainer.appendChild(div);
}

function getTimeNow() {
  const time = new Date();
  const second = time.getSeconds();
  const minute = time.getMinutes();
  const hour = time.getHours() > 12 ? time.getHours() % 12 : time.getHours();

  let amPm = time.getHours() > 12 ? "PM" : "AM";
  const timeOnFormat = hour + ":" + minute + ":" + second + " " + amPm;
  return timeOnFormat;
}

function addQuestion(question, answer) {
  const article = document.createElement("article");
  article.innerHTML = `
  <div class="bg-white rounded-3xl hover:shadow-lg p-6">
  <h3 class="text-3xl font-bold">
    ${question} </h3>
  <hr class="border-1 border-blue-100 border-dashed my-6" />
  <div>
    ${answer}
  </div>
</div>
  `;
  const questionContainer = document.getElementById("question-container");
  questionContainer.appendChild(article);
}

document.getElementById("discover").addEventListener("click", function () {
  window.location.href = "blog.html";
});
