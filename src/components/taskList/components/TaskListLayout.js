import React, {PropTypes} from "react";

const TaskListLayout = ({tasks}) => {
  return (
    <ul>
      {tasks && tasks.map(task => (
        <li key={task.id}>
          <a href="#">{task.title}</a>
        </li>
      ))}
    </ul>
  );
};

TaskListLayout.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default TaskListLayout;
