import React, { useState } from "react";

function App() {
  // const [fName, setFName] = useState("");
  // const [lName, setLName] = useState("");

  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });
  // function updateFName(event) {
  //   const firstName = event.target.value;
  //   setFName(firstName);
  // }

  // function updateLName(event) {
  //   const lastName = event.target.value;
  //   setLName(lastName);
  // }

  function handleChange(event) {
    // Complex
    // const newValue = event.target.value;
    // const inputName = event.target.name;

    // console.log("newValue", newValue); // f
    // console.log("inputName", inputName); // fName

    // setFullName((prevValue) => {
    //   if (inputName === "fName") {
    //     return {
    //       fName: newValue,
    //       lName: prevValue.lName,
    //     };
    //   } else if (inputName === "lName") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: newValue,
    //     };
    //   }
    // });

    // Simple
    const { value, name } = event.target;

    console.log("value", value); // f
    console.log("name", name); // fName

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
    event.preventDefault();
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
