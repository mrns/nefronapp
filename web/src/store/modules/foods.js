import FoodsApi from "../../api/FoodsApi";

const foodsApi = new FoodsApi();
const state = {
  foods: [],
  NSDAFoodSearch: {}
};

const actions = {
  getFoods({ commit }) {
    foodsApi.getFoods().then(foods => commit("setFoods", foods));
  },
  searchNSDAFoods({ commit }, query) {
    foodsApi
      .searchNSDA(query)
      .then(NSDAFoodSearch => commit("setNSDAFoodSearch", NSDAFoodSearch));
  }
};

const mutations = {
  setFoods(state, foods) {
    state.foods = foods;
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
