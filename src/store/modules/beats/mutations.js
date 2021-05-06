export default {
    addBeatLocally(state, payload) {
        state.beats.push(payload);
    },
    setBeatsLocally(state, payload) {
        console.log(payload);
        state.beats = payload;
    }
}