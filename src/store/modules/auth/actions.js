import {Auth} from 'aws-amplify';

export default {
    async signUp(context, payload) {
        try {

            // Create the User sign up promise.
            const signUpPromise = Auth.signUp({
                username: payload.username,
                password: payload.password,
                attributes: {
                    email: payload.email
                }
            });


            // Sign up the user, catch any errors.
            try {
                await signUpPromise.then(function (user) {
                    console.log(user);

                    // Add the newly created user to our local store.
                    context.commit('setUser', {
                        user: user.user,
                        userConfirmed: user.userConfirmed,
                        userId: user.userSub,
                        username: user.user.username,
                        email: user.user.email,
                    })

                });
            } catch (error) {
                // If signing up our user caused an error, throw it.
                // When an error is thrown, the component which dispatched the action it can handle it.
                console.log(error.message)
                throw new Error(error.message || "Failed to sign up!")
            }


        } catch (error) {
            console.log('error signing up:', error);
        }
    },
    async confirmSignUp(context, payload) {

        // Create the account validation promise.
        const validationPromise = Auth.confirmSignUp(
            payload.username,
            payload.code
        );

        // Validate the account, catch any errors.
        try {
            await validationPromise.then(function (result) {
                console.log(result);

                // Add the newly created user to our local store.
                // context.commit('setUser', {
                //     user: user.user,
                //     userConfirmed: user.userConfirmed,
                //     userId: user.userSub,
                //     username: user.user.username,
                //     email: user.user.email,
                // })

            });
        } catch (error) {
            // If signing up our user caused an error, throw it.
            // When an error is thrown, the component which dispatched the action it can handle it.
            console.log(error.message)
            throw new Error(error.message || "Error Validating Account!")
        }

    },
    async login(context, payload) {
        console.log(context, payload)
    }

};