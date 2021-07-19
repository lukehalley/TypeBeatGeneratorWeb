<template>
  <div>
    <section>
      <base-card>
        <h2>Upload A Beat</h2>
        <beat-upload
            @upload-beat="uploadBeat"
            :beatTitle="{value: 'New', valid: true}"
            :beatBPM = "{value: 125, valid: true}"
            :beatMp3Price = "{value: 25, valid: true}"
            :beatWavPrice = "{value: 100, valid: true}"
            :beatZipPrice = "{value: 250, valid: true}"
            :beatTags = "{value: [], valid: true}"
            :beatMode = "{value: 'upload'}"
        ></beat-upload>
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

      this.$store.dispatch("beatStore/createOrUpdateBeat", formData);
      this.isLoading = false;
      this.$router.replace("/beats");
    },
  },
};
</script>
