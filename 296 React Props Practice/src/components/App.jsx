import React from "react";
import Card from "./Card";
import contacts from "../contacts.js";

function solution() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>;
      <Card
        name={contacts[0].name}
        image={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        image={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        image={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

function mySolution() {
  let name, image, phone, email;
  let cards = [];
  for (let i = 0; i < contacts.length; i++) {
    name = contacts[i].name;
    image = contacts[i].imgURL;
    phone = contacts[i].phone;
    email = contacts[i].email;
    cards.push(
      <Card key={i} name={name} image={image} phone={phone} email={email} />
    );
  }

  return (
    <div>
      <h1 className="heading">My Contacts</h1>;{cards}
    </div>
  );
}
function App() {
  return solution();
}

export default App;
