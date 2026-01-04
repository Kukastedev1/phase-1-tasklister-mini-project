
// Select the form
const form = document.getElementById('create-task-form');

// Select the input field
const taskInput = document.querySelector('#create-task-form input[name="new-task-description"]');

// Add submit event listener
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page reload

  // Get the input value
  const task = taskInput.value;

  // Call function to add task
  buildToDo(task);

  // Clear input
  taskInput.value = '';
});

// Function to build and append task to list
function buildToDo(task) {
  const taskList = document.getElementById('tasks');

  const li = document.createElement('li');
  li.textContent = task;

  // OPTIONAL: Add delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.style.marginLeft = '10px';
  deleteButton.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteButton);

  taskList.appendChild(li);
}
