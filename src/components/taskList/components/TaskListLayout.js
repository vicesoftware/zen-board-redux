import React, {PropTypes} from "react";
import TaskColumn from "./TaskColumn";

const TaskListLayout = ({tasks}) => {
  return (
    <div className="row">
      {tasks && <TaskColumn tasks={tasks["To do"]} state="To do"/>}
      {tasks && <TaskColumn tasks={tasks["In progress"]} state="In progress"/>}
      {tasks && <TaskColumn tasks={tasks["done"]} state="Done"/>}
    </div>
  );
};

TaskListLayout.propTypes = {
  // name: PropTypes.string.isRequired
};

export default TaskListLayout;
