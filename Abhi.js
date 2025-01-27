document.getElementById("addTaskBtn").addEventListener("click", function() {
    let taskInput = document.getElementById("taskInput").value;
    
    if (taskInput.trim() !== "") {
      let taskList = document.getElementById("taskList");
      
      let newTask = document.createElement("li");
      newTask.innerHTML = `${taskInput} <button class="deleteBtn">Delete</button>`;
      
      // Toggle completed task
      newTask.addEventListener("click", function() {
        newTask.classList.toggle("completed");
      });
      
      // Delete task
      newTask.querySelector(".deleteBtn").addEventListener("click", function(event) {
        event.stopPropagation();
        taskList.removeChild(newTask);
      });
  
      taskList.appendChild(newTask);
      document.getElementById("taskInput").value = ""; // Clear the input field
    }
  });
  