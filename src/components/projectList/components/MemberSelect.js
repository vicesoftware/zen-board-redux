import React, {PropTypes} from "react";
import FormElement from "../../common/forms/FormElement";
import Select from "react-select";

const MemberSelect = ({users, onChange, members, value}) => {
  const usersOptions = users.map(
    user => ({
      label: user.firstName + " " + user.lastName,
      value: user.id
    }));

  return (
    <FormElement name="members" label="Members">
      <Select
        name="members"
        options={usersOptions}
        multi
        simpleValue
        disabled={false}
        onChange={onChange}
        value={value}/>
    </FormElement>
  );
};

MemberSelect.propTypes = {
  users: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  members: PropTypes.array
};

export default MemberSelect;
