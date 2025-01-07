import userModel from "../models/userModel.js";

class UserController {
  getAll() {
    return userModel.getUsers();
  }

  post(userParams) {
    return userModel.post(userParams);
  }
}

export default new UserController();