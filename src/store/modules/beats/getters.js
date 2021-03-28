export default {
    beats(state) {
        return state.beats
    },
    hasBeats(state) {
        return (state.beats && state.beats.length > 0);
    }
}