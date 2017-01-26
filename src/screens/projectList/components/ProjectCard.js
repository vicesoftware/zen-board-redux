import React, {PropTypes} from "react";
import {Link} from "react-router";
import MemberList from "./MemberList";
import ConfirmationModal from "../../../components/common/modal/ConfirmationModal";

const ProjectCard = (props) => {
  const {project} = props;
  const onDeleteProject = props.onDeleteProject.bind(null, project.id);

  return (
    <div className="col-sm-4">
      <div className="card card-block">
        <h4 className="card-title">
          <Link to={"/projects/" + project.id}>{project.name}</Link>
        </h4>
        <p className="card-text">{project.description}</p>
        <div className="row">
          <div className="col-lg-8">
            <MemberList members={project.members}/>
          </div>
          <div className="col-lg-4 text-lg-right">
            <Link to={"/projects/edit/" + project.id}>
              <span className="icon icon-pencil" title="Edit"></span>
            </Link>
            <ConfirmationModal
              id="myModal"
              message="Are you sure you want to delete this project?"
              title="Delete Project"
              onYes={onDeleteProject}>
              <a href="#">
                <span className="icon icon-trash" title="Delete"></span>
              </a>
            </ConfirmationModal>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onDeleteProject: PropTypes.func.isRequired
};

export default ProjectCard;
