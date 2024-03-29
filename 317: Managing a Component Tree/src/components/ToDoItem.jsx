import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li key={props.id} id={props.id}>
        {props.item}
      </li>
    </div>
  );
}

export default ToDoItem;
