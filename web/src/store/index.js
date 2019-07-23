import Vue from "vue";
import Vuex from "vuex";
import stats from "./modules/stats";
import foods from "./modules/foods";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    stats,
    foods
  },
  strict: debug
});
