document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const saveTasks = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.className = task.completed ? 'completed' : '';
            li.setAttribute('data-index', index);

            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = task.text;
            taskText.addEventListener('click', () => toggleTaskComplete(index));

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => deleteTask(index));

            li.appendChild(taskText);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    };

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            tasks.push({ text: taskText, completed: false });
            taskInput.value = '';
            saveTasks();
            renderTasks();
        }
    };

    const toggleTaskComplete = (index) => {
        tasks[index].completed = !tasks[index].completed;
        saveTasks();
        renderTasks();
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    };

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    renderTasks();
});
