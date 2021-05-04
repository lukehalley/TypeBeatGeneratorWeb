<template>
  <section>
    <base-card>
      <h2>Upload A Beat</h2>
      <beat-upload @upload-beat="uploadBeat"></beat-upload
    ></base-card>
  </section>
</template>

<script>
import BeatUpload from "../../components/beats/BeatUpload.vue";

export default {
  components: {
    BeatUpload,
  },
  methods: {
    uploadBeat(formData) {
      this.$store.dispatch("beatStore/uploadBeat", formData);
      this.$router.replace("/beats");
    },
  },
};
</script>
