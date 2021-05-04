import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            messages: [
                {
                    id: 1234,
                    senderId: 1,
                    senderUsername: "luke123halley",
                    recieverId: 2,
                    recieverUsername: "jake123halley",
                    messageBody: "Yo"
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}

