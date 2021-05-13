export default {
    setCurrentUser(state, payload) {
        state.userConfirmed = payload.userConfirmed;
        state.userId = payload.userId;
        state.username = payload.username;
        state.email = payload.email;
        state.isAuthenticated = payload.isAuthenticated;
    },
    resetCurrentUser(state) {
        state.userConfirmed = null;
        state.userId = null;
        state.username = null;
        state.email = null;
        state.isAuthenticated = false;
    },
}