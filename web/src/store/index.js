import Vue from "vue";
import Vuex from "vuex";
import stats from "./modules/stats";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    stats
  },
  strict: debug
});
