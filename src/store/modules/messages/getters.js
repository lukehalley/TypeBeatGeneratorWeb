export default {
    // Get all messages - shouldn't be used.
    getAllMessages(state) {
        return state.messages
    },
    // Get messages intended for current user to receive.
    getMessagesForUser(state, _, _2, rootGetters) {
        const userId = rootGetters["userStore/userId"]
        const messages = state.messages.filter(message => message.recieverId === userId)
        return messages
    },
    // Check if the user has an messages in his/her inbox.
    hasMessages(_, getters) {
        return (getters.getMessagesForUser && getters.getMessagesForUser.length > 0);
    }
}