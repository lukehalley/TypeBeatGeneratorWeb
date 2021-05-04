export default {
    sendMessage(state, payload) {
        state.messages.push(payload);
    }
}