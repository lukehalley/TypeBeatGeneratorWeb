<template>
  <div>
    <section>
      <base-card>
        <h2>Upload A Beat</h2>
        <beat-form @upload-beat="uploadBeat"></beat-form>
      </base-card>
    </section>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
  </div>
</template>

<script>
import BeatForm from "../../components/beats/BeatForm.vue";

export default {
  data() {
    return {
      isLoading: false,
    }
  },
  components: {
    BeatForm,
  },
  methods: {
    uploadBeat(formData) {
      this.isLoading = true;
      this.$store.dispatch("beatStore/uploadBeat", formData);
      this.isLoading = false;
      this.$router.replace("/beats");
    },
  },
};
</script>
