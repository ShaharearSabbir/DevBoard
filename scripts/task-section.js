function addTask(company, title, description, date) {
  const taskContainer = document.getElementById("task-container");
  const section = document.createElement("section");
  section.setAttribute("class", "task-section");
  section.innerHTML = `
    <div class="bg-blue-50 p-6 rounded-3xl flex flex-col gap-5 hover:shadow-lg">
    <div>
      <span class="px-4 py-2 bg-white rounded-3xl">${company}</span>
    </div>
    <h3 class="section-title text-2xl font-medium text-cyan-900">${title}</h3>
    <div class="bg-white rounded-2xl p-4 h-24 overflow-hidden">
      <p class="opacity-50">
      ${description}
      </p>
    </div>
    <hr class="border-dashed border-1 border-blue-100" />
    <!-- Date and Button -->
    <div class="flex justify-between items-center">
      <div>
        <p class="opacity-50">Deadline</p>
        <h3 class="font-medium">${date}</h3>
      </div>
      <div>
        <button class="section-complete-btn hover:bg-blue-500 cursor-pointer px-5 py-3 bg-blue-600 text-white rounded-xl">
          Completed
        </button>
      </div>
    </div>
  </div>
    `;
  taskContainer.appendChild(section);
}

for (const task of tasks) {
  addTask(task.company, task.title, task.details, task.date);
}
