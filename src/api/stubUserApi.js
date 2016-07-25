import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const users = [
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
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
  return user.firstName.toLowerCase() + "-" + user.lastName.toLowerCase();
};

class UserApi {
  static getUsers(by) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], users));
      }, delay);
    });
  }

  static saveUser(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minUserNameLength = 3;
        if (user.firstName.length < minUserNameLength) {
          reject(`First Name must be at least ${minUserNameLength} characters.`);
        }

        if (user.lastName.length < minUserNameLength) {
          reject(`Last Name must be at least ${minUserNameLength} characters.`);
        }

        if (user.id) {
          const existingUserIndex = users.findIndex(a => a.id == user.id);
          users.splice(existingUserIndex, 1, user);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new users in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          user.id = generateId(user);
          users.push(user);
        }

        resolve(Object.assign({}, user));
      }, delay);
    });
  }

  static deleteUser(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfUserToDelete = users.findIndex(user => {
          user.userId == userId;
        });
        users.splice(indexOfUserToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default UserApi;
