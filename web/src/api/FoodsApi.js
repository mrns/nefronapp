import axios from "axios";
import qs from "qs";

export default class FoodsApi {
  constructor() {
    this.apiBaseUrl = `${process.env["VUE_APP_NEFRONAPP_API_BASE_URL"]}/foods`;
  }

  searchNSDA(query) {
    return axios
      .post(`${this.apiBaseUrl}/NSDA/search`, qs.stringify({ query }))
      .then(res => res.data)
      .catch(err => {
        throw new Error(`could not fetch /foods: ${err}`);
      });
  }
}
