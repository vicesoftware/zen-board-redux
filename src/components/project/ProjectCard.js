import React, {PropTypes} from "react";
import {Link} from "react-router";
import MemberList from "./MemberList";

const ProjectCard = ({project}) => {
	return (
    <div className="col-sm-4">
      <div className="card card-block">
        <h4 className="card-title"><Link to={'/projects/' + project.id}>{project.name}</Link></h4>
        <p className="card-text">{project.description}</p>
        <MemberList members={project.members}/>
      </div>
    </div>
	);
};

ProjectCard.propTypes = {
	name: PropTypes.object.isRequired
};

export default ProjectCard;
