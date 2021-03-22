export default {
    uploadBeat(context, data) {
        console.log(context);
        const newBeat = {
            id: "1234a",
            ownerId: context.rootGetters["userStore/userId"],
            libraryID: context.rootGetters["userStore/libraryId"],
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