<template>
  <form @submit.prevent="sendMessage">
    <div class="form-control" :class="{ invalid: !username.valid }">
      <label for="username">User</label>
      <input type="username" id="username" v-model="username.value" />
      <p v-if="!username.valid">Username cannot be blank!</p>
    </div>
    <div class="form-control" :class="{ invalid: !message.valid }">
      <label for="message">Message</label>
      <textarea rows="5" id="message" v-model="message.value" />
      <p v-if="!message.valid">Message cannot be blank!</p>
    </div>
    <div class="actions">
      <p v-if="!formIsValid">Please fix errors above and resubmit!</p>
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["send-message"],
  data() {
    return {
      username: { value: "", valid: true },
      message: { value: "", valid: true },
      formIsValid: true,
    };
  },
  methods: {
    sendMessage() {
      this.validateMessage();
      if (this.formIsValid) {
        const formData = {
          recipientUserId: "usr1",
          recipientUsername: this.username.value,
          messageBody: this.message.value,
        };
        this.$store.dispatch("messageStore/sendMessage", formData);
      } else {
        return;
      }
    },
    validateMessage() {
      this.formIsValid = true;

      if (this.username.value === "") {
        this.username.valid = false;
        this.formIsValid = false;
      } else {
        this.username.valid = true;
      }

      if (this.message.value === "") {
        this.message.valid = false;
        this.formIsValid = false;
      } else {
        this.message.valid = true;
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.actions {
  text-align: center;
}
</style>