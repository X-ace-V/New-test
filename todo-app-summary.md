# Todo Application Summary

This document provides a summary of the HTML, CSS, and JavaScript files that make up the todo application in this repository.

## `index.html` (HTML Structure)

The `index.html` file establishes the fundamental structure of the todo application. It typically includes:

-   **Document Metadata:** `<meta charset="UTF-8">` for character encoding and `<meta name="viewport">` for responsive design.
-   **Page Title:** A `<title>` tag, often set to "Todo App".
-   **CSS Link:** A `<link rel="stylesheet" href="style.css">` to connect the HTML to its styling.
-   **Main Container:** A `<div>` element (e.g., with class `container`) that wraps all the application's visual components.
-   **Header:** An `<h1>` tag, usually displaying "Todo App".
-   **Todo Input Section:** A `<div>` (e.g., `todo-input`) containing:
    -   An `<input type="text">` field (e.g., `id="todo-input"`) for users to type new todo items.
    -   A `<button>` (e.g., `id="add-button"`) to trigger the addition of a new todo.
-   **Todo List Display:** An unordered list (`<ul>` with `id="todo-list"`) where individual todo items are dynamically added and displayed by JavaScript.
-   **JavaScript Link:** A `<script src="script.js"></script>` tag, typically placed at the end of the `<body>` to ensure the HTML is fully loaded before the script attempts to manipulate the DOM.

## `style.css` (CSS Styling)

The `style.css` file defines the visual presentation and layout of the todo application. Common styling elements include:

-   **Global Reset:** `* { margin: 0; padding: 0; box-sizing: border-box; }` to normalize browser default styles.
-   **Body Styling:** Sets `font-family`, `background-color`, and often uses Flexbox or Grid (`display: flex`, `justify-content: center`, `align-items: center`, `min-height: 100vh`) to center the application on the page.
-   **Container Styling:** Styles for the main application wrapper, including `background-color`, `padding`, `border-radius`, and `box-shadow` for a card-like effect, along with a defined `width`.
-   **Heading Styles:** Text alignment, `margin`, and `color` for the `<h1>` element.
-   **Input Section Layout:** Uses `display: flex` for the input field and button, with `gap` for spacing.
-   **Input Field Styles:** `flex-grow`, `padding`, `border`, `border-radius` for a clean look.
-   **Add Button Styles:** `background-color`, `color`, `padding`, `border`, `border-radius`, and `cursor: pointer`, often with `transition` for hover effects.
-   **Todo List Styles:** `list-style: none`, `padding`, `margin-top` to remove default list styling and add spacing.
-   **Todo Item Styles:** Each `<li>` element representing a todo item will have `background-color`, `padding`, `margin-bottom`, `border-radius`, and use `display: flex` with `justify-content: space-between` to position the todo text and delete button. `word-wrap` and `break-word` might be used for long text.
-   **Completed State:** A `.completed` class for `<li>` elements, applying `text-decoration: line-through` and potentially a lighter `color`.
-   **Delete Button Styles:** `background-color` (e.g., red), `color`, `border`, `padding`, `border-radius`, and `cursor: pointer` for the delete action, also with `transition` effects.

## `script.js` (JavaScript Functionality)

The `script.js` file brings the todo application to life with interactive features. Key functionalities include:

-   **DOM Element References:** Variables to store references to the input field, add button, and the todo list element using `document.getElementById()`.
-   **Data Storage (localStorage):** Uses `localStorage` to persist todo items across browser sessions.
    -   `loadTodos()`: Retrieves stored todos, parses them from JSON, and renders them on page load.
    -   `saveTodos()`: Serializes the current array of todo objects to JSON and saves it to `localStorage`.
-   **Todo Rendering:**
    -   `renderTodo(todo)`: A function that creates a new `<li>` element for a given todo object. It sets the text, applies the `completed` class if needed, creates and appends a delete button, and attaches event listeners to the `<li>` for toggling completion and to the delete button for removal.
-   **Add Todo Logic:**
    -   `addTodo()`: Triggered by the add button click or Enter keypress. It reads the input value, creates a new todo object `{ text: value, completed: false }`, adds it to an internal array, calls `saveTodos()`, `renderTodo()`, and clears the input field.
-   **Toggle Completion:** An event listener on the `todo-list` (using event delegation) detects clicks on `<li>` elements. It toggles the `completed` class on the `<li>` and updates the `completed` status of the corresponding todo object in the array, then calls `saveTodos()`.
-   **Delete Todo Logic:** An event listener on the `todo-list` (using event delegation) detects clicks on delete buttons. It removes the parent `<li>` element from the DOM and filters the corresponding todo object out of the internal array, then calls `saveTodos()`.
-   **Event Listeners:**
    -   `click` event listener on the add button.
    -   `keypress` event listener on the input field (checking for the 'Enter' key).
    -   `click` event listener on the `todo-list` to handle both item completion toggling and deletion via event delegation.

This combined structure and functionality allow users to add, mark as complete, delete, and persist todo items effectively.
