<template>
  <div>
    <section>
      <base-card>
        <header>
          <h2>Edit {{ selectedBeat.title }} Details</h2>
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
      return "this.selectedBeat.title";
    },
  },
  created() {
    this.getBeatToEdit();
  },
  methods: {
    async getBeatToEdit() {

      // this.isLoading = true;

      // const currentUserUsername = this.$store.getters["authStore/username"]

      try {
        await this.$store.dispatch("beatStore/getBeatById", this.id).then((beat) => {
          console.log("got", beat)
          this.selectedBeat = beat
        });
      } catch (err) {
        this.error =
            err.message ||
            "Something went wrong while we were fetching the beat to edit!";
      }
      this.isLoading = false;
    }
  }
};
</script>