import React, {PropTypes} from "react";
import ProjectCard from "./ProjectCard";

const ProjectListRow = ({projectRows}) => {
  return (
    <div className="row">
      {projectRows.map(project => <ProjectCard project={project}/>)}
    </div>
  );
};

ProjectListRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectListRow;
