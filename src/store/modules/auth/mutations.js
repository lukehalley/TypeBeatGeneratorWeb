export default {
    // setUserAuthState(state) {
    //     onAuthUIStateChange((authState, authData) => {
    //         console.log("Checking Auth Status...")
    //         if (authState === "signin") {
    //             state.signedIn = false
    //             state.authState = authState;
    //             state.authData = authData;
    //         } else if (authState === "signedin") {
    //             state.signedIn = true
    //             state.userId = authData.attributes.sub;
    //             state.username = authData.username;
    //             state.email = authData.attributes.email;
    //             state.authState = authState;
    //             state.authData = authData;
    //         }
    //
    //     })
    // },
    setUser(state, payload) {
        state.userId = payload.userId;
        state.username = payload.username;
        state.email = payload.email;
        state.authState = payload.authState;
        state.authData = payload.authData;
    }
}