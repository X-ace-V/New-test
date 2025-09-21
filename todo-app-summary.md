# Todo Application Summary

This document summarizes the HTML, CSS, and JavaScript components of the simple Todo application.

## HTML Structure (`index.html`)

The `index.html` file establishes the fundamental structure of the Todo application. It includes standard boilerplate for an HTML5 document, defines a responsive viewport, links to `style.css` for presentation, and loads `script.js` for dynamic behavior. The main interface is contained within a `div` with the class `container`, which holds:

-   A main heading (`<h1>Todo List</h1>`).
-   An input field (`<input type="text" id="todoInput">`) for users to enter new todo items.
-   A button (`<button id="addTodoBtn">Add Todo</button>`) to add the input item to the list.
-   An unordered list (`<ul id="todoList">`) where todo items are dynamically rendered and displayed.

## CSS Styling (`style.css`)

The `style.css` file is responsible for the visual presentation and layout of the Todo application, aiming for a clean and centered user experience.

Key styling aspects include:

-   **Body:** Sets a neutral background color, centers the content using flexbox, and applies a basic sans-serif font.
-   **Container:** Styles the main application box with a white background, padding, rounded corners, and a subtle shadow for visual depth.
-   **Headings:** Centers the main heading and applies a dark grey color.
-   **Input Field & Button:** Styles for the todo input and add button ensure they are visually distinct and user-friendly, with hover effects for the button.
-   **Todo List Items:** Each todo item (`<li>`) within the `#todoList` is styled with a light background, padding, and displays content and a delete button (`<button>`) using flexbox for alignment. Delete buttons are styled distinctly with a red background and hover effect.

## JavaScript Logic (`script.js`)

The `script.js` file implements the core functionality and interactive behavior of the Todo application. It executes once the Document Object Model (DOM) is fully loaded.

Key features and functions:

1.  **DOM Element References:** Obtains references to the todo input field (`#todoInput`), add button (`#addTodoBtn`), and the todo list container (`#todoList`).
2.  **Local Storage Integration:** Utilizes the browser's `localStorage` to persist todo items. Todos are loaded on page initialization and saved whenever changes occur.
    -   `todos`: An array to hold the current list of todo items.
    -   `saveTodos()`: Saves the current `todos` array to `localStorage` as a JSON string.
3.  **`renderTodos()`:** Clears the existing `#todoList` and then dynamically creates and appends `<li>` elements for each todo item in the `todos` array. Each `<li>` includes the todo text and a "Delete" button, which stores the todo's index as a `data-index` attribute.
4.  **`addTodo()`:** Triggered by clicking the "Add Todo" button. It reads the value from `todoInput`, trims whitespace, and if not empty, adds the new todo to the `todos` array, clears the input, saves the updated list, and re-renders the todos.
5.  **`deleteTodo(index)`:** Removes a todo item from the `todos` array at the specified `index`, saves the updated list, and re-renders the todos.
6.  **Event Listeners:**
    -   An event listener on `addTodoBtn` calls `addTodo()` when clicked.
    -   An event listener on `todoList` uses event delegation to detect clicks on "Delete" buttons within the list. When a delete button is clicked, it extracts the `data-index` and calls `deleteTodo()`.

Upon initial page load, `renderTodos()` is called to display any todos previously saved in local storage.
