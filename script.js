function addGreetingToBody() {
  const newDiv = document.createElement('div');
  newDiv.id = 'greeting-message';
  newDiv.textContent = 'Hello from script.js! This is an exemplary DOM function.';
  document.body.appendChild(newDiv);
}

