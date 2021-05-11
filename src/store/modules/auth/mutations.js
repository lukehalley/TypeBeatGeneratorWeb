export default {
    setUser(state, payload) {
        state.user = payload.user;
        state.userConfirmed = payload.userConfirmed;
        state.userSub = payload.userSub;
        state.userId = payload.userId;
        state.username = payload.user.username;
        state.email = payload.user.email;
    }
}