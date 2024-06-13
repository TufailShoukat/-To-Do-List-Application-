let tasks = [];

function addTask() {
    const taskName = document.getElementById('task-name').value;
    const dueDate = document.getElementById('due-date').value;
    const category = document.getElementById('category').value;

    if (taskName && dueDate && category) {
        const task = {
            name: taskName,
            date: dueDate,
            category: category
        };

        tasks.push(task);
        displayTasks(tasks);

    
        document.getElementById('task-name').value = '';
        document.getElementById('due-date').value = '';
        document.getElementById('category').value = 'Homework';
    } else {
        alert('Please fill out all fields.');
    }
}

function displayTasks(taskList) {
    const taskListElement = document.getElementById('task-list');
    taskListElement.innerHTML = '';

    taskList.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${task.name} - ${task.date} - ${task.category}`;
        taskListElement.appendChild(taskItem);
    });
}

function filterTasks() {
    const filterCategory = document.getElementById('filter-category').value;

    if (filterCategory === 'All') {
        displayTasks(tasks);
    } else {
        const filteredTasks = tasks.filter(task => task.category === filterCategory);
        displayTasks(filteredTasks);
    }
}
