<template>
  <div>
    <section>
      <base-card>
        <header>
          <h2>Edit {{ beatTitle }} Details</h2>
          <router-view></router-view>
        </header>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedBeat: null,
    };
  },
  computed: {
    beatTitle() {
      return this.selectedBeat.title;
    },
  },
  created() {
    this.selectedBeat = this.$store.getters["beatStore/beats"].find(
        (beat) => beat.id === this.id
    );
  },
};
</script>