export default {
    setCurrentUser(state, payload) {
        state.user = payload.user;
        state.userConfirmed = payload.userConfirmed;
        state.userSub = payload.userSub;
        state.userId = payload.userId;
        state.username = payload.user.username;
        state.email = payload.user.email;

        console.log(state.user)

        console.log(state.userId, state.username)
    },
    resetCurrentUser(state) {
        state.user = null;
        state.userConfirmed = null;
        state.userSub = null;
        state.userId = null;
        state.username = null;
        state.email = null;
    }
}