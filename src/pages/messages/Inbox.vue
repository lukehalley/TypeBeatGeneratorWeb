<template>
  <section>
    <base-card>
      <header>
        <h2>Inbox</h2>
      </header>
      <ul v-if="hasRequests">
        <message-item
          v-for="message in recievedMessages"
          :key="message.id"
          :username="message.recieverUsername"
          :message="message.messageBody"
        ></message-item>
      </ul>
      <h3 v-else>No Messages Yet!</h3>
    </base-card>
  </section>
  <message-user></message-user>
</template>

<script>
import MessageItem from "../../components/messages/MessageItem.vue";
import MessageUser from "../../components/messages/MessageUser.vue";

export default {
  computed: {
    recievedMessages() {
      return this.$store.getters["messageStore/messages"];
    },
    hasRequests() {
      return this.$store.getters["messageStore/hasMessages"];
    },
  },
  components: {
    MessageItem,
    MessageUser,
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>