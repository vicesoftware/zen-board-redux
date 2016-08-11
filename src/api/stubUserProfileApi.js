import delay from "./delay";

class UserProfileApi {
  static authenticate(userName, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign({}, {
          id: "10c6b17d-583f-459e-bf2f-b8da7ff2b1b9",
          firstName: "Ryan",
          lastName: "Vice",
          username: "rvice",
          avatar: "http://adnug.org/Home/wp-content/uploads/2012/03/ryan-vice.jpg"
        }));
      }, delay);
    });
  }
}

export default UserProfileApi;
