import React, {PropTypes} from "react";
import inputPropTypes from "./inputPropTypes";
import FormElement from "./FormElement";

const SelectInput = ({name, label, placeholder, value, onChange, errors, defaultOption, options}) => {
  return (
    <FormElement name={name} label={label} placeholder={placeholder} errros={errors}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control">
        <option value="">{defaultOption}</option>
        {options.map((option) => {
          return (
            <option
              key={option.value}
              value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </FormElement>
  );
};

SelectInput.propTypes
  = Object.assign({}, {options: PropTypes.array.isRequired}, inputPropTypes);

export default SelectInput;
