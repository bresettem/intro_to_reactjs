import React from "react";
import Login from "./Login";

let isLoggedIn = false;

const currentTime = new Date().getHours();
// function renderConditionally() {
//   if (isLoggedIn) {
//     // or isLoggedIn === true
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }
function App() {
  // return <div className="container"> {renderConditionally()}</div>;

  return (
    <div className="container">
      {
        // isLoggedIn ? <h1>Hello</h1> : <Login />
        // currentTime > 12 ? <h1>Why are you still working?</h1> : null
        // currentTime > 12 && <h1>Why are you still working?</h1> // does the same thing as before.
        isLoggedIn && currentTime > 12 ? <h1>Hello</h1> : <Login />
      }
    </div>
  );
}

export default App;
