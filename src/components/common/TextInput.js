import React, {PropTypes} from "react";
import FormElement from "./FormElement";
import inputPropTypes from "./inputPropTypes";

const TextInput = ({name, label, placeholder, value, onChange, errors}) => {
	return (
    <FormElement label={label} errors={errors} name={name}>
			<input
				type="Text"
				name={name}
				className="form-control"
				placeholder={placeholder}
				value={value}
				onChange={onChange}/>
		</FormElement>
	);
};

TextInput.propTypes = inputPropTypes;

export default TextInput;
