<template>
  <li>
    <div>
      <a>{{ username }}</a>
    </div>
    <div>
      <p>{{ message }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["username", "message"],
  computed: {
    senderProfileURL() {
      return "www.traktrain.com/lhkbeats";
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>