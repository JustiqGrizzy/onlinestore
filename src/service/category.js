import axios from "./api";

const CategoryService = {
  async getCategories() {
    const { data } = await axios.get(`/categories`);
    return data;
  },
};

export default CategoryService;
