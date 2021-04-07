import { API } from 'aws-amplify';
import { createBeat } from '@/graphql/mutations';
import * as queries from '@/graphql/queries';

export default {
    async uploadBeat(context, formData) {
        // Get current user id and username.
        const userId = context.rootGetters["userStore/userId"]
        const username = context.rootGetters["userStore/username"]

        // Create new Beat object.
        const newBeat = {
            title: formData.title,
            owner: {
                ownerId: userId,
                ownerUsername: username,
            },
            thumbnail: {
                region: "eu-west-2",
                bucket: "tbg-beats",
                key: "thumbnail.png"
            },
            audio: {
                mp3: {
                    region: "eu-west-2",
                    bucket: "tbg-beats",
                    key: "test.mp3"
                },
                wav: {
                    region: "eu-west-2",
                    bucket: "tbg-beats",
                    key: "test.wav"
                },
                zip: {
                    region: "eu-west-2",
                    bucket: "tbg-beats",
                    key: "test.zip"
                },
            },
            genre: {
                genre1: "Trap",
                genre2: "Hip Hop",
                genre3: "South"
            },
            tags: {
                tag1: formData.tags[0],
                tag2: formData.tags[1],
                tag3: formData.tags[2]
            },
            public: true,
            price: {
                MP3Price: formData.prices.mp3Price,
                WAVPrice: formData.prices.wavPrice,
                TrackoutPrice: formData.prices.zipPrice,
                UnlimitedPrice: formData.prices.zipPrice,
                ExclusivePrice: formData.prices.zipPrice,
            },
            bpm: formData.bpm,
            schedule: "None",
            split: {
                split1: {
                    email: "Collaborator 1",
                    percentage: 10
                },
                split2: {
                    email: "Collaborator 2",
                    percentage: 10
                },
                split3: {
                    email: "Collaborator 3",
                    percentage: 10
                },
                split4: {
                    email: "Collaborator 4",
                    percentage: 10
                }
            },
            free: false,
        }

        // Create the promise were going to use to create the new beat.
        const promise = API.graphql({
            query: createBeat,
            variables: { input: newBeat },
        });

        // Create the beat, catch any errors.
        try {
            await promise;
        } catch (error) {
            // Print out the actual error given back to us.
            console.error(error.errors[0].message);

            // If the error is because the request was cancelled we can confirm here.
            if (API.isCancel(error)) {
                // handle user cancellation logic.
                console.error(error.message);
            }
        }

        // Add the newely created beat to our local list of Beats.
        context.commit('addBeatLocally', { ...newBeat, id: userId })
    },
    async getBeats(context) {

        // Execute the get request, catch any errors.
        try {
            // Fetch the beats.
            const fetchBeats = await API.graphql({ query: queries.listBeats });

            // Gets the list of beats.
            const recievedBeats = fetchBeats.data.listBeats.items;

            // Create new beats list.
            const newBeats = []

            for (const key in recievedBeats) {

                // Get the beats tags.
                var tags = {
                    tag1: recievedBeats[key].tags.tag1,
                    tag2: recievedBeats[key].tags.tag2,
                    tag3: recievedBeats[key].tags.tag3
                }

                // Remove any null tags.
                let cleanedTags = Object.entries(tags).reduce((a, [k, v]) => (v == null ? a : (a[k] = v, a)), {})

                const beat = {
                    id: recievedBeats[key].id,
                    title: recievedBeats[key].title,
                    owner: {
                        ownerId: recievedBeats[key].owner.ownerId,
                        ownerUsername: recievedBeats[key].owner.ownerUsername
                    },
                    thumbnail: {
                        region: recievedBeats[key].thumbnail.region,
                        bucket: recievedBeats[key].thumbnail.bucket,
                        key: recievedBeats[key].thumbnail.key
                    },
                    genre: {
                        genre1: recievedBeats[key].genre.genre1,
                        genre2: recievedBeats[key].genre.genre2,
                        genre3: recievedBeats[key].genre.genre3
                    },
                    tags: cleanedTags,
                    public: true,
                    price: {
                        MP3Price: recievedBeats[key].price.MP3Price,
                        WAVPrice: recievedBeats[key].price.WAVPrice,
                        TrackoutPrice: recievedBeats[key].price.TrackoutPrice,
                        UnlimitedPrice: recievedBeats[key].price.UnlimitedPrice,
                        ExclusivePrice: recievedBeats[key].price.ExclusivePrice
                    },
                    bpm: recievedBeats[key].bpm,
                    schedule: recievedBeats[key].schedule,
                    free: recievedBeats[key].free,
                    createdAt: recievedBeats[key].createdAt,
                    updatedAt: recievedBeats[key].updatedAt
                }

                newBeats.push(beat)
            }

            // Add the fetched beats to our local list of Beats.
            context.commit('setBeatsLocally', newBeats)
        } catch (error) {
            // Print out the actual error given back to us.
            console.error(error);

            // If the error is because the request was cancelled we can confirm here.
            if (API.isCancel(error)) {
                // handle user cancellation logic.
                console.error(error.message);
            }
        }

    }
};