import delay from './delay';
import UUID from 'uuid-js';

const projects = [
	{
		id: "04d1a05f-d511-45a6-8fe1-544224ea5657",
		name: "Bar Stool",
		members: [
			{
				username: "ashishs"
			},
			{
				username: "prashantht"
			}
		]
	},
	{
		id: "8736fa7d-9563-41f9-982e-603e7fedd94b",
		name: "Bottle Opener",
		members: [
			{
				username: "henryg"
			},
			{
				username: "hvice"
			}
		]
	},
	{
		id: "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
		name: "Beach Chair",
		members: [
			{
				username: "henryg"
			},
			{
				username: "benr"
			},
			{
				username: "ashishb"
			}
		]
	}
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
	return UUID.create(1);
};

class CourseApi {
	static getAllProjects() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], projects));
			}, delay);
		});
	}

	static saveProject(project) {
		project = Object.assign({}, project); // to avoid manipulating object passed in.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minProjectTitleLength = 1;
				if (project.title.length < minProjectTitleLength) {
					reject(`Title must be at least ${minProjectTitleLength} characters.`);
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
