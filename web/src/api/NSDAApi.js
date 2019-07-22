import axios from "axios";

export default class NSDAApi {
  constructor() {
    this.apiBaseUrl = process.env["VUE_APP_NEFRONAPP_API_BASE_URL"];
  }

  getFoods() {
    return axios
      .get(`${this.apiBaseUrl}/foods`)
      .then(res => res.data)
      .catch(err => {
        throw new Error(`could not fetch /foods: ${err}`);
      });
  }
}
