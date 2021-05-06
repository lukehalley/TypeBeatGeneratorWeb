import { createStore } from 'vuex'

import usersModule from './modules/users/index'
import beatsModule from './modules/beats/index'
import messagesModule from './modules/messages/index'

const store = createStore({
    modules: {
        userStore: usersModule,
        beatStore: beatsModule,
        messageStore: messagesModule
    },
    state() {
        return { userId: 'usr1' }
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
});

export default store;