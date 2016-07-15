import React, {PropTypes} from 'react';

const TextInput = (name, label, placeholder, value, onChange, error) => {
	const formGroupClass = "form-group" + (error & "  has-error");
	return (
		<div className={formGroupClass}>
			<label htmlFor={name}>{label}</label>
			<input
				type="Text"
				name={name}
				className="form-control"
				placeholder={placeholder}
				value={value}
				onChange={onChange}/>
			
		</div>
	);
}

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.function.isRequired,
	error: PropTypes.string
};

export default TextInput;