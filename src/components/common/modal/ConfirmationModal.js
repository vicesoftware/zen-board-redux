import React, {PropTypes} from "react";

const ConfirmationModal = ({id, title, message, onYes, children}) => {
  return (
    <span>
      <span data-toggle="modal" data-target={"#" + id}>
        {children}
      </span>
      <div className="modal fade" id={id} tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
           aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title text-xs-left" id="myModalLabel">{title}</h4>
            </div>
            <div className="modal-body text-xs-center">
              {message}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={onYes}>Yes</button>
            </div>
          </div>
        </div>
      </div>
    </span>
  );
};

ConfirmationModal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onYes: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default ConfirmationModal;
