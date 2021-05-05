<template>
  <form @submit.prevent="submitBeatUploadForm">
    <div class="form-control" :class="{ invalid: !beatTitle.valid }">
      <label>Title</label>
      <input v-model.trim="beatTitle.value" type="text" id="beatTitle" />
      <p v-if="!beatTitle.valid">Title must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !beatBPM.valid }">
      <label>BPM</label>
      <input v-model.number="beatBPM.value" type="number" id="beatBPM" />
      <p v-if="!beatBPM.valid">BPM must be greater than 0 or empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !beatMp3Price.valid }">
      <label>MP3 Price</label>
      <input
        v-model.number="beatMp3Price.value"
        type="number"
        id="beatMp3Price"
      />
      <p v-if="!beatMp3Price.valid">
        MP3 price must be greater than 0 or empty!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !beatWavPrice.valid }">
      <label>WAV Price</label>
      <input
        v-model.number="beatWavPrice.value"
        type="number"
        id="beatWavPrice"
      />
      <p v-if="!beatWavPrice.valid">
        WAV price must be greater than 0 or empty!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !beatZipPrice.valid }">
      <label>ZIP Price</label>
      <input
        v-model.number="beatZipPrice.value"
        type="number"
        id="beatZIPPrice"
      />
      <p v-if="!beatZipPrice.valid">
        ZIP price must be greater than 0 or empty!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !beatTags.valid }">
      <label>Tags</label>
      <div>
        <label for="beatTagHipHop">Hip Hop</label>
        <input
          v-model="beatTags.value"
          type="checkbox"
          value="Hip Hop"
          id="beatTagHipHop"
        />
      </div>
      <div>
        <label for="beatTagTrap">Trap</label>
        <input
          v-model="beatTags.value"
          type="checkbox"
          value="Trap"
          id="beatTagTrap"
        />
      </div>
      <div>
        <label for="beatTagAlt">Alt</label>
        <input
          v-model="beatTags.value"
          type="checkbox"
          value="Alt"
          id="beatTagAlt"
        />
      </div>
      <p v-if="!beatTags.valid">At least one beat tag must be selected!</p>
    </div>
    <p v-if="!formIsValid">Please fix errors above and resubmit!</p>
    <base-button>Upload</base-button>
  </form>
</template>

<script>
export default {
  emits: ["upload-beat"],
  data() {
    return {
      beatTitle: { value: "", valid: true },
      beatBPM: { value: 0, valid: true },
      beatMp3Price: { value: 0, valid: true },
      beatWavPrice: { value: 0, valid: true },
      beatZipPrice: { value: 0, valid: true },
      beatTags: { value: [], valid: true },
      formIsValid: true,
    };
  },
  methods: {
    validateForm() {
      this.formIsValid = true;

      if (this.beatTitle.value === "") {
        this.beatTitle.valid = false;
        this.formIsValid = false;
      } else {
        this.beatTitle.valid = true;
      }

      if (!this.beatBPM.value || this.beatBPM.value < 0) {
        this.beatBPM.valid = false;
        this.formIsValid = false;
      } else {
        this.beatBPM.valid = true;
      }

      if (!this.beatMp3Price.value || this.beatMp3Price.value < 0) {
        this.beatMp3Price.valid = false;
        this.formIsValid = false;
      } else {
        this.beatMp3Price.valid = true;
      }

      if (!this.beatWavPrice.value || this.beatWavPrice.value < 0) {
        this.beatWavPrice.valid = false;
        this.formIsValid = false;
      } else {
        this.beatWavPrice.valid = true;
      }

      if (!this.beatZipPrice.value || this.beatZipPrice.value < 0) {
        this.beatZipPrice.valid = false;
        this.formIsValid = false;
      } else {
        this.beatZipPrice.valid = true;
      }

      if (this.beatTags.value.length < 1) {
        this.beatTags.valid = false;
        this.formIsValid = false;
      } else {
        this.beatTags.valid = true;
      }
    },
    submitBeatUploadForm() {
      this.validateForm();

      if (this.formIsValid) {
        var priceArray = [];
        priceArray.push(
          this.beatMp3Price,
          this.beatWavPrice,
          this.beatZipPrice
        );
        const formData = {
          formTitle: this.beatTitle.value,
          formBPM: this.beatBPM.value,
          formPrice: priceArray.value,
          formTags: this.beatTags.value,
        };
        this.$emit("upload-beat", formData);
      } else {
        return;
      }
    },
    clearValidility(input) {
      this[input].valid = true;
    },
  },
};
</script>


<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>