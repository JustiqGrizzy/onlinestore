import axios from "axios";

const ProductService = {
  async getCategoryProducts(id) {
    const { data } = await axios.get(`http://localhost:1111/${id}`);
    return data;
  },
  async getAllProducts() {
    const { data } = await axios.get(`http://localhost:1111/all-products`);
    return data;
  },
  async getSearchProducts(id) {
    const { data } = await axios.get(
      `http://localhost:1111/search?query=${id}`
    );
    return data;
  },
};

export default ProductService;
