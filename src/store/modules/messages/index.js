import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            messages: [
                {
                    id: 1,
                    senderId: "usr1",
                    senderUsername: "luke123halley",
                    recieverId: "usr2",
                    recieverUsername: "jake123halley",
                    messageBody: "Yo"
                },
                {
                    id: 2,
                    senderId: "usr1",
                    senderUsername: "luke123halley",
                    recieverId: "usr2",
                    recieverUsername: "jake123halley",
                    messageBody: "This is luke."
                },
                {
                    id: 3,
                    senderId: "usr2",
                    senderUsername: "jake123halley",
                    recieverId: "usr1",
                    recieverUsername: "luke123halley",
                    messageBody: "Yo bro"
                },
                {
                    id: 4,
                    senderId: "usr2",
                    senderUsername: "jake123halley",
                    recieverId: "usr1",
                    recieverUsername: "luke123halley",
                    messageBody: "This is jake."
                }
            ]
        }
    },
    mutations,
    actions,
    getters
}

