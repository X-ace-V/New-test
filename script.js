function updateGreeting() {
    const greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = 'Hello from script.js!';
    }
}

// Example of how to call this function (not part of the task, just for context):
// window.onload = updateGreeting;

