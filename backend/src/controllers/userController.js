import userModel from "../models/userModel.js";

class UserController {
  getAll() {
    return userModel.getUsers();
  }

  getUser(userId) {
    return userModel.getUser(userId);
  }

  post(userParams) {
    return userModel.post(userParams);
  }

  put(userParams, userId) {
    return userModel.put(userParams, userId);
  }

  delete(userId) {
    return userModel.delete(userId);
  }
}

export default new UserController();