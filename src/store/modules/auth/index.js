import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            user: null,
            userConfirmed: null,
            userSub: null,
            userId: null,
            username: null,
            email: null,
            signedIn: false,
        }
    },
    mutations,
    actions,
    getters
}