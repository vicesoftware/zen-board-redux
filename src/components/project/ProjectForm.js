import React, {PropTypes} from "react";
import TextInput from "../common/TextInput";
import FormElement from "../common/FormElement";
import Select from "react-select";

const ProjectForm = ({project, onSave, onChange, errors, users}) => {
  let usersOptions = users.map(user => ({label: user.text, value: user.value}));
  return (
    <form>
      <TextInput
        name="name"
        label="Name"
        value={project.name}
        onChange={onChange}
        error={errors}/>
      <FormElement name="members" label="Members">
        <Select
          name="members"
          options={usersOptions}
          multi={true}
          simpleValue
          disabled={false}
          onChange={onChange}
          value={project.members}/>
      </FormElement>
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
  errors: PropTypes.object
};

export default ProjectForm;
