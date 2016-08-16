import React, {PropTypes} from "react";
import ProjectListRow from "./ProjectListRow";
import BusyIndicator from "../../common/busySpinner/components/BusySpinner";

const ProjectList = ({projectRows, isBusy, onDeleteProject}) => {
  return (
    <div>
      {!isBusy && projectRows.length > 0
      && projectRows.map((projectRow, index) =>
        <ProjectListRow
          key={index}
          projectRows={projectRow}
          onDeleteProject={onDeleteProject}/>
        )
      }
      {isBusy && <BusyIndicator/>}
    </div>
  );
};

ProjectList.propTypes = {
  projectRows: PropTypes.array.isRequired,
  isBusy: PropTypes.bool,
  onDeleteProject: PropTypes.func.isRequired
};

export default ProjectList;
