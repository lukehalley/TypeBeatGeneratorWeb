<template>
  <base-card>
    <form @submit.prevent="submitAuth">
      <!-- Username Field - Sign Up Mode Only -->
      <div v-if="authMode === 'signUp' || authMode === 'signIn'" class="form-control"
           :class="{ invalid: !username.valid }">
        <label for="username">Username</label>
        <input type="username" id="username" v-model.trim="username.value">
        <p v-if="!username.valid">Please Enter A Valid Username!</p>
      </div>

      <!-- Email Field - Login & Sign Up Mode Only -->
      <div v-if="authMode === 'signUp'" class="form-control"
           :class="{ invalid: !email.valid }">
        <label for="email">Email</label>
        <input type="email" id="email" v-model.trim="email.value">
        <p v-if="!email.valid">Please Enter A Valid Email Address!</p>
      </div>

      <!-- Password Field - Login & Sign Up Mode Only -->
      <div v-if="authMode === 'signUp' || authMode === 'signIn'" class="form-control"
           :class="{ invalid: !password.valid }">
        <label for="password">Password</label>
        <input type="password" id="password" v-model.trim="password.value">
        <p v-if="!password.valid">Please Enter A Valid Password!</p>
      </div>

      <!-- Verification Code Field - Verify Mode Only -->
      <div v-if="authMode === 'verify'" class="form-control"
           :class="{ invalid: !verificationCode.valid }">
        <label for="verify">Verify</label>
        <input type="password" id="verify" v-model.trim="verificationCode.value">
        <p v-if="!verificationCode.valid">Please Enter A Valid Verification Code!</p>
      </div>

      <!-- Submit Button - Login & Sign Up Only -->
      <base-button v-if="authMode === 'signUp' || authMode === 'signIn'">{{ submitButtonCaption }}</base-button>

      <!-- Submit Button - Login & Sign Up Only -->
      <base-button v-if="authMode === 'verify'" @click="verifyAccount">Verify</base-button>

      <!-- Email Field - Login & Sign Up Only -->
      <base-button
          v-if="authMode === 'signUp' || authMode === 'signIn'"
          type="button"
          mode="flat"
          @click="switchAuthMode">{{ switchAuthButtonCaption }}
      </base-button>

      <p v-if="error">{{ error }}</p>

      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
    </form>
  </base-card>
</template>

<script>

export default {
  data() {
    return {
      username: {
        value: "",
        valid: true,
      },
      email: {
        value: "",
        valid: true,
      },
      password: {
        value: "",
        valid: true,
      },
      verificationCode: {
        value: "",
        valid: true,
      },
      formIsValid: true,
      authMode: 'signIn',
      isLoading: false,
      error: null
    }
  },
  computed: {
    submitButtonCaption() {
      if (this.authMode === 'signIn') {
        return 'Sign In'
      } else {
        return 'Sign Up'
      }
    },
    switchAuthButtonCaption() {
      if (this.authMode === 'signIn') {
        return 'Sign Up'
      } else {
        return 'Sign In'
      }
    },
  },
  methods: {
    submitAuth() {
      if (this.authMode === 'signIn') {
        this.signIn()
      } else if (this.authMode === 'signUp') {
        this.signUp()
      }
    },
    signIn() {
      // Sign In
      this.validatesignInForm()

      this.isLoading = true;

      if (this.formIsValid) {

        this.$store.dispatch('authStore/signIn',
            {
              username: this.username.value,
              password: this.password.value
            }
        ).then(() => {
          this.$router.replace("/beats");
        }).catch((err) => {
          this.error = err
        }).finally(() => {
          this.isLoading = false;
        })
      }
    },
    signUp() {
      // Sign Up
      this.validateSignUpForm()

      this.isLoading = true;

      if (this.formIsValid) {

        this.$store.dispatch('authStore/signUp',
            {
              username: this.username.value,
              email: this.email.value,
              password: this.password.value
            }
        ).then(() => {
          this.authMode = 'verify'
        }).catch((err) => {
          this.error = err
        }).finally(() => {
          this.isLoading = false;
        })
      }
    },
    async verifyAccount() {
      this.isLoading = true;
      if (this.formIsValid) {

        this.$store.dispatch('authStore/confirmSignUp',
            {
              username: this.username.value,
              code: this.verificationCode.value,
            }
        ).then(() => {
          this.authMode = 'signIn'
        }).catch((err) => {
          this.error = err
        }).finally(() => {
          this.isLoading = false;
        })
      }
    },
    switchAuthMode() {
      this.resetValidation();

      if (this.authMode === 'signIn') {
        this.authMode = 'signUp'
      } else {
        this.authMode = 'signIn'
      }
    },
    validatesignInForm() {
      this.formIsValid = true

      if (this.username.value === "") {
        this.username.valid = false
        this.formIsValid = false
      } else {
        this.username.valid = true
        this.formIsValid = true
      }

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
    validateSignUpForm() {
      this.formIsValid = true

      if (this.username.value === "") {
        this.username.valid = false
        this.formIsValid = false
      } else {
        this.username.valid = true
        this.formIsValid = true
      }

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
    resetValidation() {
      this.formIsValid = true
      this.username.valid = true
      this.email.valid = true
      this.password.valid = true
    },

    resetForm() {
      this.formIsValid = true
      this.username.value = ""
      this.email.value = ""
      this.password.value = ""
      this.error = null
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