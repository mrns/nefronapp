<template>
  <section class="info-tiles columns">
    <div class="column is-12 tile is-ancestor has-text-centered">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{totalProteins}}</p>
          <p class="subtitle">Proteinas</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{totalSodium}}</p>
          <p class="subtitle">Sodio</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{totalPotassium}}</p>
          <p class="subtitle">Potasio</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{totalEnalapril}}</p>
          <p class="subtitle">Enalapril</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{totalBicarbonate}}</p>
          <p class="subtitle">Bicarbonato</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      totalProteins: "stats/totalProteins",
      totalSodium: "stats/totalSodium",
      totalPotassium: "stats/totalPotassium",
      totalBicarbonate: "stats/totalBicarbonate",
      totalEnalapril: "stats/totalEnalapril"
    })
  }
};
</script>
