<template>
  <div>
    <section>
      <base-card>
        <h2>Edit A Beat</h2>
        <beat-form @edit-beat="editBeat"></beat-form>
      </base-card>
    </section>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      beatToEdit: null,
    };
  },
  computed: {
    beatTitle() {
      return this.beatToEdit.title;
    },
  },
  created() {
    this.getBeatToEdit;
    // const beats = this.$store.getters["beatStore/beats"];
    // console.log(beats)
    // this.beatToEdit = this.$store.getters["beatStore/beats"].find(
    //     (beat) => beat.id === this.id
    // );
    // console.log("Beat To Edit", this.id, this.beatToEdit);
  },
  methods: {
    async getBeatToEdit() {
      // this.isLoading = true;
      //
      // const currentUserUsername = this.$store.getters["authStore/username"]

      try {
        await this.$store.dispatch("beatStore/getBeatById", this.id);
      } catch (err) {
        this.error =
            err.message ||
            "Something went wrong while we were fetching the beat you want to edit!";
      }
      this.isLoading = false;
    },
    async editBeat() {
      // this.isLoading = true;
      //
      // const currentUserUsername = this.$store.getters["authStore/username"]

      try {
        await this.$store.dispatch("beatStore/getBeatById", this.id);
      } catch (err) {
        this.error =
            err.message ||
            "Something went wrong while we were fetching the beat you want to edit!";
      }
      this.isLoading = false;
    }
  }
};
</script>