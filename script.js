document.addEventListener("DOMContentLoaded", () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Add task function
    window.addTask = () => {
        const taskValue = taskInput.value;
        if (taskValue === "") {
            alert("Please enter a task!");
            return;
        }

        tasks.push(taskValue);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        taskInput.value = "";
        render();
    };

    // Render function
    function render() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task + " "; 

            // Delete button
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.onclick = () => {
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
                render();
            };

            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    render();
});
