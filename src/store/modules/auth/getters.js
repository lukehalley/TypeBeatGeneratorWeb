import store from "@/store/index";

export default {
    user(state) {
        return state.user
    },
    userConfirmed(state) {
        return state.userConfirmed
    },
    userId(state) {
        return state.userId
    },
    username(state) {
        return state.username
    },
    email(state) {
        return state.email
    },
    isAuthenticated(state) {
        store.dispatch('authStore/checkIsUserAuthenticated');
        return state.isAuthenticated
    }
};