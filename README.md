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
  - [293: Keeper App Project - Part 1 Challenge](#293-keeper-app-project---part-1-challenge)
  - [294: Keeper App Project - Part 1 Solution](#294-keeper-app-project---part-1-solution)
  - [295: React Props](#295-react-props)
  - [296: React Props Practice](#296-react-props-practice)
  - [297: React DevTools](#297-react-devtools)
  - [298: Mapping Data to Components](#298-mapping-data-to-components)
  - [299: Mapping Data to Components Practice](#299-mapping-data-to-components-practice)
  - [300: Javascript ES6 Map/Filter/Reduce](#300-javascript-es6-mapfilterreduce)
  - [301: Javascript ES6 Arrow Functions](#301-javascript-es6-arrow-functions)
  - [302: Keeper App Project - Part 2](#302-keeper-app-project---part-2)
  - [304: Conditional Rendering Practice](#304-conditional-rendering-practice)
  - [305: State in React - Declarative vs. Imperative Programming](#305-state-in-react---declarative-vs-imperative-programming)
  - [306: React Hooks - useState](#306-react-hooks---usestate)
  - [307: useState Hook Practice](#307-usestate-hook-practice)
  - [308: Javascript ES6 Object \& Array Destructuring](#308-javascript-es6-object--array-destructuring)
  - [309: Javascript ​ES6 Destructuring Challenge Solution](#309-javascript-es6-destructuring-challenge-solution)
  - [310: Event Handling in React](#310-event-handling-in-react)
  - [311: React Forms](#311-react-forms)
  - [312: Class Components vs. Functional Components](#312-class-components-vs-functional-components)
  - [313: Changing Complex State](#313-changing-complex-state)
  - [Challenge Overview](#challenge-overview)
  - [Solution Approach](#solution-approach)

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

## 293: Keeper App Project - Part 1 Challenge

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

## 294: Keeper App Project - Part 1 Solution

**Project Overview:**

- _Project Name:_ Keeper App
- _Components:_ App, Header, Note, Footer
- [Solution](https://l1pp6.csb.app/)

  **Solution Walkthrough:**

**1. Setup Project:**

- Choose CodeSandbox or set up locally (unzip project folder, run `npm install`, then `npm start`).

**2. Component Hierarchy:**

- Created a new React app with components: `App`, `Header`, `Note`, `Footer`.

**3. Header Component:**

- Implemented `Header` component inside `App`.
- Displayed the app title in an `h1` element.

**4. Note Component:**

- Created a `Note` component with title and content.
- Included sample notes inside `App` using `Note` component.
- Applied styling by adding the `note` class to the wrapping `div` element.

**5. Footer Component:**

- Implemented `Footer` component inside `App`.
- Displayed the current year dynamically using JavaScript's `Date` object.
- Applied styling based on the targeted classes in `styles.css`.

**6. Styling:**

- Ensured the styling matched the provided sample completed app.
- Checked targeted classes and HTML elements in `styles.css` for styling.

**7. Customization (Optional):**

- Experimented with custom styles or created a new `styles.css` for customization.

**8. Testing:**

- Verified proper rendering of components and dynamic year in the footer.

**Conclusion:**

- Checked the final website against the sample completed app to ensure similarity.
- Encouraged playing around with the code for better understanding.
- Prepared for the next lesson on React properties.

## 295: React Props

**React Components and Props Overview**

In this lesson, we delved into the concept of React components and explored the usage of props to make components more dynamic and reusable.

1. **Components:**

   - React components allow us to create modular and reusable pieces of UI.
   - We started by identifying a use case for components, particularly when dealing with repetitive code.

2. **Props (Properties):**

   - Props are a way to pass custom data to a React component.
   - We compared the concept of attributes in HTML to properties (props) in React.
   - Props are passed to components as an object, allowing customization of the component's behavior and content.

3. **Working with Props:**

   - Props are accessed within a component using the `props` object.
   - We demonstrated how to pass and access props in a React component using examples.

4. **Reusability:**
   - Leveraged the power of props to create a reusable `Card` component.
   - Demonstrated how different instances of the `Card` component can be created with unique data.

**Next Steps:**

- The understanding of components and props is foundational for building more complex React applications.
- The upcoming lesson will provide a challenge to solidify your understanding and apply these concepts in a practical scenario.

## 296: React Props Practice

In this lesson, we applied our knowledge of React components and props to complete a series of challenges and build a contact list app. Let's walk through the solution step by step.

**Step 1: Apply CSS Styles**

- Reviewed the `styles.css` file to find appropriate class names.
- Applied styles to `App.jsx` to match the desired appearance.
  - Used class "name" for the contact name.
  - Applied class "circle-image" for a circular avatar image.
  - Added class "info" to paragraphs for consistent styling.

**Step 2: Extract Contact Card as a Reusable Component**

- Created a new file, `Card.jsx`, inside the components folder.
- Extracted the contents of the contact card into the Card component.
- Exported the Card component as the default export.

**Step 3: Use Props to Render Default Beyonce Card**

- In `App.jsx,` imported the Card component.
- Passed custom data (name, image, tel, email) to the Card component as props.
- Updated Card component to use props for dynamic content.

**Step 4: Use contacts.js to Populate Cards**

- Use the provided contacts.js filled with an array of contact objects.
- Exported the contacts array as the default export.
- In App.jsx, imported the contacts array.
- Used array elements to dynamically populate the Card components.

**Conclusion:**

- Successfully created a contact list app with reusable Card components.
- Applied styling and dynamic data using React props.
- Gained experience in structuring components and passing data between them.

## 297: React DevTools

In this lesson, we learned how to further modularize a React app by separating components and using the React Developer Tools for debugging.

**1. Extracting Components:**

- Recognized opportunities for creating reusable components, e.g., Avatar component for circular images.
- Demonstrated the process of creating a new Avatar component and integrating it into the Card component.
- Explored passing props through multiple levels of components.

**2. Using React Developer Tools:**

- Explored the React Developer Tools within CodeSandbox, providing insights into the component tree and props.
- Showed how to inspect props of individual components using React DevTools.
- Recommended installing the React Developer Tools browser extension for enhanced functionality.

**3. Debugging with React DevTools:**

- Illustrated how React DevTools help identify and fix issues, such as incorrect prop names.
- Emphasized the importance of inspecting components and props for efficient debugging.
- Introduced the ability to modify props in the DevTools for testing and debugging.

**4. Challenge - Creating Detail Component:**

- Presented a challenge to create a Detail component to replace repetitive paragraph tags.
- Emphasized the use of props and React DevTools to ensure proper integration.

**5. Component Reusability:**

- Highlighted the power of React in creating a palette of reusable components.
- Demonstrated how components can be easily imported and customized with different props.

**6. Previewing Components in Other Websites:**

- Showcased the ability of React DevTools to inspect and understand React components on other websites.

**Conclusion:**

- Explored the benefits of modularization and component reuse in React.
- Utilized React DevTools to enhance the debugging and development process.
- Gained insights into creating a structured component tree for easier management.

## 298: Mapping Data to Components

In this lesson, we explored the technique of mapping components in React to eliminate repetitive code and dynamically generate components based on data.

**1. Introduction to Mapping Components:**

- Identified the repetitive code in App.jsx when creating Card components for each contact.
- Introduced the concept of mapping components to handle arrays of data more efficiently.

**2. Using the `map` Function:**

- Demonstrated the use of the `map` function in JavaScript for iterating over an array.
- Showed how to apply the `map` function to the `contacts` array, creating a new Card component for each contact.

**3. Creating a Function for Mapping:**

- Introduced the concept of passing a function into the `map` function to customize the creation of components.
- Created the `createCard` function to generate Card components based on contact data.
  ```jsx
   function createCard(contact) {
      return (
         <Card
            key={contact.id}
            id={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
         />
      );
      }
   ...
   {contacts.map(createCard)}
  ```

**4. Handling Unique Keys:**

- Addressed the importance of providing a unique `key` prop for each dynamically created component.
- Used the `id` property from the `contacts` array as the `key` prop to resolve the warning.

**5. Challenge - Displaying ID as a Paragraph:**

- Presented a challenge to display the `id` property of each contact as a paragraph above the Card component.
- Emphasized the need to use a separate prop for accessing `id` as the `key` prop is not accessible.

**6. Debugging with React DevTools:**

- Explored debugging challenges, highlighting the limitations of accessing the `key` prop directly.
- Encouraged the use of React DevTools for inspecting components and understanding props.

**7. Conclusion:**

- Understood the benefits of mapping components for dynamic rendering.
- Learned how to create a function for mapping components and customize their properties.
- Explored the importance of unique `key` props and addressed potential challenges.

## 299: Mapping Data to Components Practice

**References**

- [Mapping Data to Components Practice](https://codesandbox.io/p/sandbox/mapping-components-practice-6fkfr)
  - [Solution](https://codesandbox.io/p/sandbox/mapping-components-practice-completed-37h04)
- [Emoji Meanings](https://www.emojimeanings.net/list-smileys-people-whatsapp)
- [Description List Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

**React Challenge - Emoji Dictionary**

In this challenge, you were tasked with applying the knowledge of mapping components in React to create a beautiful emoji dictionary. Here's a summary of the key steps and solutions:

**Challenge Overview:**

1. Create a new component called `Entry.jsx` to represent the repeated structure of each emoji entry.
2. Add props (`emoji`, `name`, `description`) to make the `Entry` component reusable.
3. Import the `emojipedia` array from `emojipedia.js` in the `App.js` file.
4. Map through the `emojipedia` array and render the `Entry` components dynamically.

**Solution Steps:**

1. **Create `Entry.jsx`:**

   - Create a new component named `Entry.jsx` and move the repeated structure (div with class `term`) into it.
   - Export the `Entry` component.

2. **Add Props to `Entry` Component:**

   - Add props (`emoji`, `name`, `description`) to the `Entry` component.
   - Replace hardcoded data with props inside the `Entry` component.

3. **Import `emojipedia` in `App.js`:**

   - Export the `emojipedia` array from `emojipedia.js`.
   - Import the `emojipedia` array into `App.js`.

4. **Map through `emojipedia` and Render `Entry` Components:**
   - Use the `map` function on the `emojipedia` array in the `App.js` file.
   - Create a function (`createEntry`) to handle the creation of `Entry` components.
   - Pass the function as an argument to the `map` function, allowing dynamic rendering.
   - Utilize props (`emojiTerm.id`, `emojiTerm.emoji`, `emojiTerm.name`, `emojiTerm.meaning`) for each entry.

**Final Outcome:**

- The `Entry` component is now a reusable component with props for emoji data.
- The `emojipedia` array is dynamically mapped to render multiple `Entry` components.

**Learning Points:**

- Applied the concept of mapping components in React to dynamically render content.
- Extracted repeated structures into a separate component for better organization and reusability.
- Used props to pass data dynamically and achieve a clean, efficient solution.

## 300: Javascript ES6 Map/Filter/Reduce

**References**

- [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [FindIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findindex)
- [Substring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
- [Javascript ES6 Map/Filter/Reduce]()
- [Map/Filter/Reduce Practice](https://codesandbox.io/p/sandbox/mapfilterreduce-h7sm6)
  - [Solution](https://codesandbox.io/p/sandbox/mapfilterreduce-completed-3sm6u)

In this lesson, we delved into array functions in JavaScript, exploring the `map`, `filter`, `reduce`, `find`, and `findIndex` functions. Here's a summary of the key points:

**1. Introduction to `map` Function:**

- Demonstrated the use of the `map` function to loop through an array and create a new array by applying a specified function to each item.
- Compared the concise syntax of `map` with the traditional use of `forEach` for a similar purpose.

  ```jsx
  // Create a new array by doing something with each item in an array.
  const newNumbers = numbers.map(function (x) {
    return x * 2;
  });
  console.log("newNumbers", newNumbers); // [ 6, 112, 4, 96, 10 ]
  ```

**2. `filter` Function:**

- Introduced the `filter` function, which creates a new array by retaining only the items that meet a specified condition.
- Showed how to filter an array based on a condition, such as keeping numbers greater than 10.

  ```jsx
  // Filter - Create a new array by keeping the items that return true.
  const filteredNumbers = numbers.filter(function (num) {
    return num > 10;
  });

  console.log("filteredNumbers", filteredNumbers); // [56, 48]
  ```

**3. `reduce` Function:**

- Explained the `reduce` function, used to accumulate values and perform an operation on each item in an array.
- Demonstrated how to sum up all the items in an array using `reduce`.

  ```jsx
  //Reduce - Accumulate a value by doing something to each item in an array.
  let newNumber = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
  });
  console.log("reduce", newNumber); // 114
  ```

  **4. `find` and `findIndex` Functions:**

- Introduced the `find` function, which retrieves the first item in an array that satisfies a specified condition.
- Explored the `findIndex` function, which returns the index of the first item that matches a condition.

  ```jsx
  //Find - find the first item that matches from an array.

  let findNumber = numbers.find(function (num) {
    return num > 10;
  });
  console.log("findNumber", findNumber); // 56

  //FindIndex - find the index of the first item that matches.
  let findIndex = numbers.findIndex(function (num) {
    return num > 10;
  });
  console.log("findIndex", findIndex); // 1
  ```

**5. Challenge - Manipulating Emoji Data:**

- Presented a challenge involving the manipulation of an array of emoji objects (`emojipedia`).
- Required using the `map` function to extract and truncate the `meaning` property to a maximum of 100 characters.

**6. Solution to Challenge:**

- Provided a step-by-step solution to the challenge, using the `map` function to create a new array with truncated meanings.

  ```jsx
  const reduced = emojis.map(function (emojiEntry) {
    return emojiEntry.meaning.substring(0, 100);
  });

  console.log("reduced", reduced);

  //["“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing spo",
  //  "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenm",
  // "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The ";]
  ```

**7. Conclusion and Next Lesson Preview:**

- Emphasized understanding over memorization for array functions.

## 301: Javascript ES6 Arrow Functions

**References:**

- [ES6 Arrow Functions Practice](https://codesandbox.io/p/sandbox/es6-arrow-functions-y8jhk)
  - [Solution](https://codesandbox.io/p/sandbox/es6-arrow-functions-completed-gbtv7)
- [Arrow Functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

**1. Arrow Function Syntax:**

- Arrow functions provide a concise and shorter way of writing JavaScript functions.
- The basic syntax involves replacing the `function` keyword with a fat arrow (`=>`).
- For a single-line expression, the curly braces and `return` keyword can be omitted.

**2. Single Parameter and No Parameters:**

- If a function has a single parameter, the parentheses around the parameter can be omitted.
- For functions with no parameters, or more than one parameter, parentheses are required.

**3. Pros and Cons:**

- Arrow functions can enhance code readability and brevity.
- Consideration should be given to team familiarity, project requirements, and individual comfort with the syntax.
- Arrow functions are commonly used in React, especially within array functions like `map`, `filter`, and `reduce`.

**4. Challenge: Convert Functions to Arrow Functions:**

- Provided a challenge to convert existing functions (map, filter, reduce, find, find index) to arrow functions.
- Demonstrated the process of simplifying the syntax, removing unnecessary elements, and maintaining clarity.

**5. Applying Arrow Functions in React Code:**

- Applied arrow functions in a React component (`App.jsx`), specifically within the `createEntry` function used in mapping emoji terms to props.
- Showed the step-by-step conversion, emphasizing the elimination of unnecessary syntax for concise code.

**6. Additional Resources:**

- Referenced a Mozilla article on arrow functions for a deeper understanding of their history and usage.

In the next lesson, we will return to React coding after leveling up our JavaScript skills with arrow functions. Stay tuned for more React development insights and practices.

## 302: Keeper App Project - Part 2

**References**

- [Keeper App Part 2](https://codesandbox.io/p/sandbox/keeper-app-part-2-starting-b5w06?file=%2Fsrc%2Fnotes.js)
  - [Solution](https://codesandbox.io/p/sandbox/keeper-app-part-2-completed-4dr3p?file=%2Fsrc%2Fcomponents%2FApp.js%3A11%2C7-17%2C10)

In this session, we applied several concepts learned in previous lessons to enhance our Keeper app. Here's a summary of the key steps and concepts covered:

**1. Introduction:**

- Reviewed concepts such as props, mapping components, React devtools, arrow functions, map, filter, and reduce.

**2. Challenge: Render Notes Dynamically:**

- The goal was to render all notes from the `notes.js` array dynamically as separate `Note` components in the `Keeper` app.

**3. Updating Note Component:**

- Modified the `Note` component to accept custom props (`title` and `content`) for dynamic content rendering.

  ```jsx
  function App() {
    return (
      <div>
        <Header />
        {notes.map((noteItem) => (
          <Note
            key={noteItem.key}
            title={noteItem.title}
            content={noteItem.content}
          />
        ))}

        <Footer />
      </div>
    );
  }
  ```

**4. Leveraging Arrow Functions and Mapping:**

- Utilized arrow functions and the `map` function to render multiple notes dynamically.
- Exported the `notes` array from `notes.js` and imported it into `App.js`.
  - `import notes from "../notes.js";`

**5. Simplifying Code with Arrow Functions:**

- Demonstrated how to simplify the code using arrow functions for concise mapping.
- Discussed the importance of using a unique `key` prop for each dynamically rendered component.

**6. Additional Concepts Mentioned:**

- Emphasized the debugging benefits of React devtools for inspecting props.

**7. Future Topics:**

- Mentioned upcoming lessons covering user inputs, handling forms, dynamic addition of new notes, note deletion, and more.

**8. Next Lesson: Conditional Rendering:**

- Previewed the next lesson on conditional rendering, indicating the continuous progression of React development skills.

**9. Challenges and Review:**

- Encouraged viewers to review the code, complete the challenge, and prepare for upcoming lessons.

** 303: React Conditional Rendering with the Ternary Operator & AND Operator **

**React Login Flow - Conditional Rendering**

In this lesson, we focused on creating a login flow in React and explored techniques for conditionally rendering different components based on user authentication status. Here's a summary of the key points covered:

**1. Introduction to Conditional Rendering:**

- Discussed the need for showing different components based on whether the user is logged in or not.
- Introduced the concept of conditional rendering in React.

**2. Challenge Setup:**

- Set up a simple scenario with a boolean variable `isLoggedIn` indicating the user's login status.

**3. Initial Approach - Using a Function:**

- Demonstrated an initial approach using a function (`renderConditionally`) to conditionally render components based on the value of `isLoggedIn`.

**4. Component Extraction:**

- Emphasized the importance of creating separate components for reusability and single responsibility.
- Created `Login` component to encapsulate the login form.
- Created `Input` component to handle input fields with props for type and placeholder.

**5. Ternary Operator for Conditional Rendering:**

- Introduced the ternary operator (`condition ? expr1 : expr2`) as an alternative to traditional `if-else` statements.
  - ` CONDITION ? DO IF TRUE : DO IF FALSE`
  - ` isCloudy === true ? bringUmbrella() : bringSunscreen()`
- Showed how to use the ternary operator for inline conditional rendering based on the value of `isLoggedIn`.

**6. Using the AND Operator:**

- Explained how the logical AND (`&&`) operator can be used for concise conditional rendering.
- Illustrated that the right-hand side expression is evaluated only if the left-hand side condition is true.

  - (Expression && Expression)

    ````jsx
    let x = 5;
    (x > 3 && x < 7) // true true

          let x = 1;
          (x > 3 && x < 7) // false. Does not even check if the other expression is true or not. As long as one is false, then the whole statement is false.
          ```

    **7. Practical Examples:**
    ````

- Applied the ternary operator and AND operator to practical scenarios, such as displaying a message based on the current time.

**8. Challenge Preview:**

- Introduced the upcoming challenge for viewers to practice using the ternary operator and the AND operator in React.

**9. Conclusion:**

- Encouraged viewers to apply the concepts learned in the next lesson's challenge.

**References**

- [React Conditional Rendering](https://codesandbox.io/p/sandbox/conditional-rendering-yfdes?file=%2Fsrc%2Findex.js%3A6%2C1)
  - [Solution](https://codesandbox.io/p/sandbox/conditional-rendering-completed-ovu1v)
- [Single responsibility principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)

  The **Single Responsibility Principle (SRP)** is a programming concept emphasizing that a module should have one clear responsibility to a specific user or group. It discourages coupling and supports maintainability.

  **Definition:**

  - A module should be responsible for one actor.
  - Actor: A group (stakeholders or users) requiring a change in the module.

  **Robert C. Martin's Expression:**

  - "A class should have only one reason to change."
  - Clarification: Martin advocates gathering things that change for the same reasons and separating those that change for different reasons.

  **Role-Centric Perspective:**

  - Martin argues the principle focuses on roles or actors.
  - Different roles (e.g., accountant, database administrator) should be handled by separate modules.

  **Responsibility Defined:**

  - A responsibility is a reason to change.
  - A class or module should have only one reason to be changed or rewritten.

  **Example Scenario:**

  - Consider a module compiling and printing a report.
  - If the report's content and format change, these are different responsibilities.
  - SRP suggests separating these aspects into distinct classes or modules.

  **Importance for Robustness:**

  - Focusing a class on a single concern enhances its robustness.
  - Example: If there's a change in the report compilation process, the risk of breaking printing code is reduced with separate classes.

- [Conditional (ternary) operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [Inline If with Logical && Operator](https://legacy.reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator)

## 304: Conditional Rendering Practice

1. **Change Button Text:**

   - Pass `userIsRegistered` as a prop to the `Form` component.
   - Inside the `Form` component, use conditional rendering to show "Login" if `props.isRegistered` is true, otherwise show "Register".

     ```jsx
     // Inside App.js
     <Form isRegistered={userIsRegistered} />

     // Inside Form.jsx
     <button>{props.isRegistered ? 'Login' : 'Register'}</button>
     ```

2. **Conditional Rendering for Confirm Password Input:**

   - Pass `userIsRegistered` as a prop to the `Form` component.
   - Use the logical AND operator (`&&`) to conditionally render the Confirm Password input only if `props.isRegistered` is false.

     ```jsx
     // Inside Form.jsx
     {
       props.isRegistered === false && (
         <input
           type="password"
           name="confirmPassword"
           placeholder="Confirm Password"
         />
       );
     }
     ```

     Alternatively, a shorter form using the NOT operator (`!`) and the AND operator (`&&`):

     ```jsx
     // Inside Form.jsx
     {
       !props.isRegistered && (
         <input
           type="password"
           name="confirmPassword"
           placeholder="Confirm Password"
         />
       );
     }
     ```

     ```jsx
     // Inside App.jsx
     let userIsRegistered = false;

     function App() {
       return (
         <div className="container">
           <Form isRegistered={userIsRegistered} />
         </div>
       );
     }
     ```

## 305: State in React - Declarative vs. Imperative Programming

- **Concept of State in React:**

  - In React, the user interface (UI) is a function of the state of the application.

    - ```UI = f(state

      ```

    - )```

  - Analogy: Ice and water are the same substance (component) but appear differently based on the temperature (state).
  - Changes in the state trigger changes in the UI.
  - Example: To-do list app with a state variable `isDone` to track if a to-do item is completed.

- **Declarative Programming:**

  - In React, UI changes are declared based on the state.
  - Example: Conditional styling using `textDecoration` based on the value of `isDone`.

    ```jsx
    const strikeThrough = { textDecoration: "line-through" };

    // Inside render method
    <p style={isDone ? strikeThrough : null}>Buy milk</p>;
    ```

- **Imperative Programming:**

  - Directly instructing the DOM to change properties using imperative code.
  - Example: Using vanilla JavaScript to change the style of an element.

    ```jsx
    // Imperative approach
    document.getElementById("root").style.textDecoration = "line-through";
    ```

  - Example: Using event listeners to manually handle changes.

    ```jsx
    // Imperative event handling
    function strike() {
      document.getElementById("root").style.textDecoration = "line-through";
    }
    function App() {
      return <button onClick={strike}>Change to strike through</button>;
    }
    ```

- **Introduction to Hooks:**
  - Hooks are functions in React that allow interaction with the state.
  - One commonly used hook is `useState`.
  - State changes trigger re-renders in React.
  - Example: Introduction to hooks in the next lesson.

## 306: React Hooks - useState

- **Introduction to State and React Hooks:**

  - State is crucial for making interactive React applications.
  - React Hooks, like `useState`, enable the management of state in functional components.
  - State allows the dynamic updating of the user interface based on changing values.

- **Setting up a Simple Counter App:**

  - The goal is to create a counter that increments and decrements.
  - Initial code has a hardcoded number; the objective is to make it dynamic.

- **Understanding `useState` Hook:**

  - `useState` is a hook from the React module.
  - To use `useState`, it must be called inside a functional component.
  - It returns an array with the current state value and a function to update the state.
    - `const [count, setCount] = useState(0);`

- **Implementing `useState` in the Counter App:**

  - Replace the hardcoded value with the `useState` hook.
  - Destructure the array returned by `useState` to access the state value and update function.
    ```jsx
    // Destructuring Example
    const [red, green, blue] = [9, 132, 227];
    console.log(blue);
    ```
  - Initial value and update function are conventionally named (`count` and `setCount`).

- **Updating State with Buttons:**

  - Create functions (`increase` and `decrease`) that use `setCount` to update the state.
  - Buttons trigger these functions, modifying the displayed count.

- **Challenge: Enhancing the Counter App:**

  - Create a button to decrease the count, enabling a full range of counter functionality.
  - Use the `useState` hook to manage and update the state.

    ```jsx
    import React, { useState } from "react";

    function App() {
      const [count, setCount] = useState(0);

      function increase() {
        setCount(count + 1);
      }

      function decrease() {
        setCount(count - 1);
      }

      return (
        <div className="container">
          <h1>{count}</h1>
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
        </div>
      );
    }

    export default App;
    ```

- **Summary and Practice:**
  - Understanding the basics of `useState` is essential for React development.
  - Practice by recreating the app from scratch to solidify comprehension.
  - Explore and experiment with the provided code sandbox.
  - Look forward to the upcoming challenge in the next lesson.

**References**

- [Use State Practice](https://codesandbox.io/p/sandbox/usestate-hook-wd3vs)
  - [Solution](https://codesandbox.io/p/sandbox/usestate-hook-completed-ylxqj)
- [Use State Docs](https://react.dev/reference/react/useState)

## 307: useState Hook Practice

- **Practice with `useState` Hook:**

  - Challenge: Update Time Display

    - **Part 1: On Button Click**

      - Fetch the current time using `new Date().toLocaleTimeString()`.
      - Use `useState` to manage the time state in the functional component.
      - Display the time in the React component, initially and on button click.

        - **Solution:**

          ```jsx
          import React, { useState } from "react";

          function App() {
            const now = new Date().toLocaleTimeString();
            const [time, setTime] = useState(now);

            function updateTime() {
              const newTime = new Date().toLocaleTimeString();
              setTime(newTime);
            }

            return (
              <div className="container">
                <h1>{time}</h1>
                <button onClick={updateTime}>Get Time</button>
              </div>
            );
          }

          export default App;
          ```

    - **Part 2: Auto-Refresh Every Second**

      - Utilize `setInterval` to trigger an update to the time every second.
      - Ensure the component dynamically refreshes without the need to click the button.

        - **Solution:**

          ```jsx
          import React, { useState } from "react";

          function App() {
            const now = new Date().toLocaleTimeString();
            const [time, setTime] = useState(now);

            function updateTime() {
              const newTime = new Date().toLocaleTimeString();
              setTime(newTime);
            }

            setInterval(updateTime, 1000);

            return (
              <div className="container">
                <h1>{time}</h1>
                <button onClick={updateTime}>Get Time</button>
              </div>
            );
          }

          export default App;
          ```

- **Implementation in App.jsx:**

  - Fetch the current time and log it to verify functionality.
  - Use `useState` to manage the time state.
  - Create an `updateTime` function triggered by the button click.
  - Utilize `setInterval` to auto-refresh the time every second.

- **Key Concepts and Syntax:**

  - `useState` hook for managing state in functional components.
  - `setInterval` for executing functions at specified intervals.
  - Destructuring to extract values from arrays and objects.

- **Challenge Resolution Tips:**

  - Pay attention to the placement and order of code.
  - Ensure correct usage of `useState` and destructuring in React components.
  - Utilize functions like `setTime` to update state.
  - Test the application to observe dynamic time updates.

- **Practice and Muscle Memory:**

  - Revisit the challenge and attempt it independently for better understanding.
  - Consistent practice aids in mastering new syntax and concepts.

- **Conclusion:**

  - Successfully completing challenges enhances proficiency.
  - Practice and experimentation foster a deeper understanding of React.
  - Embrace challenges as learning opportunities.

- **Next Steps:**
  - Continue exploring React concepts and hooks.
  - Engage in additional challenges to solidify knowledge.
  - Stay curious and build more interactive React applications.

**References**

- [useState Hook Practice](https://codesandbox.io/p/sandbox/usestate-hook-practice-k0g69)
  - [Solution](https://codesandbox.io/p/sandbox/usestate-hook-practice-completed-t99f4)

## 308: Javascript ES6 Object & Array Destructuring

- **Destructuring in JavaScript ES6:**

  - Understanding the syntax and usage.
  - Destructuring objects and arrays.

- **Challenge: Destructuring Practice:**

  - Goal: Render stats from practice.js in a table without changing existing code.
  - Challenge Instructions:
    - Uncomment the code below the challenge line.
    - Use destructuring to render brand, top speed, and top color in a table.
    - Achieve rendering as shown in the provided example.
    - Errors in the console are unrelated to the challenge.

- **Destructuring Basics Recap:**

  - Destructuring Arrays:
    - `const [item1, item2] = array;`
    - Unique variable names inside the array.
    - Alternative variable names using `:` syntax.
    - Default values for array items.
  - Destructuring Objects:
    - `const { prop1, prop2 } = object;`
    - Unique variable names matching object properties.
    - Alternative variable names using `:` syntax.
      ```jsx
      const { name, sound } = cat;
      const { name: catName, sound: catSound } = cat;
      console.log("catName", catName);
      ```
    - Default values for object properties.
    - Destructuring nested objects.

- **Examples with data.js:**

  - Using `data.js` to practice destructuring.
  - Destructuring an array of objects (`animals`) and logging values.
  - Destructuring an object (`cat`) and customizing variable names.
  - Providing default values in case of undefined properties.
  - Destructuring nested objects (`feedingRequirements`).

- **Example: Destructuring with a Function:**

  - Creating a function (`useAnimals`) returning an array.
  - Destructuring the output array into variables.
  - Logging values obtained from the function.

- **Understanding Set State Function:**

  - Imagining how `useState` might work.
  - Hypothetical example: `useAnimals` function returning an array.

    ```jsx
    function useAnimals(animal) {
      return [
        animal.name,
        function () {
          console.log(animal.sound);
        },
      ];
    }
    export { useAnimals };
    ```

- **Challenge Solution:**

  - Complete the challenge by uncommenting and modifying code in `index.js`.
  - Utilize destructuring to render stats in a table as instructed.
  - Ensure that the provided example outcome is achieved.

- **Conclusion:**
  - Destructuring is a powerful feature in modern JavaScript.
  - Provides concise syntax for working with arrays and objects.
  - Practice with destructuring enhances coding skills.

**References**

- [ES6 Restructuring](https://codesandbox.io/p/sandbox/es6-destructuring-ide4v)
- [Destructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

## 309: Javascript ​ES6 Destructuring Challenge Solution

- Importing the `cars` constant from `practice.js`.
- Destructuring the array into variables for each car (Honda and Tesla).

  ```javascript
  import cars from "./practice";

  const [honda, tesla] = cars;
  ```

- Further destructuring to access nested properties like `speedStats` and `colorsByPopularity`.
- Renaming variables for clarity.

```javascript
const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  colorsByPopularity: [hondaTopColor],
} = honda;

const {
  colorsByPopularity: [teslaTopColor],
} = tesla;
```

- Achieving the goal of rendering stats in a table without modifying existing code.

**References**

- [ES6 Restructuring Solution](https://codesandbox.io/p/sandbox/es6-destructuring-completed-zvjn9)

## 310: Event Handling in React

- **Handling Events in React:**

  - Understanding how to detect and respond to user interactions in React.
  - Utilizing concepts like conditional rendering, inline styling, mouse events, and state management.
  - Implementing a practical example: changing button color on mouse over and mouse out.

- **Challenge: Change Button Color on Hover:**

  - Challenge: Add `onMouseOver` and `onMouseOut` attributes to the button to change its background color on hover.
  - Utilizing event handling, inline styling, and state management.

- **Solution:**

  - Applying `onMouseOver` and `onMouseOut` attributes to the button, triggering functions `handleMouseOver` and `handleMouseOut`.
  - Managing a state variable `isMousedOver` to determine the background color.
  - Using `useState` to handle state changes.
  - Conditional rendering with inline styles to dynamically change the background color.
  - Demonstrating the result: button turns black on hover and white on mouse out.

        ```jsx
        import React, { useState } from "react";

        function App() {
          const [headingText, setHeadingText] = useState("Hello");
          const [isMouseOver, setMouseOver] = useState(false);
          function handleClick() {
            setHeadingText("Submitted.");
          }

          function handleMouseOver() {
            setMouseOver(true);
          }

          function handleMouseOut() {
            setMouseOver(false);
          }

          return (
            <div className="container">
              <h1>{headingText}</h1>
              <input type="text" placeholder="What's your name?" />

              <button
                style={{
                  backgroundColor: isMouseOver ? "black" : "white",
                }}
                onClick={handleClick}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                Submit
              </button>
            </div>
          );
        }

        export default App;
        ```

    **References**

- [Event Handling in React](https://codesandbox.io/p/sandbox/event-handling-in-react-2tltl)
  - [Solution](https://codesandbox.io/p/sandbox/event-handling-in-react-completed-61rti)
- [HTML Event Attributes](https://www.w3schools.com/tags/ref_eventattributes.asp)

## 311: React Forms

1. **Handling Input Changes:**

   - Use the `onChange` event on the input element to detect changes in its value.
   - Create a function, e.g., `handleChange`, to handle the change event.
   - Log the new value using `event.target.value`.
   - Use the `useState` hook to manage the state of the input.

2. **Controlled Components:**

   - Connect the input value to a state variable, e.g., `name`, making it a controlled component.
   - Update the state with the typed value using the `setName` function.

   ```jsx
   const [name, setName] = useState("");

   function handleChange(event) {
     console.log(event.target.value);
     setName(event.target.value);
   }
   ```

3. **Form Submission:**
   - Add an `onSubmit` event to the form, pointing to a function, e.g., `handleClick`.
   ```jsx
   <button type="submit" onClick={handleClick}>
     Submit
   </button>
   ```

- In the `handleClick` function, prevent the default form submission behavior using `event.preventDefault()`.

  ```jsx
  const [headingText, setHeading] = useState("");

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
  }
  ```

4. **Updating Heading Text:**

   - Use another state variable, e.g., `headingText`, to manage the text displayed in the `<h1>` tag.
   - Set the heading text using the `setHeading` function when the submit button is clicked.

5. **Form Structure:**

   - Place the input and submit button inside a `<form>` element.
   - Ensure the input value is bound to the state variable and update with each keystroke.

6. **Preventing Page Refresh:**

   - When handling the form submission, call `event.preventDefault()` to prevent the default form behavior (page refresh).

7. **Solution Code:**

   ```jsx
   function App() {
     const [name, setName] = useState("");
     const [headingText, setHeading] = useState("");

     function handleChange(event) {
       console.log(event.target.value);
       setName(event.target.value);
     }

     function handleClick(event) {
       setHeading(name);
       event.preventDefault();
     }

     return (
       <div className="container">
         <h1>Hello {headingText}</h1>
         <form onSubmit={handleClick}>
           <input
             onChange={handleChange}
             type="text"
             placeholder="What's your name?"
             value={name}
           />
           <button type="submit">Submit</button>
         </form>
       </div>
     );
   }
   ```

**Summary:**

- The example demonstrates handling form input, controlling components, and preventing page refresh on form submission.
- Utilizing React's `useState` hook for state management and event handling.
- A form structure with input and submit button inside, connected to state variables.
- Clear separation of concerns with specific functions (`handleChange`, `handleClick`) for event handling.
- Effective use of controlled components to manage input state.

**References**

- [React Forms Practice](https://codesandbox.io/p/sandbox/react-forms-23oen)
  - [Solution](https://codesandbox.io/p/sandbox/react-forms-completed-4vy2h?file=%2Fsrc%2Fcomponents%2FApp.jsx%3A3%2C1-32%2C2)
- [React Forms](https://react.dev/reference/react-dom/components/form)

## 312: Class Components vs. Functional Components

**Background:**

- React initially offered two approaches for adding state to components: functional components and class components.
- Class components required the use of the `class` keyword and extending `React.Component`.

**Class Components:**

- Example of a class component:

  ```jsx
  import React from "react";

  class ClassComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0,
      };
      this.increase = this.increase.bind(this);
    }

    increase() {
      this.setState({ count: this.state.count + 1 });
    }

    render() {
      return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.increase}>+</button>
        </div>
      );
    }
  }

  export default ClassComponent;
  ```

- Classes were commonly used for state management in the past.

**Introduction of Hooks:**

- React introduced hooks in 2018 as a way to simplify state management and lifecycle logic.
- Hooks are recommended for new code due to improved clarity and reduced boilerplate.

**Functional Components with Hooks:**

Example of a functional component using hooks:

```jsx
import React, { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default FunctionalComponent;
```

- Hooks simplify state management, eliminating the need for classes.

**Transition from Classes to Hooks:**

- React team recommends using hooks for new code. [Source](https://react.dev/reference/react/PureComponent#alternatives)
- Hooks can be used alongside classes, but the community is gradually adopting hooks for cleaner code.
- Legacy code may still use class components, but newer projects tend to leverage hooks exclusively.

**References**

- [State: A Component's Memory](https://react.dev/learn/state-a-components-memory)
- [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
- [Hooks](https://react.dev/reference/react/hooks)
- [Class Components Vs Hooks Practice](https://codesandbox.io/p/sandbox/class-components-vs-hooks-m2lzf)

## 313: Changing Complex State

In this lesson, we explore ways to manage more complex state in React, specifically focusing on scenarios involving JavaScript objects. The goal is to create a form where user input (first name and last name) is stored in a stateful manner.

## Challenge Overview

- Start with a simple form with two inputs (first name and last name) and a submit button.

- The challenge is to manage the state of these inputs independently, ensuring that the first name persists when the last name is added.
  ```jsx
  <div className="container">
    <h1>Hello</h1>
    <form>
      <input name="fName" placeholder="First Name" />
      <input name="lName" placeholder="Last Name" />
      <button>Submit</button>
    </form>
  </div>
  ```

## Solution Approach

1. **Individual State for Each Input:**

   - Create state variables (`fName`, `lName`) for first name and last name using `useState`.

   - Use separate functions (`setFName`, `setLName`) to update the state of each input.

   - Bind each input value and `onChange` event to the corresponding state variable and function.

2. **Complex State with Object:**

   - Refactor to use a single state variable (`fullName`) that holds an object.

   - Update the `onChange` event to call a generic `handleChange` function.

   - Inside `handleChange`, use the `name` attribute from the input to identify which part of the object to update.

   - Utilize the functional form of `setFullName` to correctly update the state based on the previous value.

   - Ensure the input values are controlled components by setting their values to corresponding object properties.

**Code (Complex):**

```jsx
import React, { useState } from "react";

function App() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  function updateFName(event) {
    const firstName = event.target.value;
    setFName(firstName);
  }

  function updateLName(event) {
    const lastName = event.target.value;
    setLName(lastName);
  }

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    console.log("newValue", newValue); // f
    console.log("inputName", inputName); // fName

    setFullName((prevValue) => {
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName,
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue,
        };
      }
    });
  }
  return (
    <div class="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <input
        type="text"
        placeholder="First Name"
        value={fName}
        onChange={updateFName}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lName}
        onChange={updateLName}
      />
    </div>
  );
}

export default App;
```

**Code (Simple):**

```jsx
import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
export default App;
```

- Remember: Avoid accessing the event directly inside stateful setters to prevent synthetic event issues.

**Notes**

- The challenge demonstrates transitioning from managing individual input states to a more unified approach using a single state object.

- Using object destructuring in the `handleChange` function simplifies code and enhances readability.

- Understanding the limitations of synthetic events is crucial to avoid potential issues when updating state.

**Conclusion**

Mastering state management in React involves choosing the appropriate strategy based on the complexity of the application. Handling more complex states with objects provides a scalable and maintainable solution.

**References**

- [Changing Complex State Practice](https://codesandbox.io/p/sandbox/changing-complex-state-ruz1e)
  - [Solution](https://codesandbox.io/p/sandbox/changing-complex-state-completed-3hyn7)
- [React event object(Synthetic Event)](https://react.dev/reference/react-dom/components/common#react-event-object)
