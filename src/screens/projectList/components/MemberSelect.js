import React, {PropTypes} from "react";
import FormElement from "../../../components/common/forms/FormElement";
import Select from "react-select";

const MemberSelect = ({users, onChange, value, onBlur}) => {
  const usersOptions = users.map(
    user => ({
      label: user.firstName + " " + user.lastName,
      value: user.id
    }));

  // Hack because of a possible blug in React select or Redux Forms
  // https://github.com/JedWatson/react-select/issues/1129
  function handleBlur(proxy) {
    // swallowing the synthetic even here because it seems to fix the bug
    // referenced above.
    onBlur();
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
        value={value}
        onBlur={handleBlur}/>
    </FormElement>
  );
};

MemberSelect.propTypes = {
  users: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  members: PropTypes.array
};

export default MemberSelect;
