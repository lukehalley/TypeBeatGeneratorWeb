import {createStore} from 'vuex'

import authModule from './modules/auth/index'
import beatsModule from './modules/beats/index'
import messagesModule from './modules/messages/index'

const store = createStore({
    modules: {
        authStore: authModule,
        beatStore: beatsModule,
        messageStore: messagesModule
    },
    state() {
        return {userId: 'usr1'}
    },
    getters: {
        userId(state) {
            return state.userId
        }
    }
});

export default store;