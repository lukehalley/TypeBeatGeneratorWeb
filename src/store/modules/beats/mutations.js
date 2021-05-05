import { API } from 'aws-amplify';
import { createBeat } from '@/graphql/mutations';

export default {
    async uploadBeat(state, payload) {
        // state.beats.push(payload);
        await API.graphql({
            query: createBeat,
            variables: { input: payload },
        });
    }
}