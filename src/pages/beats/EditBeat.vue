<template>
  <div>
    <section>
      <base-card>
        <h2>Edit A Beat</h2>
        <beat-upload
            @update-beat="updateBeat"
            :beatId="{value: id, valid: true}"
            :beatTitle="{value: null, valid: true}"
            :beatBPM="{value: null, valid: true}"
            :beatMp3Price="{value: null, valid: true}"
            :beatWavPrice="{value: null, valid: true}"
            :beatZipPrice="{value: null, valid: true}"
            :beatTags="{value: null, valid: true}"
            :beatMode="{value: 'update'}"
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
  props: ["id"],
  data() {
    return {
      selectedBeat: null,
      isLoading: false,
    };
  },
  components: {
    BeatUpload,
  },
  methods: {
    updateBeat(formData) {
      this.isLoading = true;
      this.$store.dispatch("beatStore/createOrUpdateBeat", formData);
      this.isLoading = false;
      this.$router.replace("/beats");
    },
  },
};
</script>
