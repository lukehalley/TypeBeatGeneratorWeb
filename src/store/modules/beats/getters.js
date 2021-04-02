export default {
    // State removed for now as param.
    beats(state) {
        return state.beats
    },
    hasBeats(state) {
        return (state.beats && state.beats.length > 0);
    }
}