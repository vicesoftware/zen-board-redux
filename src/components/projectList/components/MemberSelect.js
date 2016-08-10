import React, {PropTypes} from "react";
import FormElement from "../../common/forms/FormElement";
import Select from "react-select";

const MemberSelect = ({users, onChange, members}) => {
  const usersOptions = users.map(
    user => ({
      label: user.firstName + " " + user.lastName,
      value: user.id
    }));

  let membersAsDelimetedString = "";
  if (members) {
    membersAsDelimetedString = users
      .filter(user => members.find(member => member.id === user.id))
      .map(user => user.id)
      .join(",");
  }

	return (
    <FormElement name="members" label="Members">
      <Select
        name="members"
        options={usersOptions}
        multi
        simpleValue
        disabled={false}
        onChange={onChange}
        value={membersAsDelimetedString}/>
    </FormElement>
	);
};

MemberSelect.propTypes = {
	users: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired,
	members: PropTypes.array
};

export default MemberSelect;
