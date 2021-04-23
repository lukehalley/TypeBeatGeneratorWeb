import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            userId: null,
            username: null,
            email: null,
            signedIn: false,
            authState: null,
            authData: null
        }
    },
    mutations,
    actions,
    getters
}