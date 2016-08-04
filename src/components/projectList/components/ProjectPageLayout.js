import React, {PropTypes} from "react";
import ProjectList from "./ProjectList";
import Page from "../../common/Page";

const ProjectPageLayout = ({isBusy, projectRows, onDeleteProject, onAddProject}) => {
  return (
    <Page isBusy={isBusy}>
      <div className="row">
        <div className="col-lg-10">
          <ProjectList
            projectRows={projectRows}
            onDeleteProject={onDeleteProject}/>
        </div>
        <div className="col-lg-2 ">
          <button
            className="btn btn-success btn-sm"
            onClick={onAddProject}
            title="Add project">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </Page>
  );
};

ProjectPageLayout.propTypes = {
  isBusy: PropTypes.bool,
  projectRows: PropTypes.array.isRequired,
  onDeleteProject: PropTypes.func.isRequired,
  onAddProject: PropTypes.func.isRequired
};

export default ProjectPageLayout;
