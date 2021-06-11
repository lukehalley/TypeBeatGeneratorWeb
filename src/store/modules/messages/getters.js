export default {
    // Get messages intended for current user to receive.
    getMessages(state, _, _2, rootGetters) {
        const userId = rootGetters["authStore/userId"]
        const messages = state.messages.filter(message => message.recieverId === userId)
        return messages
    },
    // Check if the user has an messages in his/her inbox.
    hasMessages(_, getters) {
        return (getters.getMessages && getters.getMessages.length > 0);
    }
}