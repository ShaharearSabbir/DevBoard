const sections = document.getElementsByClassName("task-section");

for (const section of sections) {
  const button = section.querySelector(".section-complete-btn");
  button.addEventListener("click", function () {
    alert("Board Updated Successfully");
    const pandingTask = getInnerTextByIdInNum("panding-task-counter");
    const updatedPanding = pandingTask - 1;
    document.getElementById("panding-task-counter").innerText = updatedPanding;

    const completedTask = getInnerTextByIdInNum("completed-task-counter");
    const updatedCompleted = completedTask + 1;
    document.getElementById("completed-task-counter").innerText =
      updatedCompleted;
    button.disabled = true;
    button.style.backgroundColor = "lightgray";
    button.style.cursor = "default";
    const sectionTitle = section.querySelector(".section-title").innerText;
    const timeNow = getTimeNow();
    CreateAndAddToLog(sectionTitle, timeNow);
  });
}
