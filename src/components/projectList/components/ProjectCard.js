import React, {PropTypes} from "react";
import {Link} from "react-router";
import MemberList from "./MemberList";

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
            <a href="#" data-toggle="modal" data-target="#myModal">
              <span className="icon icon-trash" title="Delete"></span>
            </a>
          </div>
        </div>

        <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
             aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title" id="myModalLabel">Delete Project</h4>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this project?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={onDeleteProject}>Yes</button>
              </div>
            </div>
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
