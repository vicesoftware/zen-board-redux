import delay from './delay';

const projects = [
	{
		id: "04d1a05f-d511-45a6-8fe1-544224ea5657",
		name: "Bar Stool"
	},
	{
		id: "8736fa7d-9563-41f9-982e-603e7fedd94b",
		name: "Bottle Opener"
	},
	{
		id: "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
		name: "Beach Chair"
	}
];

function replaceAll(str, find, replace) {
	return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (project) => {
	return replaceAll(project.title, ' ', '-');
};

class CourseApi {
	static getAllProjects() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], projects));
			}, delay);
		});
	}

	static saveCourse(project) {
		project = Object.assign({}, project); // to avoid manipulating object passed in.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minCourseTitleLength = 1;
				if (project.title.length < minCourseTitleLength) {
					reject(`Title must be at least ${minCourseTitleLength} characters.`);
				}

				if (project.id) {
					const existingCourseIndex = projects.findIndex(a => a.id == project.id);
					projects.splice(existingCourseIndex, 1, project);
				} else {
					//Just simulating creation here.
					//The server would generate ids and watchHref's for new projects in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					project.id = generateId(project);
					project.watchHref = `http://www.pluralsight.com/projects/${project.id}`;
					projects.push(project);
				}

				resolve(project);
			}, delay);
		});
	}

	static deleteCourse(projectId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfCourseToDelete = projects.findIndex(project => {
					project.projectId == projectId;
				});
				projects.splice(indexOfCourseToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default CourseApi;
