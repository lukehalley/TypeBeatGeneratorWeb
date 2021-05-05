import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            beats: [
                {
                    id: "1a",
                    ownerId: "usr1",
                    libraryID: "lib1",
                    title: 'REGARDLESS++ (Prod. By LHK)',
                    artist: 'LHK',
                    createdAt: '30/03/2021',
                    updatedAt: '30/03/2021',
                    thumbnail: 'yma.jpg',
                    audio: 'REGARDLESS++ (Prod. By LHK) 158BPM.mp3',
                    genre: 'Trap',
                    tags: ['Hip Hop'],
                    public: true,
                    prices: [125, 250, 500],
                    bpm: 158,
                    schedule: null,
                    split: null,
                    free: false,
                },
                {
                    id: "2a",
                    ownerId: "usr1",
                    libraryID: "lib1",
                    title: '4PF++ (Prod. By LHK) 148BPM',
                    artist: 'LHK',
                    createdAt: '30/03/2020',
                    updatedAt: '30/03/2020',
                    thumbnail: 'yma.jpg',
                    audio: '4PF++ (Prod. By LHK) 148BPM.mp3',
                    genre: 'Trap',
                    tags: ['Trap'],
                    public: true,
                    prices: [120, 200, 510],
                    bpm: 148,
                    schedule: null,
                    split: null,
                    free: false,
                },
                {
                    id: "3a",
                    ownerId: "usr1",
                    libraryID: "lib1",
                    title: 'INDIE CUNT++ (Prod. By LHK) 138BPM',
                    artist: 'LHK',
                    createdAt: '30/03/2020',
                    updatedAt: '30/03/2020',
                    thumbnail: 'yma.jpg',
                    audio: 'INDIE CUNT++ (Prod. By LHK) 138BPM.mp3',
                    genre: 'Trap',
                    tags: ['Alt'],
                    public: true,
                    prices: [120, 200, 510],
                    bpm: 148,
                    schedule: null,
                    split: null,
                    free: false,
                },
            ]
        }
    },
    mutations,
    actions,
    getters
}

