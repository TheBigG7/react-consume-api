import axios from "axios";
axios.get("/api/products/product/", { withCredentials: true })
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
export class ProductService {

    baseUrl = "http://24.144.105.202:8080/api/products/";

    create(product) {
        return axios.post(this.baseUrl + "product", product).then(res => res.data);
    }

    readAll() {
        return axios.get(this.baseUrl).then(res => res.data);
    }

    update(product) {
        return axios.put(this.baseUrl + "product/" + product._id, product).then(res => res.data);
    }

    delete(id) {
        return axios.delete(this.baseUrl + "product/" + id).then(res => res.data);
    }
}