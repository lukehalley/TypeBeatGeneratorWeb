<template>
  <base-card>
    <h2>Find Your Beat</h2>
    <span class="filter-option">
      <label for="HipHop">Hip Hop</label>
      <input
        type="checkbox"
        id="HipHop"
        checked
        @change="filterChanged($event)"
      />
    </span>
    <span class="filter-option">
      <label for="Trap">Trap</label>
      <input
        type="checkbox"
        id="Trap"
        checked
        @change="filterChanged($event)"
      />
    </span>
    <span class="filter-option">
      <label for="Alt">Alt</label>
      <input type="checkbox" id="Alt" checked @change="filterChanged($event)" />
    </span>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      filters: {
        HipHop: true,
        Trap: true,
        Alt: true,
      },
    };
  },
  methods: {
    filterChanged(e) {
      const inputId = e.target.id;
      const isActive = e.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit("changed-filter", updatedFilters);
    },
  },
  emits: ["changed-filter"],
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>