import React, {PropTypes} from "react";
import ProjectCard from "./ProjectCard";

const ProjectListRow = ({projectRows, onDeleteProject}) => {
  return (
    <div className="row">
      {projectRows.map(
        project => <ProjectCard project={project} onDeleteProject={onDeleteProject}/>)}
    </div>
  );
};

ProjectListRow.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectListRow;
