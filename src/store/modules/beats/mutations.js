export default {
    addBeatLocally(state, payload) {
        state.beats.push(payload);
    },
    setBeatsLocally(state, payload) {
        state.beats = payload;
    }
}