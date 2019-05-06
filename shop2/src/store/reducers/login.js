const defaultState = {
    userToken: ""
}
const LoginReduccer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_USRETOKEN":
            return { ...state, userToken: payload }
        default:
            return state;
    }
}
export default LoginReduccer;