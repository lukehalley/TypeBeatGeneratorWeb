<template>
  <div>
    <section>
      <base-card>
        <h2>Upload A Beat</h2>
        <beat-upload @upload-beat="uploadBeat"></beat-upload>
      </base-card>
    </section>
    <div v-if="isLoading">
      <base-spinner></base-spinner>
    </div>
  </div>
</template>

<script>
import BeatUpload from "../../components/beats/BeatUpload.vue";

export default {
  data() {
    return {
      isLoading: false,
    }
  },
  components: {
    BeatUpload,
  },
  methods: {
    uploadBeat(formData) {
      this.isLoading = true;
      this.$store.dispatch("beatStore/uploadBeat", formData);
      this.isLoading = false;
      // this.$router.replace("/beats");
    },
  },
};
</script>
