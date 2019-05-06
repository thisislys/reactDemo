
const defaultState = {
    rankList: []
}

const RankReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "UPDATE":
            return { ...state, rankList: payload }
        default:
            return state;
    }
}

export default RankReducer;