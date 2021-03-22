import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return { userId: 'usr1', username: 'luke123halley', libraryId: 'lib1' }
    },
    mutations,
    actions,
    getters
}