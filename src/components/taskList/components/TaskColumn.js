import React, {PropTypes} from "react";

const TaskColumn = ({tasks, state}) => {
  return (
    <div className="col-lg-4">
      <h5 className="text-muted">{state}</h5>
      {tasks && tasks.map(task => (
        <div className="panel panel-default">
          <div className="panel-body">
            <h4 class="card-title">
              <a key={task.id} href="#">{task.title}</a>
            </h4>
            <p>{task.description.substring(1, 20)
            + (task.description.length > 20 && "...")}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

TaskColumn.propTypes = {
  // name: PropTypes.string.isRequired
};

export default TaskColumn;
