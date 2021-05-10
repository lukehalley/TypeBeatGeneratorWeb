<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !email.valid }">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email.value">
        <p v-if="!email.valid">Please Enter A Valid Email Address!</p>
      </div>
      <div class="form-control" :class="{ invalid: !password.valid }">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password.value">
        <p v-if="!password.valid">Please Enter A Valid Password!</p>
      </div>
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type="button" mode="flat" @click="switchAuthMode">{{ switchAuthButtonCaption }}</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: {
        value: "",
        valid: true,
      },
      password: {
        value: "",
        valid: true,
      },
      formIsValid: true,
      authMode: 'login'
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.authMode === 'login') {
        return 'Login'
      } else {
        return 'Sign Up'
      }
    },
    switchAuthButtonCaption() {
      if (this.authMode === 'login') {
        return 'Sign Up'
      } else {
        return 'Login'
      }

    },
  },
  methods: {
    submitForm() {
      if (this.authMode === 'login') {
        this.validateLoginForm()
      } else {
        this.validateRegisterForm()
      }
    },
    switchAuthMode() {
      if (this.authMode === 'login') {
        this.authMode = 'signup'
      } else {
        this.authMode = 'login'
      }
    },
    validateLoginForm() {
      this.formIsValid = true

      if (this.email.value === "" || !this.email.value.includes("@")) {
        this.email.valid = false
        this.formIsValid = false
      } else {
        this.email.valid = true
        this.formIsValid = true
      }

      if (this.password.value === "" || this.password.value.length < 6) {
        this.password.valid = false
        this.formIsValid = false
      } else {
        this.password.valid = true
        this.formIsValid = true
      }
    },
    validateRegisterForm() {
      this.formIsValid = true

      if (this.email.value === "" || !this.email.value.includes("@")) {
        this.email.valid = false
        this.formIsValid = false
      } else {
        this.email.valid = true
        this.formIsValid = true
      }

      if (this.password.value === "" || this.password.value.length < 6) {
        this.password.valid = false
        this.formIsValid = false
      } else {
        this.password.valid = true
        this.formIsValid = true
      }

    }
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
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