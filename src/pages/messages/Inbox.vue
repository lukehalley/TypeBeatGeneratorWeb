<template>
  <div>
    <section>
      <base-card>
        <header>
          <h2>Inbox</h2>
        </header>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasMessages && !isLoading">
          <message-item
              v-for="message in recievedMessages"
              :key="message.id"
              :username="message.senderUsername"
              :message="message.messageBody"
          ></message-item>
        </ul>
        <h3 v-else>No Messages Yet!</h3>
      </base-card>
    </section>
    <message-user></message-user>
  </div>
</template>

<script>
import MessageItem from "../../components/messages/MessageItem.vue";
import MessageUser from "../../components/messages/MessageUser.vue";

export default {
  computed: {
    recievedMessages() {
      return this.$store.getters["messageStore/getMessages"];
    },
    hasMessages() {
      return this.$store.getters["messageStore/hasMessages"];
    },
  },
  components: {
    MessageItem,
    MessageUser,
  },
  data() {
    return {
      isLoading: false,
    }
  },
  created() {
    this.loadMessages();
  },
  methods: {
    async loadMessages() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("messageStore/getMessages");
      } catch (err) {
        this.error =
            err.message ||
            "Something went wrong while we were fetching your messages!";
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  }
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