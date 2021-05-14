export default {
    addMessageLocally(state, payload) {
        state.messages.push(payload);
    },
    setMessagesLocally(state, payload) {
        state.messages = payload;
    }
}