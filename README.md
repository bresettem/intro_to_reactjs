## Intro to React.js

This repository contains the course material for [The Complete 2024 Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp). The course is divided into several sections, each of which is contained in a separate directory.

**Create React App(CRA) has been discontinued and reccomend using Next.js instead**

_React and ReactDOM have be updated to the latest version due to errors_

`npm i --save react@latest react-dom@latest`

## Table of Contents

- [Intro to React.js](#intro-to-reactjs)
- [Table of Contents](#table-of-contents)
- [279: Introduction to JSX and Babel](#279-introduction-to-jsx-and-babel)
- [280: JSX Code Practice](#280-jsx-code-practice)

## 279: Introduction to JSX and Babel

This section introduces JSX and Babel.

**JSX** is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.

```
ReactDOM.render(
  <div>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);
```

**Babel** in react operates as a transpiler, converting the latest JavaScript syntax into a version that can run in all environments. This is done by converting the latest JavaScript syntax into an older version that is supported by all browsers.

## 280: JSX Code Practice

1. Create a react app from scratch.
2. It should display a h1 heading.
3. It should display an unordered list (bullet points).
4. It should contain 3 list elements.
