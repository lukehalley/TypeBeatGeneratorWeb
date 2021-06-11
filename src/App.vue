<template>
  <the-header></the-header>
  <router-view v-slot="slotProps">
    <transition name="router" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheHeader from "./components/layout/TheHeader";
import {Auth} from 'aws-amplify';


export default {
  components: {
    TheHeader,
  },
  created() {
    Auth.currentSession()
        .then(data => {
          // Add the newly created user to our local store.
          this.$store.dispatch('authStore/setUserData', {
            userConfirmed: data.idToken.payload.email_verified,
            userId: data.idToken.payload.sub,
            username: data.idToken.payload['cognito:username'],
            email: data.idToken.payload.email,
            isAuthenticated: true
          })
        })
        .catch(() => {
          this.$store.dispatch('authStore/setUserData', {
            userConfirmed: null,
            userId: null,
            username: null,
            email: null,
            isAuthenticated: false
          })
        });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.router-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.router-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.router-enter-active {
  transition: all 0.3s ease-out;
}

.router-leave-active {
  transition: all 0.3s ease-in;
}

.router-enter-to,
.router-leave-from {
  opacity: 100;
  transform: translateY(0);
}

</style>