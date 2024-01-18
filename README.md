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
  - [282 Javascript Expressions in JSX Practice](#282-javascript-expressions-in-jsx-practice)
- [283 JSX Attributes \& Styling React Elements](#283-jsx-attributes--styling-react-elements)

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

## 281: Javascript Expressions in JSX & ES6 Template Literals

Difference between expressions and statements. **Expressions** will be evaluated to a value and will equal something while **statements** are asking to do something.

Statements are not allowed inside JSX. Only expressions

```
const name = "brese";
ReactDOM.render(

  <div>
    <h1>Hello {name}!</h1>
    <p>My lucky number is {
        if (name === "brese") {
            return 7;
        } else {
            return 12;
        }}.
    </p>
  </div>,
  document.getElementById("root")
);
```

Expressions are only allowed such as

```
const name = "brese";
<h1>Hello {name}!</h1>
```

[Expressions vs Statements video](https://www.youtube.com/watch?v=WVyCrI1cHi8&list=PL-xu4i_QDSxcoDNeh8rx5-pHCCTOg0XsI&ab_channel=Codexpanse)

## 282 Javascript Expressions in JSX Practice

1. Create a react app from scratch.
2. It should display 2 paragraph HTML elements.
3. The paragraphs should say:

| Example                | Intended Behavior     |
| ---------------------- | --------------------- |
| Created by YOURNAME.   | Created by Angela Yu. |
| Copyright CURRENTYEAR. | Copyright 2019.       |

# 283 JSX Attributes & Styling React Elements

Introduces styling the elements.

```
index.js
<h1 className="heading">My Favorite Foods</h1>
```

```
styles.css
.heading {
  color: red;
}
```
