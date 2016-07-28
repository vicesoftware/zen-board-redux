import React, {PropTypes} from "react";
import ProjectCard from "./ProjectCard";

const ProjectListRow = ({projectRows, onDeleteProject}) => {
  return (
    <div className="row">
      {projectRows.map(
        project => <ProjectCard key={project.id} project={project} onDeleteProject={onDeleteProject}/>)}
    </div>
  );
};

ProjectListRow.propTypes = {
  projectRows: PropTypes.array.isRequired,
  onDeleteProject: PropTypes.func.isRequired
};

export default ProjectListRow;
