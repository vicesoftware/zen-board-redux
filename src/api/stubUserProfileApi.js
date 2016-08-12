import delay from "./delay";
const users = require("./usersProfiles.json");
const userPasswords = require("./userPasswords.json");

class UserProfileApi {
  static authenticate(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const profile = users.find(user => user.email === email);
        if (!profile) {
          reject("No profile found with user name: " + email);
        }

        const userPassword = userPasswords.find(userPassword => userPassword.id === profile.id).password;

        if (userPassword !== password) {
          reject("Password was not correct.");
        }

        resolve(Object.assign({}, profile));
      }, delay);
    });
  }
}

export default UserProfileApi;
