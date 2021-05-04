<template>
  <span class="badge">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: ["type", "title"],
};
</script>

<style scoped>
.badge {
  background-color: #71008d;
  color: white;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}
</style>