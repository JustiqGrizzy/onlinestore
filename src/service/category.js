import axios from "axios";

const CategoryService = {
  async getCategories() {
    const { data } = await axios.get(`http://localhost:1111/categories`);
    return data;
  },
};

export default CategoryService;
