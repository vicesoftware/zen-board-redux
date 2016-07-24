import React, {PropTypes} from "react";
import {Link} from "react-router";
import MemberList from "./MemberList";

const ProjectListRow = ({project}) => {
	return (
		// <tr>
		// 	<td><Link to={'/projects/' + project.id}>{project.name}</Link></td>
		// 	<td><MemberList members={project.members}/></td>
		// </tr>
  <div className="card card-block">
    <h4 className="card-title"><Link to={'/projects/' + project.id}>{project.name}</Link></h4>
    <p className="card-text">{project.description}</p>
    <MemberList members={project.members}/>
  </div>
	);
};

ProjectListRow.propTypes = {
	project: PropTypes.object.isRequired
};

export default ProjectListRow;
