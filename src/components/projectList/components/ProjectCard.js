import React, {PropTypes} from "react";
import {Link} from "react-router";
import MemberList from "./MemberList";

const ProjectCard = ({project, onDeleteProject}) => {
  return (
    <div className="col-sm-4">
      <div className="card card-block">
        <h4 className="card-title">
          <Link to={'/projects/' + project.id}>{project.name}</Link>
        </h4>
        <p className="card-text">{project.description}</p>
        <div className="row">
          <div className="col-lg-8">
            <MemberList members={project.members}/>
          </div>
          <div className="col-lg-4 text-lg-right">
            <Link to={'/projects/edit/' + project.id}>
              <span className="icon icon-pencil" title="Edit"></span>
            </Link>
            <a href="#" onClick={() => onDeleteProject(project.id)}>
              <span className="icon icon-trash" title="Delete"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectCard;
