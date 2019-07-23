import FoodsApi from "../../api/FoodsApi";

const foodsApi = new FoodsApi();
const state = {
  basicFoods: {},
  brandedFoods: {},
  NSDAFoodSearch: {}
};

const actions = {
  getBasicFoods({ commit }) {
    foodsApi.getFoods().then(basicFoods => commit("setBasicFoods", basicFoods));
  },
  searchNSDAFoods({ commit }, query) {
    foodsApi
      .searchFoods(query)
      .then(NSDAFoodSearch => commit("setNSDAFoodSearch", NSDAFoodSearch));
  }
};

const mutations = {
  setBasicFoods(state, basicFoods) {
    state.basicFoods = basicFoods;
  },
  setBrandedFoods(state, brandedFoods) {
    state.brandedFoods = brandedFoods;
  },
  setNSDAFoodSearch(state, NSDAFoodSearch) {
    state.NSDAFoodSearch = NSDAFoodSearch;
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
