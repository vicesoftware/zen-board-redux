import React, {PropTypes} from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const ProjectForm = ({project, onSave, onChange, errors, users}) => {
  return (
    <form>
      <TextInput
        name="name"
        label="Name"
        value={project.name}
        onChange={onChange}
        error={errors}/>
      <SelectInput
        name="members"
        label="Members"
        onChange={onChange}
        error={errors}
        options={users}
        value={project.members && project.members[0].username}/>
      <br/>
      <button className="btn btn-primary" onClick={onSave}>Save</button>
    </form>
  );
};

ProjectForm.propTypes = {
  project: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default ProjectForm;
