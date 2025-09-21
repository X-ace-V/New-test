# Todo Application Overview

This document explains the purpose and content of the core files that make up this simple Todo application: `index.html`, `style.css`, and `script.js`.

## `index.html`

This file is the main entry point and defines the structure of the web page. It includes:

*   **Basic HTML structure**: `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` tags.
*   **Metadata**: `<meta>` tags for character set, viewport settings, etc., and the page title (`<title>`).
*   **CSS Link**: A `<link>` tag that connects to `style.css` to apply styling to the page.
*   **Application Header**: A main heading (e.g., `<h1>` or `<h2>`) for the Todo App.
*   **Input Section**: An `<input type="text">` field where users can type new todo items, and an accompanying `<button>` (e.g., "Add Task") to submit them.
*   **Todo List Container**: An unordered list (`<ul>` or an equivalent `<div>`) where individual todo items will be displayed dynamically.
*   **JavaScript Link**: A `<script>` tag, typically placed near the end of the `<body>`, that links to `script.js` to enable interactive functionality.

## `style.css`

This file contains all the Cascading Style Sheets (CSS) rules that dictate the visual presentation and layout of the Todo application. It includes:

*   **Global Styles**: Basic styling for the `body`, fonts, colors, and margins.
*   **Layout**: Rules for positioning and sizing elements, often using Flexbox or Grid for the main container and list items.
*   **Component Styling**: Specific styles for the input field, add button, and the todo list itself.
*   **List Item Styling**: Styles for individual todo items, including padding, background, text alignment, and potentially styles for completion (e.g., strikethrough text for completed tasks) or delete buttons.
*   **Responsiveness**: May include media queries to adapt the layout for different screen sizes.

## `script.js`

This file provides the core JavaScript logic that makes the Todo application interactive and functional. It typically handles:

*   **DOM Element Selection**: Selecting HTML elements like the input field, add button, and the todo list container using `document.querySelector` or `document.getElementById`.
*   **Adding New Todos**: An event listener attached to the add button (or input field for 'Enter' key press) that captures user input, creates a new list item element, appends it to the todo list, and clears the input field.
*   **Deleting Todos**: Functionality to remove todo items from the list, often triggered by a click on a delete button within each todo item.
*   **Marking as Complete**: Toggling a 'completed' state for todo items, typically by adding/removing a CSS class that applies a visual cue (e.g., strikethrough).
*   **Persistence**: Using `localStorage` (or similar web storage API) to save and load todo items so they persist even when the user closes and reopens the browser or refreshes the page.
*   **Initial Load**: Code to load any existing todos from `localStorage` when the application starts.
