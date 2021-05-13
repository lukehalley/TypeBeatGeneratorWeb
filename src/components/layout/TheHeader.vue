<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Find A Producer</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/beats">All Beats</router-link>
        </li>
        <li>
          <router-link to="/upload">Upload</router-link>
        </li>
        <li>
          <router-link to="/inbox">Inbox</router-link>
        </li>
        <li>
          <span @click="signOut()">Sign Out</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // this.isUserSignedIn = this.$store.getters["authStore/signedIn"];
    // console.log("isUserSignedIn " + this.isUserSignedIn)
  },
  methods: {
    signOut() {
      // Sign Out

      // this.isLoading = true;

      console.log("before")
      const currentUser = this.$store.getters["authStore/user"]
      console.log(currentUser)

      this.$store.dispatch('authStore/signOut',
          {
            global: false,
          }
      ).then(() => {
        console.log("after")
        const currentUser = this.$store.getters["authStore/user"]
        console.log(currentUser)
        this.$router.replace("/auth");
      }).catch((err) => {
        this.error = err
      }).finally(() => {
        // this.isLoading = false;
      })
    },
  }
}
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active,
span {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

span {
  color: white;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active,
span {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>