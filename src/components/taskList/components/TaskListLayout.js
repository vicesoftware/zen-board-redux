import React, {PropTypes} from "react";
import TaskColumn from "./TaskColumn";

const TaskListLayout = ({tasks}) => {
  return (
    <div className="row">
      {tasks && <TaskColumn key="todo" tasks={tasks["To do"]} state="To do"/>}
      {tasks && <TaskColumn key="inprogress" tasks={tasks["In progress"]} state="In progress"/>}
      {tasks && <TaskColumn key="done" tasks={tasks["done"]} state="Done"/>}
    </div>
  );
};

TaskListLayout.propTypes = {
  tasks: PropTypes.object
};

export default TaskListLayout;
