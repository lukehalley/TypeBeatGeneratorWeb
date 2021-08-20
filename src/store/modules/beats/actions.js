import {API} from 'aws-amplify';
import {createBeat, updateBeat} from '@/graphql/mutations';
import {listBeats, getBeat} from '@/graphql/queries';

import Beat from "@/store/classes/beatClass";
import {deleteBeat} from "../../../graphql/mutations";

function cleanTags(tagObject) {
    return Object.entries(tagObject).reduce((a, [k, v]) => (v == null ? a : (a[k] = v, a)), {})
}

export default {
    async createOrUpdateBeat(context, formData) {

        const mode = formData.mode;

        // Get current user id and username.
        const userId = context.rootGetters["authStore/userId"];
        const username = context.rootGetters["authStore/username"];

        // Get the beats tags.
        var tags = {
            tag1: formData.tags[0],
            tag2: formData.tags[1],
            tag3: formData.tags[2]
        };



        // Remove any null tags.
        let cleanedTags = cleanTags(tags)

        // Create new Beat object from Beat Class.
        let beat = new Beat(
            formData.id,
            formData.title,
            userId,
            username,
            {
                region: "eu-west-2",
                bucket: "tbg-beats",
                key: "thumbnail.png"
            },
            {
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
            {
                genre1: "Trap",
                genre2: "Hip Hop",
                genre3: "South"
            },
            cleanedTags,
            true,
            {
                mp3Price: formData.prices.mp3Price,
                wavPrice: formData.prices.wavPrice,
                TrackoutPrice: formData.prices.zipPrice,
                UnlimitedPrice: formData.prices.zipPrice,
                ExclusivePrice: formData.prices.zipPrice,
            },
            formData.bpm,
            "None",
            {
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
            false,
        )


        if (mode === "upload") {

            // Create the promise were going to use to create the new beat.
            const promise = API.graphql({
                query: createBeat,
                variables: {
                    input: beat
                },
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });

            // Create the beat, catch any errors.
            try {
                await promise.then(function () {

                });
            } catch (error) {

                // If uploading our beat caused an error, throw it.
                // When an error is thrown, the component which dispatched the action it can handle it.
                throw new Error(error.errors[0].message || "Failed to upload beat!")
            }
        } else if (mode === "update") {

            // Create the promise were going to use to create the new beat.
            const promise = API.graphql({
                query: updateBeat,
                variables: {
                    input: beat
                },
                authMode: 'AMAZON_COGNITO_USER_POOLS'
            });

            // Create the beat, catch any errors.
            try {
                await promise.then(function () {

                });
            } catch (error) {
                // If uploading our beat caused an error, throw it.
                // When an error is thrown, the component which dispatched the action it can handle it.
                throw new Error(error.errors[0].message || "Failed to upload beat!")
            }
        }


    },

    async getBeatsForUser(context, username) {

        // Fetch the beats.
        const fetchBeats = API.graphql({
            query: listBeats,
            variables: {
                filter: {
                    ownerUsername: {
                        eq: username
                    }
                },
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        })

        // Execute the get request, catch any errors.
        try {
            await (fetchBeats).then(function (beats) {

                // Gets the list of beats.
                const recievedBeats = beats.data.listBeats.items;

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
                    let cleanedTags = cleanTags(tags)

                    try {

                        let beat = new Beat(
                            recievedBeats[key].id,
                            recievedBeats[key].title,
                            recievedBeats[key].ownerId,
                            recievedBeats[key].ownerUsername,
                            {
                                region: recievedBeats[key].thumbnail.region,
                                bucket: recievedBeats[key].thumbnail.bucket,
                                key: recievedBeats[key].thumbnail.key
                            },
                            {
                                mp3: {
                                    region: recievedBeats[key].audio.mp3.region,
                                    bucket: recievedBeats[key].audio.mp3.bucket,
                                    key: recievedBeats[key].audio.mp3.key,
                                },
                                wav: {
                                    region: recievedBeats[key].audio.wav.region,
                                    bucket: recievedBeats[key].audio.wav.bucket,
                                    key: recievedBeats[key].audio.wav.key,
                                },
                                zip: {
                                    region: recievedBeats[key].audio.zip.region,
                                    bucket: recievedBeats[key].audio.zip.bucket,
                                    key: recievedBeats[key].audio.zip.key,
                                },
                            },
                            {
                                genre1: recievedBeats[key].genre.genre1,
                                genre2: recievedBeats[key].genre.genre2,
                                genre3: recievedBeats[key].genre.genre3
                            },
                            cleanedTags,
                            true,
                            {
                                mp3Price: recievedBeats[key].price.mp3Price,
                                wavPrice: recievedBeats[key].price.wavPrice,
                                TrackoutPrice: recievedBeats[key].price.TrackoutPrice,
                                UnlimitedPrice: recievedBeats[key].price.UnlimitedPrice,
                                ExclusivePrice: recievedBeats[key].price.ExclusivePrice
                            },
                            recievedBeats[key].bpm,
                            recievedBeats[key].schedule,
                            {
                                split1: {
                                    email: recievedBeats[key].split.split1.email,
                                    percentage: recievedBeats[key].split.split1.percentage,
                                },
                                split2: {
                                    email: recievedBeats[key].split.split2.email,
                                    percentage: recievedBeats[key].split.split2.percentage,
                                },
                                split3: {
                                    email: recievedBeats[key].split.split3.email,
                                    percentage: recievedBeats[key].split.split3.percentage,
                                },
                                split4: {
                                    email: recievedBeats[key].split.split4.email,
                                    percentage: recievedBeats[key].split.split4.percentage,
                                }
                            },
                            recievedBeats[key].free,
                        )

                        newBeats.push(beat)

                    } catch (e) {

                        console.error(e)

                    }

                }

                // Add the fetched beats to our local list of Beats.
                context.commit('setBeatsLocally', newBeats)
            });
        } catch (error) {
            // If getting our beats caused an error, throw it.
            // When an error is thrown, the component which dispatched the action it can handle it.
            throw new Error(error.errors[0].message || "Failed to load beats!")
        }
    },

    async getBeatById(context, id) {

        // Fetch the beat.
        const fetchBeatByID = API.graphql({
            query: getBeat,
            variables: {id: id},
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        })

        // Execute the get request, catch any errors.
        try {
            return new Promise((resolve, reject) => {
                fetchBeatByID.then(function (beat) {

                    resolve(beat.data['getBeat'])

                }).catch((error) => {
                    reject(error)
                });
            })

        } catch (error) {

            // If getting our beat caused an error, throw it.
            // When an error is thrown, the component which dispatched the action it can handle it.
            throw new Error(error.errors[0].message || "Failed to load beat!")
        }
    },

    async deleteBeatById(context, id) {

        // Fetch the beat.
        const deleteBeatByID = API.graphql({
            query: deleteBeat,
            variables: {
                input: {
                    id: id
                }
            },
            authMode: 'AMAZON_COGNITO_USER_POOLS'
        })

        // Execute the get request, catch any errors.
        try {
            return new Promise((resolve, reject) => {
                deleteBeatByID.then(function () {

                    resolve()

                }).catch((error) => {
                    reject(error)
                });
            })

        } catch (error) {

            // If getting our beat caused an error, throw it.
            // When an error is thrown, the component which dispatched the action it can handle it.
            throw new Error(error.errors[0].message || "Failed to delete beat!")
        }
    }


};