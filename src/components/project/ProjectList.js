import React, {PropTypes} from "react";
import ProjectListRow from "./ProjectListRow";
import BusyIndicator from "../common/BusyIndicator";

const ProjectList = ({projects, isBusy, deleteProject}) => {
	console.log("isBusy: ", isBusy);

	return (
		<div>
			<table className="table">
				<thead>
				<tr>
					<th>Name</th>
					<th>Members</th>
				</tr>
				</thead>
				<tbody>
				{!isBusy &&projects.length > 1
					&& projects.map(project =>
							<ProjectListRow key={project.id} project={project}/>
						)
				}
				</tbody>
			</table>
			{isBusy && <h4><BusyIndicator/></h4>}
		</div>
	);
};

ProjectList.propTypes = {
	projects: PropTypes.array.isRequired
};

export default ProjectList;
