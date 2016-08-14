import delay from "./delay";
import UUID from "uuid-js";
import userApi from "./stubUserApi";
const projects = require("./projects.json");

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return UUID.create(1);
};

class CourseApi {
  static getProjects(by) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let filteredResult = null;

        if (!by) {
          filteredResult = projects;
        } else if (by.id) {
          filteredResult
            = projects.filter(project => project.id === by.id);
        } else if (by.userId) {
          filteredResult
            = projects.filter(project => project.createdBy === by.userId);
        }

        userApi.getUsers()
          .then(users => {
            filteredResult = filteredResult.map(addUsers);

            resolve(Object.assign([], filteredResult));

            function addUsers(result) {
              return Object.assign({}, result,
                  { members: result.members.map(mapUsers)}
                  );
            }

            function mapUsers(member) {
              return users.find(user => user.id === member.id);
            }
          });



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
          //The server would generate ids and watchHref's for new projectList in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          project.id = generateId(project);
          projects.push(project);
        }

        resolve(project);
      }, delay);
    });
  }

  static deleteProject(projectId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfProjectToDelete = projects.findIndex(project => {
          project.projectId == projectId;
        });
        projects.splice(indexOfProjectToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
