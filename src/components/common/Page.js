import React, {PropTypes} from "react";
import BusyIndicator from "./BusyIndicator";

const Page = ({title, isBusy, children}) => {
	return (
    <div>
      <h1>{title}</h1>
      {isBusy ? <BusyIndicator/> : children }
    </div>
	);
};

Page.propTypes = {
  title: PropTypes.string.isRequired,
  isBusy: PropTypes.bool
};

export default Page;
