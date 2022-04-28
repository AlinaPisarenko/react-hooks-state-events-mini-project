import React, { useState } from "react";

function Task({ text, category }) {
  const [taskDone, setTaskDone] = useState(false);

  function handleClick() {
    setTaskDone(!taskDone);
  }
  if (taskDone) {
    return null;
  } else
    return (
      <div className="task">
        <div className="label">{category}</div>
        <div className="text">{text}</div>
        <button className="delete" onClick={handleClick}>
          X
        </button>
      </div>
    );
}

export default Task;
