import React, {PropTypes} from "react";
import MemberSelect from "../../projectList/components/MemberSelect";
import Page from "../../../components/common/page/Page";
import TextInput from "../../../components/common/forms/TextInput";
import {reduxForm} from 'redux-form';

class AddEditProject extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    // const name = (project) ? project.name : "";
    // const members = (project) ? project.members : [];
    const {
      fields: {name, members},
      handleSubmit,
      isBusy,
      users,
      onSave,
      selectedMembers
    } = this.props;

    return (
      <Page isBusy={isBusy}>
        <div className="row">
          <div className="col-lg-6 col-lg-offset-3">
            <h4 className="text-muted">Add Project</h4>
            <div className="card card-block">
              <form onSubmit={handleSubmit(onSave)}>
                <TextInput
                  type="text"
                  label="Name"
                  placeholder="Enter a project name"
                  {...name}/>
                <MemberSelect
                  users={users}
                  placeholder="Select project members"
                  selectedMembers={selectedMembers}
                  {...members}/>
                <br/>
                <br/>
                <button className="btn btn-primary" type="submit">Save</button>
              </form>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

AddEditProject.propTypes = {
  project: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  users: PropTypes.array.isRequired,
  isBusy: PropTypes.bool
};

export const fields = ["name", "members"];

const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 30) {
    errors.name = 'Must be 30 characters or less';
  }
  if (!values.members) {
    errors.members = 'Required';
  }

  return errors;
}

export default reduxForm({
    form: "addEditProjectForm",
    fields,
    validate
  }
)(AddEditProject);
