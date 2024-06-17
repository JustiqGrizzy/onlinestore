import axios from "axios";

const AuthService = {
  async userRegister(user) {
    const response = await axios.post("https://api.realworld.io/api/users", {
      user,
    });
    return response.data;
  },
  async userLogin(user) {
    const { data } = await axios.post(
      "https://api.realworld.io/api/users/login",
      { user }
    );
    return data;
  },
  async getUser() {
    const { data } = await axios.get("https://api.realworld.io/api/user");
    return data;
  },
};
export default AuthService;
