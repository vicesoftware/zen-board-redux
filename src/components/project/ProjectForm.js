import React, {PropTypes} from "react";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const ProjectForm = ({project, onSave, onChange, loading, errors, users}) => {
  return (
    <form>
      <TextInput
        name="name"
        label="Name"
        value={project.title}
        onChange={onChange}
        error={errors}/>
      <SelectInput
        name="members"
        label="Members"
        onChange={onChange}
        error={errors}
        options={users}/>
    </form>
  );
};

ProjectForm.propTypes = {
  // project, onSave, onChange, loading, errors
  project: PropTypes.object.isRequired,
  // onSave: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
  // loading: PropTypes.bool.isRequired,
  errors: PropTypes.object
};

export default ProjectForm;
