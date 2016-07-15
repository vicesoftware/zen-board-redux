import React, {PropTypes} from 'react';

const ProjectForm = ({project, onSave, onChange, loading, errors}) => {
	return (
		<form>
			<h1>Manage Project</h1>
			<TextInput
				name="name"
				label="Name"
				value={project.title}
				onChange={onChange}
				error={errors.title}/>
		</form>
	);
}

ProjectForm.propTypes = {
	// project, onSave, onChange, loading, errors
	project: PropTypes.object.isRequired,
	onSave: PropTypes.function.isRequired,
	onChange: PropTypes.function.isRequired,
	loading: PropTypes.bool.isRequired,
	errors: PropTypes.object,
}
;

export default ProjectForm;