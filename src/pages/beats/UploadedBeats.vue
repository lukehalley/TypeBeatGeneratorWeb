<template>

  <div>
    <base-dialog :show="!!error" title="An Error Occurred While Fetching Your Beats!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <beat-filter @changed-filter="setFilters"></beat-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button @click="loadBeats">Refresh</base-button>
          <base-button v-if="isAuthenticated" link to="/upload">Upload A Beat</base-button>
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <div v-else-if="hasBeats">
          <ul>
            <beat-item @reloadData="loadBeats"
                v-for="beat in filteredBeats"
                :id="beat.id"
                :title="beat.title"
                :artist="beat.artist"
                :bpm="beat.bpm"
                :prices="beat.prices"
                :tags="beat.tags"
                :key="beat.id"
            ></beat-item>
          </ul>
        </div>
        <div v-else>
          <p>No Beats Available!</p>
        </div>
      </base-card>
    </section>
  </div>
</template>

<script>
import BeatItem from "../../components/beats/BeatItem.vue";
import BeatFilter from "../../components/beats/BeatFilter.vue";
import BaseDialog from "@/components/ui/BaseDialog";
import BaseButton from "@/components/ui/BaseButton";

export default {
  data() {
    return {
      activeFilters: {
        HipHop: true,
        Trap: true,
        Alt: true,
      },
      isLoading: false,
      error: null,
    };
  },
  computed: {
    filteredBeats() {
      const beats = this.$store.getters["beatStore/beats"];

      return beats.filter((beat) => {
        if (beat.tags.tag1) {
          if (this.activeFilters.HipHop && beat.tags.tag1.includes("Hip Hop")) {
            return true;
          } else if (
              this.activeFilters.Trap &&
              beat.tags.tag1.includes("Trap")
          ) {
            return true;
          } else if (this.activeFilters.Alt && beat.tags.tag1.includes("Alt")) {
            return true;
          }
        }

        if (beat.tags.tag2) {
          if (this.activeFilters.HipHop && beat.tags.tag2.includes("Hip Hop")) {
            return true;
          } else if (
              this.activeFilters.Trap &&
              beat.tags.tag2.includes("Trap")
          ) {
            return true;
          } else if (this.activeFilters.Alt && beat.tags.tag2.includes("Alt")) {
            return true;
          }
        }

        if (beat.tags.tag3) {
          if (this.activeFilters.HipHop && beat.tags.tag3.includes("Hip Hop")) {
            return true;
          } else if (
              this.activeFilters.Trap &&
              beat.tags.tag3.includes("Trap")
          ) {
            return true;
          } else if (this.activeFilters.Alt && beat.tags.tag3.includes("Alt")) {
            return true;
          }
        }

        return false;
      });
    },
    hasBeats() {
      return !this.isLoading && this.$store.getters["beatStore/hasBeats"];
    },
    isAuthenticated() {
      return this.$store.getters["authStore/isAuthenticated"];
    },
  },
  components: {
    BaseButton,
    BaseDialog,
    BeatItem,
    BeatFilter,
  },
  created() {
    this.loadBeats();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadBeats() {
      this.isLoading = true;

      const currentUserUsername = this.$store.getters["authStore/username"]

      try {
        await this.$store.dispatch("beatStore/getBeatsForUser", currentUserUsername);
      } catch (err) {
        this.error =
            err.message ||
            "Something went wrong while we were fetching your beats!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
    testError() {
      this.error = "Test Error"
    }
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