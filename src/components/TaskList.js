import React from "react";
import Task from "./Task";

function TaskList({ tasks, categories }) {
  return (
    <div className="tasks">
      {tasks.map((item) => (
        <Task key={item.text} text={item.text} category={item.category} />
      ))}
    </div>
  );
}

export default TaskList;
