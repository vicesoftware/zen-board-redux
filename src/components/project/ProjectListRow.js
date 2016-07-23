import React, {PropTypes} from "react";
import {Link} from "react-router";
import MemberList from "./MemberList";

const ProjectListRow = ({project}) => {
	return (
		<tr>
			<td><Link to={'/projects/' + project.id}>{project.name}</Link></td>
			<td><MemberList members={project.members}/></td>
		</tr>
	);
};

ProjectListRow.propTypes = {
	project: PropTypes.object.isRequired
};

export default ProjectListRow;
