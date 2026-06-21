// Load tasks from LocalStorage
document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");
    let li = document.createElement("li");
    li.textContent = taskValue;

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
        saveTasks();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    saveTasks();
    taskInput.value = "";
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.firstChild.textContent);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
        savedTasks.forEach(taskText => {
            let taskList = document.getElementById("taskList");
            let li = document.createElement("li");
            li.textContent = taskText;
            
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = function() {
                taskList.removeChild(li);
                saveTasks();
            };
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }
}
