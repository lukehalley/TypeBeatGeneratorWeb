<!-- eslint-disable vue/no-deprecated-slot-attribute -->

<template>
  <amplify-authenticator>
    <amplify-sign-up
        slot="sign-up"
        header-text="Sign Up To Beatcloud"
        username-alias="username"
        :formFields="signUpFields"
    ></amplify-sign-up>
    <amplify-sign-in
        slot="sign-in"
        header-text="Sign In To Beatcloud"
        :formFields="signInFields"
        username-alias="email"
    ></amplify-sign-in>
  </amplify-authenticator>
</template>

<!--<template>-->
<!--  <div>-->
<!--    <amplify-authenticator v-if="authState !== 'signedin'">-->

<!--    </amplify-authenticator>-->
<!--    <div v-if="authState === 'signedin' && user">-->
<!--      <amplify-sign-out></amplify-sign-out>-->
<!--      <div>Hello, {{ user.username }}</div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->


<script>
import {onAuthUIStateChange} from '@aws-amplify/ui-components'

export default {
  mounted() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    })
  },
  data() {
    return {
      user: undefined,
      authState: undefined,
      unsubscribeAuth: undefined,
      handleSubmit: undefined,
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
      ],
      signInFields: [
        {
          type: 'username',
          label: 'Username',
          placeholder: 'Enter your username',
          required: false,
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
  watch: {
    // whenever question changes, this function will run
    user: function (oldAuthState, newAuthState) {
      console.log("Auth State Changed!")
      console.log("Old: ", oldAuthState)
      console.log("New: ", newAuthState)
    }
  },
  methods: {
    onSubmints(event) {

      console.log("IT WORKS HOPEFULLY")
      console.log(event)
      console.log(this.authState)
      // event.preventDefault();
    }
  },
  // beforeUnmount() {
  //   this.unsubscribeAuth();
  // }
}
</script>

<style scoped>
</style>