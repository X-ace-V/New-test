// script.js

/**
 * An exemplary DOM function that creates a new paragraph element
 * and appends it to the document body.
 */
function addExampleParagraph() {
  const newParagraph = document.createElement('p');
  newParagraph.textContent = 'This paragraph was dynamically added by script.js!';
  document.body.appendChild(newParagraph);
}

// Example of how to call the function:
// document.addEventListener('DOMContentLoaded', addExampleParagraph);

