import delay from './delay';
import UUID from 'uuid-js';

const projects = [
	{
		id: "04d1a05f-d511-45a6-8fe1-544224ea5657",
		name: "Bar Stool",
		members: [
			{
				username: "abandi"
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
				username: "rvice"
			},
			{
				username: "prashantht"
			}
		]
	},
	{
		id: "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
		name: "Beach Chair",
		members: [
			{
				username: "abandi"
			},
			{
				username: "rvice"
			},
			{
				username: "prashantht"
			}
		]
	}
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
	return UUID.create(1);
};

class CourseApi {
	static getProjects(by) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
			  var filteredResult = null;

        if (!by) {
          filteredResult = projects;
        } else {
          filteredResult = projects.filter(project => project.id === by.id)
        }

				resolve(Object.assign([], filteredResult));
			}, delay);
		});
	}

	static saveProject(project) {
		project = Object.assign({}, project); // to avoid manipulating object passed in.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minProjectNameLength = 1;
				if (project.name.length < minProjectNameLength) {
					reject(`Name must be at least ${minProjectNameLength} characters.`);
				}

				if (project.id) {
					const existingCourseIndex = projects.findIndex(a => a.id == project.id);
					projects.splice(existingCourseIndex, 1, project);
				} else {
					//Just simulating creation here.
					//The server would generate ids and watchHref's for new projects in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					project.id = generateId(project);
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
