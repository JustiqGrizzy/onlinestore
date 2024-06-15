import axios from "./api";

const ProductService = {
  async getCategoryProducts(id) {
    const { data } = await axios.get(`/${id}`);
    return data;
  },
  async getAllProducts() {
    const { data } = await axios.get(`/all-products`);
    return data;
  },
  async getSearchProducts(id) {
    const { data } = await axios.get(`search?query=${id}`);
    return data;
  },
};

export default ProductService;
