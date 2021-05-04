<template>
  <section>
    <beat-filter @changed-filter="setFilters"></beat-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button>Refresh</base-button>
        <base-button link to="/register">Upload A Beat</base-button>
      </div>
      <div v-if="hasBeats">
        <ul>
          <beat-item
            :id="beat.id"
            :title="beat.title"
            :artist="beat.artist"
            :bpm="beat.bpm"
            :prices="beat.prices"
            :tags="beat.tags"
            v-for="beat in filteredBeats"
            :key="beat.id"
          ></beat-item>
        </ul>
      </div>
      <div v-else>
        <p>No Beats Available!</p>
      </div>
    </base-card>
  </section>
</template>

<script>
import BeatItem from "../../components/beats/BeatItem.vue";
import BeatFilter from "../../components/beats/BeatFilter.vue";

export default {
  computed: {
    filteredBeats() {
      const beats = this.$store.getters["beatStore/beats"];
      return beats.filter((beat) => {
        if (this.activeFilters.HipHop && beat.tags.includes("Hip Hop")) {
          return true;
        }
        if (this.activeFilters.Trap && beat.tags.includes("Trap")) {
          return true;
        }
        if (this.activeFilters.Alt && beat.tags.includes("Alt")) {
          return true;
        }
        return false;
      });
    },
    hasBeats() {
      return this.$store.getters["beatStore/hasBeats"];
    },
  },
  data() {
    return {
      activeFilters: {
        HipHop: true,
        Trap: true,
        Alt: true,
      },
    };
  },
  components: {
    BeatItem,
    BeatFilter,
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
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