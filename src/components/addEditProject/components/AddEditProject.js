import React, {PropTypes} from "react";
import TextInput from "../../common/forms/TextInput";
import MemberSelect from "../../projectList/components/MemberSelect";
import Page from "../../common/page/Page";

const AddEditProject = ({project, onSave, onChange, errors, users, isBusy}) => {
  const name = (project) ? project.name : "";
  const members = (project) ? project.members : [];

  return (
    <Page isBusy={isBusy}>
      <div className="row">
        <div className="col-lg-6 col-lg-offset-3">
          <h4 className="text-muted">Add Project</h4>
          <div className="card card-block">
            <form>
              <TextInput
                name="name"
                label="Name"
                value={name}
                onChange={onChange}
                error={errors}/>
              <MemberSelect
                users={users}
                onChange={onChange}
                members={members}/>
              <br/>
              <br/>
              <button className="btn btn-primary" onClick={onSave}>Save</button>
            </form>
          </div>
        </div>
      </div>
    </Page>
  );
};

AddEditProject.propTypes = {
  project: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  users: PropTypes.array.isRequired,
  isBusy: PropTypes.bool
};

export default AddEditProject;
