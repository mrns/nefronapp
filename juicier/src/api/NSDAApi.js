const axios = require("axios");
const baseUrls = {
  v2: "https://api.nal.usda.gov/ndb/V2/"
};

class NSDAApi {
  constructor(apiKey, version) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrls[version];
  }

  extractData(endpointPath, data) {
    let targetUrl = this.generateEndpointUrl(endpointPath);

    switch (endpointPath) {
      case "reports":
        return this.getReports(data, targetUrl);
        break;
      default:
        throw new Error("unknown endpoint");
        break;
    }
  }

  getReports(foodIds, targetUrl) {
    foodIds.forEach(id => {
      targetUrl += `&ndbno=${id}`;
    });

    targetUrl += `&type=f&format=json`;

    return axios.get(targetUrl);
  }

  generateEndpointUrl(path) {
    return `${this.baseUrl}${this.generateBaseQueryString(path)}`;
  }

  generateBaseQueryString(path) {
    if (!path) {
      throw new Error("missing path");
    }

    return `${path}?api_key=${this.apiKey}`;
  }
}

module.exports = NSDAApi;
