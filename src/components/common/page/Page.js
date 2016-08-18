import React, {PropTypes} from "react";
import BusyIndicator from "../busySpinner/components/BusySpinner";
import errors from "../errors";

const {ErrorPanel} = errors.components;

const Page = ({title, isBusy, children}) => {
	return (
    <div className="container-fluid">
      <h3>{title}</h3>
      <ErrorPanel/>
      {isBusy ? <BusyIndicator/> : children}
    </div>
	);
};

Page.propTypes = {
  title: PropTypes.string,
  isBusy: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export default Page;
