<!-- eslint-disable vue/no-deprecated-slot-attribute -->

<template>
  <amplify-authenticator>
    <amplify-sign-up
        slot="sign-up"
        header-text="Sign Up To Beatcloud"
        :formFields="signUpFields"
        username-alias="username"
    ></amplify-sign-up>
    <amplify-sign-in
        slot="sign-in"
        header-text="Sign In To Beatcloud"
        username-alias="email">
    </amplify-sign-in>
  </amplify-authenticator>
</template>

<script>


export default {
  created() {
    this.$store.dispatch("authStore/checkUserAuthState");
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
      signUpFields: [
        {
          type: 'username',
          label: 'Username',
          placeholder: 'Enter your username',
          required: false,
        },
        {
          type: 'email',
          label: 'Email',
          placeholder: 'Enter your email address',
          required: true,
        },
        {
          type: 'password',
          label: 'Password',
          placeholder: 'Enter your password',
          required: true,
        }
      ]
    }
  },
  methods: {},
  beforeUnmount() {
    this.$store.dispatch("authStore/checkUserAuthState");
  }
}
</script>

<style scoped>
</style>