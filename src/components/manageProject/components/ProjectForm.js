import React, {PropTypes} from "react";
import TextInput from "../../common/TextInput";
import MemberSelect from "../../projects/components/MemberSelect";

const ProjectForm = ({project, onSave, onChange, errors, users}) => {

  return (
    <form>
      <TextInput
        name="name"
        label="Name"
        value={project.name}
        onChange={onChange}
        error={errors}/>
      <MemberSelect
        users={users}
        onChange={onChange}
        members={project.members}/>
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
