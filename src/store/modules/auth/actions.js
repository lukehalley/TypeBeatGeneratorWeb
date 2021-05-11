import {onAuthUIStateChange} from '@aws-amplify/ui-components'

export default {
    // checkUserAuthState(context) {
    //     context.commit('setUserAuthState')
    // },
    signUp(context) {
        onAuthUIStateChange((authState, authData) => {
            // console.log("Checking Auth Status...")
            // if (authState === "signin") {
            //     state.signedIn = false
            //     state.authState = authState;
            //     state.authData = authData;
            // } else if (authState === "signedin") {
            //     state.signedIn = true
            //     state.userId = authData.attributes.sub;
            //     state.username = authData.username;
            //     state.email = authData.attributes.email;
            //     state.authState = authState;
            //     state.authData = authData;
            // }
            context.commit('setUser', {
                userId: authData.attributes.sub,
                username: authData.username,
                email: authData.attributes.email,
                authState: authState,
                authData: authData
            })
        })

    }
};