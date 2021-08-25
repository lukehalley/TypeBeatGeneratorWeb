<template>
  <li class="card">
    <h3>{{ title }}</h3>
    <h4>{{ artist }}</h4>
    <p>{{ beatIteamBPM }}</p>
    <div>
      <base-badge v-for="tag in tags" :key="tag" :title="tag">{{
        tag
      }}</base-badge>
    </div>
    <div class="actions">
      <base-button link mode="outline" :to="editLink">Edit</base-button>
      <base-button mode="outline" @click="deleteBeat(id)">Delete</base-button>
      <base-button to="/beats/b1/purchase">Purchase Beat</base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["id", "title", "artist", "bpm", "prices", "tags"],
  computed: {
    beatIteamBPM() {
      return this.bpm + "BPM";
    },
    editLink() {
      return "/beats/" + this.id;
    },
  },
  methods: {
    deleteBeat(id) {

      if(confirm("Do you really want to delete this beat?")){
        this.$store.dispatch('beatStore/deleteBeatById', id
        ).then(() => {
          this.$emit("reloadBeats");
        }).catch((err) => {
          throw err
        });
      }

    },
  }
};
</script>

<style scoped>
.card {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>