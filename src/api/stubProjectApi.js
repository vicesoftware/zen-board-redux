import delay from './delay';
import UUID from 'uuid-js';
import userApi from "stubUserApi";

const projects = [
  {
    id: "04d1a05f-d511-45a6-8fe1-544224ea5657",
    name: "Bar Stool",
    members: [
      {
        id: "01548079-205a-4367-848c-3a4155ad31a6",
        firstName: "Ashish",
        lastName: "Bandi",
        username: "abandi",
        avatar: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/1a8/311/251d8f1.jpg"
      },
      {
        id: "42503252-3979-4df1-afef-c5365a3d542e",
        firstName: "Prashanth",
        lastName: "Tondapu",
        username: "prashantht",
        avatar: "https://s31.postimg.org/80jro0m6j/prashanth.png"
      }
    ]
  },
  {
    id: "8736fa7d-9563-41f9-982e-603e7fedd94b",
    name: "Bottle Opener",
    members: [
      {
        id: "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9",
        firstName: "Ryan",
        lastName: "Vice",
        username: "rvice",
        avatar: "http://adnug.org/Home/wp-content/uploads/2012/03/ryan-vice.jpg"
      },
      {
        id: "42503252-3979-4df1-afef-c5365a3d542e",
        firstName: "Prashanth",
        lastName: "Tondapu",
        username: "prashantht",
        avatar: "https://s31.postimg.org/80jro0m6j/prashanth.png"
      }
    ]
  },
  {
    id: "a6f7edaa-e0ba-4457-b5ca-a50f5dfc881a",
    name: "Beach Chair",
    members: [
      {
        id: "01548079-205a-4367-848c-3a4155ad31a6",
        firstName: "Ashish",
        lastName: "Bandi",
        username: "abandi",
        avatar: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/2/000/1a8/311/251d8f1.jpg"
      },
      {
        id: "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9",
        firstName: "Ryan",
        lastName: "Vice",
        username: "rvice",
        avatar: "http://adnug.org/Home/wp-content/uploads/2012/03/ryan-vice.jpg"
      },
      {
        id: "42503252-3979-4df1-afef-c5365a3d542e",
        firstName: "Prashanth",
        lastName: "Tondapu",
        username: "prashantht",
        avatar: "https://s31.postimg.org/80jro0m6j/prashanth.png"
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
