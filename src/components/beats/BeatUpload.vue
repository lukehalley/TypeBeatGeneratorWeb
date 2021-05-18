<template>
  <form @submit.prevent="submitBeatUploadForm">
    <div class="form-control" :class="{ invalid: !title.valid }">
      <label>Title</label>
      <input v-model.trim="title.value" type="text" id="title"/>
      <p v-if="!title.valid">title must not be empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !bpm.valid }">
      <label>BPM</label>
      <input v-model.number="bpm.value" type="number" id="bpm"/>
      <p v-if="!bpm.valid">bpm must be greater than 0 or empty!</p>
    </div>
    <div class="form-control" :class="{ invalid: !mp3Price.valid }">
      <label>MP3 Price</label>
      <input
          v-model.number="mp3Price.value"
          type="number"
          id="mp3Price"
      />
      <p v-if="!mp3Price.valid">
        MP3 price must be greater than 0 or empty!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !wavPrice.valid }">
      <label>WAV Price</label>
      <input
          v-model.number="wavPrice.value"
          type="number"
          id="wavPrice"
      />
      <p v-if="!wavPrice.valid">
        WAV price must be greater than 0 or empty!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !zipPrice.valid }">
      <label>ZIP Price</label>
      <input
          v-model.number="zipPrice.value"
          type="number"
          id="ZIPPrice"
      />
      <p v-if="!zipPrice.valid">
        ZIP price must be greater than 0 or empty!
      </p>
    </div>
    <div class="form-control" :class="{ invalid: !tags.valid }">
      <label>Tags</label>
      <div>
        <label for="TagHipHop">Hip Hop</label>
        <input
            v-model="tags.value"
            type="checkbox"
            value="Hip Hop"
            id="TagHipHop"
            checked
        />
      </div>
      <div>
        <label for="TagTrap">Trap</label>
        <input
            v-model="tags.value"
            type="checkbox"
            value="Trap"
            id="TagTrap"
            checked
        />
      </div>
      <div>
        <label for="TagAlt">Alt</label>
        <input
            v-model="tags.value"
            type="checkbox"
            value="Alt"
            id="TagAlt"
            checked
        />
      </div>
      <p v-if="!tags.valid">At least one tag must be selected!</p>
    </div>
    <p v-if="!formIsValid">Please fix errors above and resubmit!</p>
    <base-button v-if="mode.value === 'upload'">Upload</base-button>
    <base-button v-else-if="mode.value === 'update'">Save</base-button>
  </form>
</template>

<script>
export default {
  emits: ["upload-beat", "update-beat"],
  props: ["beatId", "beatTitle", "beatBPM", "beatMp3Price", "beatWavPrice", "beatZipPrice", "beatTags", "beatMode"],
  data() {
    return {
      title: this.beatTitle,
      bpm: this.beatBPM,
      mp3Price: this.beatMp3Price,
      wavPrice: this.beatWavPrice,
      zipPrice: this.beatZipPrice,
      tags: this.beatTags,
      mode: this.beatMode,
      formIsValid: true,
    };
  },
  created() {
    if (this.mode.value === "update" && this.beatId.value) {
      this.setBeatDetailsToEdit(this.beatId.value)
    }
  },
  methods: {
    validateForm() {
      this.formIsValid = true;

      if (this.title.value === "") {
        this.title.valid = false;
        this.formIsValid = false;
      } else {
        this.title.valid = true;
      }

      if (!this.bpm.value || this.bpm.value < 0) {
        this.bpm.valid = false;
        this.formIsValid = false;
      } else {
        this.bpm.valid = true;
      }

      if (!this.mp3Price.value || this.mp3Price.value < 0) {
        this.mp3Price.valid = false;
        this.formIsValid = false;
      } else {
        this.mp3Price.valid = true;
      }

      if (!this.wavPrice.value || this.wavPrice.value < 0) {
        this.wavPrice.valid = false;
        this.formIsValid = false;
      } else {
        this.wavPrice.valid = true;
      }

      if (!this.zipPrice.value || this.zipPrice.value < 0) {
        this.zipPrice.valid = false;
        this.formIsValid = false;
      } else {
        this.zipPrice.valid = true;
      }

      if (this.tags.value.length < 1) {
        this.tags.valid = false;
        this.formIsValid = false;
      } else {
        this.tags.valid = true;
      }
    },
    submitBeatUploadForm() {
      this.validateForm();

      if (this.formIsValid) {

        var prices = {
          mp3Price: this.mp3Price.value,
          wavPrice: this.wavPrice.value,
          zipPrice: this.zipPrice.value,
        };

        var formData = {
          id: null,
          title: this.title.value,
          bpm: this.bpm.value,
          prices: prices,
          tags: this.tags.value,
          mode: this.mode.value
        };

        if (this.mode.value === "upload") {
          console.log(formData)
          this.$emit("upload-beat", formData);
        } else if (this.mode.value === "update") {
          formData['id'] = this.beatId.value
          this.$emit("update-beat", formData);
        }

      }
    },
    clearValidility(input) {
      this[input].valid = true;
    },
    setBeatDetailsToEdit(id) {
      this.$store.dispatch("beatStore/getBeatById", id).then((result) => {
        this.title = {value: result.title, valid: true}
        this.bpm = {value: result.bpm, valid: true}
        this.mp3Price = {value: result.price.mp3Price, valid: true}
        this.wavPrice = {value: result.price.wavPrice, valid: true}
        this.zipPrice = {value: result.price.UnlimitedPrice, valid: true}
        this.tags = {value: result.tags, valid: true}
      })
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