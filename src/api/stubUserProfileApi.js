import delay from "./delay";
const users = require("./usersProfiles.json");
const userPasswords = require("./userPasswords.json");

const USER_PROFILE = "USER_PROFILE";

class UserProfileApi {
  static authenticate(email, password, remember) {
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

        if (remember) {
          localStorage.setItem(USER_PROFILE, profile);
        }

        resolve(Object.assign({}, profile));
      }, delay);
    });
  }

  static load() {
    return localStorage.get(USER_PROFILE);
  }
}

export default UserProfileApi;
