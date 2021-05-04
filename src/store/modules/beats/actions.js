export default {
    uploadBeat(context, data) {
        const newBeat = {
            id: context.rootGetters.userId,
            libraryID: context.rootGetters.libraryId,
            title: data.formTitle,
            artist: 'LHK',
            createdAt: '30/03/2021',
            updatedAt: '30/03/2021',
            thumbnail: 'yma.jpg',
            audio: 'REGARDLESS++ (Prod. By LHK) 158BPM.mp3',
            genre: 'Trap',
            tags: data.formTags,
            public: true,
            prices: [125, 250, 500],
            bpm: data.formBPM,
            schedule: null,
            split: null,
            free: false,
        }
        context.commit('uploadBeat', newBeat)
    }
};