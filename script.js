document.addEventListener("DOMContentLoaded", () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Adhukkappuram unga render() function...
    function render() {
        taskList.innerHTML = "";
        // ... baki code ...
    }

    // Ellaa functions-um indha block-kulle irukkanum
     render(); 
});
