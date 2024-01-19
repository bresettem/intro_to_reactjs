## Intro to React.js

This repository contains the course material for [The Complete 2024 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp). The course is divided into several sections, each of which is contained in a separate directory.

**Create React App(CRA) has been discontinued and recommend using Next.js instead**

_React and ReactDOM have be updated to the latest version due to errors_

`npm i --save react@latest react-dom@latest`

# Table of Contents

- [Table of Contents](#table-of-contents)
  - [279: Introduction to JSX and Babel](#279-introduction-to-jsx-and-babel)
  - [280: JSX Code Practice](#280-jsx-code-practice)
  - [281: Javascript Expressions in JSX \& ES6 Template Literals](#281-javascript-expressions-in-jsx--es6-template-literals)
  - [282: Javascript Expressions in JSX Practice](#282-javascript-expressions-in-jsx-practice)
  - [283: JSX Attributes \& Styling React Elements](#283-jsx-attributes--styling-react-elements)
  - [284: Inline Styling for React Elements](#284-inline-styling-for-react-elements)
  - [285: React Styling Practice](#285-react-styling-practice)
  - [286: React Components](#286-react-components)
  - [287: React Components Practice](#287-react-components-practice)
  - [288: Javascript ES6 - Import, Export, and Modules](#288-javascript-es6---import-export-and-modules)
  - [Node.js require vs ES6 import/export](#nodejs-require-vs-es6-importexport)
  - [289: Javascript ES6 Import, Export, and Modules Practice](#289-javascript-es6-import-export-and-modules-practice)
  - [290/291: Local Environment Setup for React Development](#290291-local-environment-setup-for-react-development)
  - [292: Newer Versions of Node Troubleshooting](#292-newer-versions-of-node-troubleshooting)
  - [293 Keeper App Project - Part 1 Challenge](#293-keeper-app-project---part-1-challenge)

## 279: Introduction to JSX and Babel

1. **Introduction: JSX in JavaScript Files**

   - It is a syntax extension for JavaScript that enables the incorporation of HTML-like markup directly into a JavaScript file.
   - JSX allows seamless integration of HTML and JavaScript in React applications.

2. **Setting Up: JSX Introduction Sandbox**

   - In the `index.js` file, require React and ReactDOM.
     ```jsx
     import React from "react";
     import ReactDOM from "react-dom";
     ```

3. **Understanding JSX and Compilation**

   - JSX undergoes compilation into JavaScript via Babel during React development.
   - **Babel in React:** Babel operates as a transpiler, converting the latest JavaScript syntax into a version compatible with all browser environments.
   - Babel ensures cross-browser support by transforming modern JavaScript into universally compatible code.

4. **ES6 Features and Imports**

   - Babel facilitates the use of ES6 features, promoting cleaner and more organized code.
   - Import React and ReactDOM using the `import` statement for better modularization.

5. **Rendering Multiple Elements with JSX**
   - ReactDOM's render method supports a single HTML element.
   - Wrap multiple elements within a single div for simultaneous rendering.
     ```jsx
     ReactDOM.render(
       <div>
         <h1>Hello, World!</h1>
         <p>This is a paragraph.</p>
       </div>,
       document.getElementById("root")
     );
     ```
6. **Challenge: Rendering Multiple Elements**

   - Challenge to render an `<h2>` and two paragraphs inside a single div.
   - Utilize the concept of wrapping elements inside a div for efficient rendering.
     ```jsx
     ReactDOM.render(
       <div>
         <h2>Hello, World!</h2>
         <p>This is a paragraph.</p>
         <p>This is another paragraph.</p>
       </div>,
       document.getElementById("root")
     );
     ```

7. **Conclusion: Applying JSX Knowledge**
   - Recap of JSX usage for HTML-JavaScript integration.
   - Appreciation for Babel's role in compiling JSX and ensuring cross-browser compatibility.
   - Introduction to ES6 features and modularization with import/export.

**Babel** in react operates as a transpiler, converting the latest JavaScript syntax into a version that can run in all environments. This is done by converting the latest JavaScript syntax into an older version that is supported by all browsers.

## 280: JSX Code Practice

1. Create a react app from scratch.
2. It should display a h1 heading.
3. It should display an unordered list (bullet points).
4. It should contain 3 list elements.

## 281: Javascript Expressions in JSX & ES6 Template Literals

1. **Introduction: JSX in JavaScript Files**

   - JSX allows us to insert HTML into JavaScript files.
   - We can also add HTML inside a JavaScript file and insert JavaScript inside that HTML. [Expressions vs Statements video](https://www.youtube.com/watch?v=WVyCrI1cHi8&list=PL-xu4i_QDSxcoDNeh8rx5-pHCCTOg0XsI&ab_channel=Codexpanse)

2. **Example: Rendering Lucky Number using JSX**

   - Use JSX expression to render the lucky number in a paragraph element.
     ```jsx
     const luckyNumber = 7;
     ReactDOM.render(
       <p>Your lucky number is {luckyNumber}.</p>,
       document.getElementById("root")
     );
     ```

3. **Deeper Dive: JSX and JavaScript Interaction**

   - JSX allows adding JavaScript expressions inside HTML elements using curly braces.
   - Expressions are evaluated to values, while statements cannot be used.
   - Example using constants `firstName` and `lastName`:

     ```jsx
     const firstName = 'Angela';
     const lastName = 'Yu';

     // Option 1: Concatenation
     <h1>Hello {firstName + ' ' + lastName}</h1>

     // Option 2: Separate curly braces
     <h1>Hello {firstName} {lastName}</h1>

     // Option 3: Template literals
     <h1>{`Hello ${firstName} ${lastName}`}</h1>
     ```

4. **Practice: Inserting JavaScript Inside HTML**
   - Exercise to practice inserting JavaScript inside HTML using JSX.
   - Example:
     ```jsx
     const num = 7;
     ReactDOM.render(
       <div>
         <p>Your lucky number is {num}.</p>
       </div>,
       document.getElementById("root")
     );
     ```

## 282: Javascript Expressions in JSX Practice

1. **Create a React App:**

   - Start by creating a React app from scratch.

2. **Display 2 Paragraphs:**

   - Configure the app to display two HTML paragraph elements.

3. **Paragraph Content:**

   - Define the content for the paragraphs as follows:

   | Example                | Intended Behavior     |
   | ---------------------- | --------------------- |
   | Created by YOURNAME.   | Created by Angela Yu. |
   | Copyright CURRENTYEAR. | Copyright 2019.       |

## 283: JSX Attributes & Styling React Elements

1. Use `className` instead of `class` in JSX to avoid warnings about invalid DOM property.

   - Example: `<h1 className="heading">Hello World!</h1>`

2. JSX attributes follow camelCase naming convention for multi-word attributes.

   - Example: `<div contentEditable={true}>Editable Content</div>`

3. Spellcheck attribute is camelCased in JSX.

   - Example: `<h1 contentEditable={true} spellCheck={false}>Editable Content</h1>`

4. Commonly used attribute for styling React elements is `className`, applied through CSS classes.

   - Example: `<div className="food-img">Content</div>`

5. JavaScript expressions can be used as attribute values in JSX.

   - Example: `<img src={imgUrl + "?grayscale"} alt="Random Image" />`

6. Include `alt` attribute for images to provide meaningful descriptions for accessibility.

   - Example: `<img src={randomImg} alt="Random Image" />`

7. Apply styling from `styles.css` to React elements.

   - CSS in `styles.css`:
     ```css
     .heading {
       color: red;
     }
     ```
   - JSX Usage: `<h1 className="heading">Hello World!</h1>`

8. Linter warnings can be addressed by adhering to best practices, such as adding `alt` text for images.

9. Experiment with the provided code, delete and recreate to reinforce understanding of JSX attributes.

10. Completed code for reference available in the course resources.

## 284: Inline Styling for React Elements

1. **Inline Styles Introduction:**

   - Recap: Applying CSS with style sheets.
   - Less common but useful: inline styles.

2. **Using Inline Styles in JSX:**

   - Starting project, fork it.
   - JSX looks like HTML but needs a different approach.
   - Mistake example: `<h1 style="color: "red;">Hello World!</h1>`
     - Correct: `<h1 style={{ color: "red" }}>Hello World!</h1>`

3. **JavaScript Object for Styling:**

   - JSX expects a JavaScript object for style property.
   - JavaScript objects: key-value pairs inside curly braces.
   - Wrapping in JSX: double curly braces.
     - Example: `<div style={{ fontSize: "20px", border: "1px solid black" }}>Content</div>`

4. **Use Cases for Inline Styles:**

   - Question: Why use inline styling over class-based styling?
   - Inline styles for dynamic updates without JSX modification.

5. **Dynamic Styling Example:**

   - Constants for storing style objects.
   - Updating styles on the fly without JSX modification.
     - Example: `const customStyle = { color: "blue", fontSize: "20px", border: "1px solid black" };`
     - Usage: `<div style={customStyle}>Dynamic Content</div>`
     - Modification: `customStyle.color = "purple";`

6. **Styling Properties in JSX:**

   - CSS properties: kebab-case to camelCase conversion in JavaScript objects.
   - Commas instead of semicolons in JavaScript objects.

7. **Challenge and Practice:**
   - Hands-on practice with CSS properties and JSX implementation.
   - Emphasis on experimentation and understanding JSX syntax.

## 285: React Styling Practice

1. **Create a React App:**

   - Start a new React app using your preferred setup method.

2. **Display Greeting Based on Time:**

   - Show a single `<h1>` element.
   - If the current time is between midnight and 12 PM, display "Good morning."
   - If the current time is between 12 PM and 6 PM, display "Good afternoon."
   - If the current time is between 6 PM and midnight, display "Good evening."

3. **Apply Styles:**

   - Apply the "heading" style from the `styles.css` file to the `<h1>` element.

4. **Change Text Color Dynamically:**
   - Utilize inline CSS styles to dynamically change the color of the `<h1>` text based on the time of day.
     - "Good morning" should have a red text color.
     - "Good afternoon" should have a green text color.
     - "Good evening" should have a blue text color.

## 286: React Components

1. Introduction to Components

   - React components enable the organization of web applications into reusable and manageable parts.
   - Improves code readability, maintainability, and reusability.

2. Creating a Heading Component

   - Demonstrated the process of creating a custom heading component in Pascal case (e.g., `Heading`).
   - Utilized JSX to return HTML elements within the component.

3. Organizing Components

   - Explored the benefits of organizing components into separate files.
   - Used ES6 import/export functionality for structuring component files.

4. Practice with List Component

   - Encouraged hands-on practice by creating a custom list component (`List`).
   - Emphasized component export for use in other files.
   - Implemented components in the main React code.

5. Folder Structure

   - Introduced the concept of a dedicated `components` folder for housing React components.
   - Highlighted the importance of maintaining an organized file structure.

6. Next Steps

   - Discussed the common structure of React apps, featuring an `index.js` file rendering the main `App` component.
   - Mentioned the possibility of further subdivision into subfolders for organization.

7. Practical Application
   - Provided a hands-on exercise for creating and structuring components in a real-world scenario.

## 287: React Components Practice

In this practice session, the goal was to separate the provided code into components, resulting in an `index.js` file rendering a custom `App` component. The main steps involved creating a `Heading.jsx` file to handle the heading logic and styling, and an `App.jsx` file to serve as the main component tree.

## 288: Javascript ES6 - Import, Export, and Modules

1. **Introduction**

   - Clarification on the `import` and `export` keywords in ES6.
   - Brief overview of the importance of modules in managing code complexity.

2. **Creating a Module: math.js**

   - Introduction of a simple JavaScript file, `math.js`, with a constant `pi` (3.1415962).
   - Exploration of how to export values from a module using `export default`.
   - Addition of `doublePi` and `triplePi` functions as non-default exports.

3. **Importing from math.js**

   - In `index.js`, importing values from `math.js` using `import`.
   - Demonstration of importing the default export (pi), and named exports (doublePi, triplePi).
   - Clarification on naming flexibility when importing the default export.

4. **Wildcard Import**

   - Introduction of wildcard import using the asterisk (`*`).
   - Usage of wildcard import to access all exports from `math.js`.
   - `import * as pi from "./math.js";`
   - Discussion on the drawbacks of wildcard imports, such as loss of clarity.

5. **Best Practices and Conclusion**

   - Encouragement for explicit imports rather than wildcard imports for better code clarity.
   - Mention of browser compatibility and the use of Babel for ES6 transpilation.
   - Recap of the benefits of modular code and separation of concerns.

6. **Closing Remarks**
   - Emphasis on the importance of modular code and the role of import/export in achieving modularity.
   - Preparation for the practice challenge in the next lesson.

## Node.js require vs ES6 import/export

- **Node.js `require`:**

  - Traditional, older way of importing modules.
  - Works in Node.js by default.
  - Used `require` to bring in functionalities.
  - Interoperable with CommonJS modules.
  - Dynamically loads modules when needed.
  - File extensions like `.js` are common.

- **ES6 `import/export`:**

  - Modern, cleaner syntax for module handling.
  - Supported in Node.js from version 12 onwards.
  - Uses `import` to bring in functionalities.
  - Encouraged for clarity and consistency.
  - Supports dynamic loading with `import()` using promises.
  - File extensions like `.mjs` or `"type": "module"` in `package.json`.

- **Key Points:**
  - `require` is older, `import` is newer and more standard.
  - ES6 `import` is considered cleaner and more readable.
  - Both can coexist, but `import` is preferred for modern projects.

## 289: Javascript ES6 Import, Export, and Modules Practice

1. **Challenge Overview**

   - Task: Import functions from `calculator.js` to calculate numbers for display.
   - Expected Result: Achieve the same display as shown in `Final.png` with calculated numbers.

2. **Alternative Import Methods**

   - Emphasis on understanding different import methods (separate imports vs. wildcard imports).
   - Encouragement to experiment with both methods to build confidence.

3. **Closing Notes**
   - Reiteration of the importance of understanding import/export for future React development.
   - Invitation to join the next lesson on setting up a local environment for React development.

## 290/291: Local Environment Setup for React Development

- View the necessary resources to get started
  - [Install nodejs](https://nodejs.org/en)
  - [Install Visual Studio Code](https://code.visualstudio.com/)
  - [Babeljs](https://babeljs.io/docs/editors)
  - [Sublime-Babel-VSCode](https://github.com/joshpeng/Sublime-Babel-VSCode)
  - [React docs](https://react.dev/)
    - [React community](https://react.dev/community)

## 292: Newer Versions of Node Troubleshooting

1. **Node Version Compatibility**

   - Acknowledgment: Some students may have higher Node versions than those in the videos.
   - Caution: Compatibility issues with listed dependencies in starting files may arise.

2. **Using npm-check-updates**

   - Package: Introduce `npm-check-updates` as a tool to update dependency versions.
   - Installation:
     ```bash
     npm install -g npm-check-updates
     ```
   - Updating Dependencies:
     ```bash
     ncu -u
     ```
   - Installing Updated Versions:
     ```bash
     npm install
     ```
   - Starting the Project:
     ```bash
     npm start
     ```

3. **Ensuring Compatibility**

   - Explanation: The process ensures compatibility by updating dependency versions.
   - Note: Run the commands in the specified order to prevent potential issues.

4. **npm-check-updates (ncu) in Action**

   - Demonstration: Walkthrough of using `ncu` to check and update dependencies.
   - Visual cue: Show how the tool modifies `package.json` to reflect updated versions.

5. **Running npm install and npm start**

   - Execution: After updating dependencies, emphasize the importance of running `npm install` and `npm start`.
   - Reminder: This ensures that the project is set up with the updated dependencies.

6. **Closing Note**
   - Encouragement: Encourage students to use the provided tool if they encounter compatibility issues.
   - Flexibility: Mention that using such tools showcases adaptability in a dynamic development environment.

## 293 Keeper App Project - Part 1 Challenge

**Project Overview:**

- **Project Name:** Keeper App Part 1
- **Components:** App, Header, Note, Footer

**Instructions:**

1. **Setup Project:**

   - Choose to work on CodeSandbox or set up locally using provided resources.
   - For local setup, unzip the provided project folder, navigate to it, and run `npm install`.
   - Start the server with `npm start` and access the app on `localhost:3000`.

2. **Component Hierarchy:**

   - Create a new React app with the following components:
     - `App`: Parent component.
     - `Header`: Displays the app title (e.g., "Keeper App").
     - `Note`: Represents a note with title and content.
     - `Footer`: Displays the current year dynamically.

3. **Header Component:**

   - Implement the `Header` component inside `App`.
   - Display the title of the app (e.g., "Keeper App").

4. **Note Component:**

   - Create a `Note` component with a title and content.
   - Include sample notes inside `App` using `Note` component.

5. **Footer Component:**

   - Implement the `Footer` component inside `App`.
   - Display the current year dynamically using JavaScript's date.

6. **Styling:**

   - Ensure the styling matches the provided sample completed app.
   - Inspect `styles.css` for targeted classes and HTML elements for styling.

7. **Customization (Optional):**

   - Customize styles or create your own `styles.css` if desired.
   - Experiment with different designs to make the app unique.

8. **Testing:**
   - Verify that the app functions as intended.
   - Check for proper rendering of components and dynamic year in the footer.

**Submission:**

- Once the challenge is completed, proceed to the next lesson for the solution walkthrough.
