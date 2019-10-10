<template>
  <div>
    <section class="hero is-info welcome is-small">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Hola, Diego.</h1>
          <h2 class="subtitle">Hoy puede ser un gran día!</h2>
        </div>
      </div>
    </section>
    <DailyStats />
    <div class="columns">
      <div class="column is-6">
        <SearchFoodInfo />
      </div>
      <div class="column is-6">
        <SearchRecipe />
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <EventList />
      </div>
    </div>
  </div>
</template>

<script>
import DailyStats from "../components/stats/DailyStats.vue";
import SearchFoodInfo from "../components/food/SearchFoodInfo.vue";
import SearchRecipe from "../components/search/SearchRecipe.vue";
import EventList from "../components/events/EventList.vue";

export default {
  name: "Home",
  components: {
    DailyStats,
    SearchFoodInfo,
    SearchRecipe,
    EventList
  }
};
</script>
