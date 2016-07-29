import React, {PropTypes} from "react";
import ProjectList from './ProjectList';
import Page from "../../common/Page";

const ProjectPageLayout = ({isBusy, projectRows, deleteProject, addProject}) => {
  return (
    <Page isBusy={isBusy}>
      <div className="row">
        <div className="col-lg-10">
          <ProjectList
            projectRows={projectRows}
            onDeleteProject={deleteProject}/>
        </div>
        <div className="col-lg-2 ">
          <button
            className="btn btn-success btn-sm"
            onClick={addProject}
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
  deleteProject: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
};

export default ProjectPageLayout;
