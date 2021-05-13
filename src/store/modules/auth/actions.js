import {Auth} from 'aws-amplify';

export default {
    async signUp(context, payload) {
        // Create the User sign up promise.
        const signUpPromise = Auth.signUp({
            username: payload.username,
            password: payload.password,
            attributes: {
                email: payload.email
            }
        });


        // Sign up the user, catch any errors.
        await signUpPromise.then(function (user) {

            // Add the newly created user to our local store.
            context.commit('setCurrentUser', {
                user: user.user,
                userConfirmed: user.userConfirmed,
                userId: user.userSub,
                username: user.user.username,
                email: user.user.email,
            })

        }).catch(error => {
            // If signing up our user caused an error, throw it.
            // When an error is thrown, the component which dispatched the action it can handle it.
            throw new Error(error.message || "Error Signing Up!")
        });
    },
    async confirmSignUp(context, payload) {

        // Create the account validation promise.
        const validationPromise = Auth.confirmSignUp(
            payload.username,
            payload.code
        );

        // Validate the account, catch any errors.
        try {
            await validationPromise;
        } catch (error) {
            // If signing up our user caused an error, throw it.
            // When an error is thrown, the component which dispatched the action it can handle it.
            throw new Error(error.message || "Error Validating Account!")
        }

    },
    async signIn(context, payload) {
        // Sign In User promise.
        const signInPromise = Auth.signIn({
            username: payload.username,
            password: payload.password
        });


        // Sign In the user, catch any errors.
        await signInPromise.then(function (user) {

            // Add the newly created user to our local store.
            context.commit('setCurrentUser', {
                user: user,
                userConfirmed: user.attributes.email_verified,
                userId: user.attributes.sub,
                username: user.username,
                email: user.attributes.email,
            })

        }).catch(error => {
            // If signing in our user caused an error, throw it.
            // When an error is thrown, the component which dispatched the action it can handle it.
            throw new Error(error.message || "Error Signing In!")
        });
    },
    async signOut(context, payload) {
        // Sign In User promise.
        const signOutPromise = Auth.signOut({
            global: payload.global,
        });

        // Sign Out the user, catch any errors.
        await signOutPromise.then(function () {

            // Add the newly created user to our local store.
            context.commit('resetCurrentUser')

        }).catch(error => {
            // If signing in our user caused an error, throw it.
            // When an error is thrown, the component which dispatched the action it can handle it.
            throw new Error(error.message || "Error Signing Out!")
        });
    },
    async checkIsUserAuthenticated(context) {

        // Check User authenticated promise.
        const currentAuthenticatedUserPromise = Auth.currentAuthenticatedUser();

        // Check if the user is authenticated, if we get an error we know they are not.
        await currentAuthenticatedUserPromise.then(function () {

            // The user is logged in so return true.
            console.log("User Logged In!")
            context.commit('setUserAuth', {
                auth: true
            })


        }).catch(() => {

            // There was an error, so we know the user is not logged - return false.
            console.log("User Logged Out!")
            context.commit('setUserAuth', {
                auth: false
            })

        });
    }

};