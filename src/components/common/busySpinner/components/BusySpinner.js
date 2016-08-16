import React from "react";

const BusySpinner = () => {
  return (
    <div>
      <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-muted"></i>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default BusySpinner;
