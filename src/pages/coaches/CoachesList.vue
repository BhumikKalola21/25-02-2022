<template>
  <div>
    <section>FILTER</section>
    <section>
      <base-card>
        <div class="controls">
          <button>Refresh</button>
          <router-link to="/register">register as a coach?</router-link>
        </div>
        <ul v-if="hasCoaches">
          <coachitem
            v-for="coach in filterdCoaches"
            :key="coach.id"
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coachitem>
        </ul>
        <h3 v-else>No coaches available</h3>
      </base-card>
    </section>
  </div>
</template>
<script>
import coachitem from '../../components/coaches/coacheItem.vue';
export default {
  components: {
    coachitem,
  },
  computed: {
    filterdCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hascoaches'];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
