import React, {PropTypes} from "react";
import TextInput from "../../common/forms/TextInput";
import MemberSelect from "../../projectList/components/MemberSelect";

const ProjectForm = ({project, onSave, onChange, errors, users}) => {
  const name = (project) ? project.name : "";
  const members = (project) ? project.members : [];

  return (

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
  );
};

ProjectForm.propTypes = {
  project: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object,
  users: PropTypes.array.isRequired
};

export default ProjectForm;
