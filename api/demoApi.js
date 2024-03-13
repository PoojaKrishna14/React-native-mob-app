import axios from "axios";
const modem = axios.get({
  baseURL: "https://fakestoreapi.com/products",
});

export default modem;
