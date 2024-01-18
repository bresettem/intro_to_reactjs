import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <div>
      <img
        className="imgs"
        alt="random image 1"
        src="https://picsum.photos/200?random=1"
      />
      <img
        className="imgs"
        alt="random image 2"
        src="https://picsum.photos/200?random=2"
      />
      <img
        className="imgs"
        alt="random image 3"
        src="https://picsum.photos/200?random=3"
      />
      <img className="imgs" alt="random image 4" src={img + "?random=4"} />
    </div>
  </div>,
  document.getElementById("root")
);
