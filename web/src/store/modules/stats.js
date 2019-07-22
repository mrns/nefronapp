const state = {
  count: 0
};

const mutations = {
  increment(state) {
    state.count++;
  }
};

const getters = {
  totalProteins: () => {},
  totalSodium: () => {},
  totalPotassium: () => {},
  totalBicarbonate: () => {},
  totalEnalapril: () => {}
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
