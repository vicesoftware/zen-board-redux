import React, {PropTypes} from "react";
import Page from "../../../components/common/page/Page";

const ProjectScreen = ({isBusy, children}) => {
  return (
    <Page isBusy={isBusy}>
      <ul className="nav nav-pills">
        <li>
          <a className="nav-link active" href="#">Tasks</a>
        </li>
        <li>
          <a className="nav-link" href="#">Discussions</a>
        </li>
        <li>
          <a className="nav-link" href="#">Calendar</a>
        </li>
        <li>
          <a className="nav-link" href="#">Files</a>
        </li>
      </ul>
      {children}
    </Page>  );
};

ProjectScreen.propTypes = {
  children: PropTypes.object
};

export default ProjectScreen;
