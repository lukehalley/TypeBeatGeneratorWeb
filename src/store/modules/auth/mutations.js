import {onAuthUIStateChange} from "@aws-amplify/ui-components";

export default {
    setUserAuthState(state) {
        onAuthUIStateChange((authState, authData) => {
            state.authState = authState;
            state.authData = authData;
        })
    }
}