import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            beats: [
                // {
                //     id: "12",
                //     title: "Local Beat 1",
                //     owner: {
                //         ownerId: "usr1",
                //         ownerUsername: "luke123halley"
                //     },
                //     thumbnail: {
                //         region: "eu-west-2",
                //         bucket: "tbg-beats",
                //         key: "thumbnail.png"
                //     },
                //     genre: {
                //         genre1: "Trap",
                //         genre2: "Hip Hop",
                //         genre3: "South"
                //     },
                //     tags: {
                //         tag1: "Hip Hop",
                //         tag2: "Trap",
                //         tag3: "Alt"
                //     },
                //     public: true,
                //     price: {
                //         MP3Price: 100,
                //         WAVPrice: 250,
                //         TrackoutPrice: 500,
                //         UnlimitedPrice: 500,
                //         ExclusivePrice: 500
                //     },
                //     bpm: 155,
                //     schedule: "None",
                //     free: false,
                //     createdAt: "2021-05-06T10:57:56.369Z",
                //     updatedAt: "2021-05-06T10:57:56.369Z"
                // }
            ]
        }
    },
    mutations,
    actions,
    getters
}

