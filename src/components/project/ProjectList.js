import React, {PropTypes} from "react";
import ProjectListRow from "./ProjectListRow";
import BusyIndicator from "../common/BusyIndicator";

const ProjectList = ({projectRows, isBusy, deleteProject}) => {
  return (
    <div>
      {!isBusy && projectRows.length > 0
      && projectRows.map((projectRow, index) =>
        <ProjectListRow key={index} projectRows={projectRow}/>
        )
      }
      {isBusy && <BusyIndicator/>}
    </div>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;
