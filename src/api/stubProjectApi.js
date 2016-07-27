import delay from './delay';
import UUID from 'uuid-js';
import userApi from "./stubUserApi";

const projects = [
  {
    id: "04d1a05f-d511-45a6-8fe1-544224ea5657",
    name: "Bar Stool",
    members: [
      {
        id: "01548079-205a-4367-848c-3a4155ad31a6"
      },
      {
        id: "42503252-3979-4df1-afef-c5365a3d542e"
      }
    ]
  },
  {
    id: "8736fa7d-9563-41f9-982e-603e7fedd94b",
    name: "Bottle Opener",
    members: [
      {
        id: "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
      },
      {
        id: "42503252-3979-4df1-afef-c5365a3d542e"
      }
    ]
  },
  {
    id: "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    name: "Beach Chair",
    members: [
      {
        id: "01548079-205a-4367-848c-3a4155ad31a6"
      },
      {
        id: "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9"
      },
      {
        id: "42503252-3979-4df1-afef-c5365a3d542e"
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
        let filteredResult = null;

        if (!by) {
          filteredResult = projects;
        } else {
          filteredResult = projects.filter(project => project.id === by.id);
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
          //The server would generate ids and watchHref's for new projects in a real app.
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
