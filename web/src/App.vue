<template>
  <div id="app">
    <Nav />
    <div class="container">
      <div class="columns">
        <div class="column is-9">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "./store";
import Nav from "./components/layout/Nav.vue";

export default {
  name: "app",
  store,
  components: {
    Nav
  },
  methods: {},
  created() {
    this.$store.dispatch("foods/getBasicFoods");
  }
};
</script>

<style>
</style>
