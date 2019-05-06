const defaultState = {
    goodsList: []
}

const GoodsListReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GOODS_UPDATE":
            return { ...state, goodsList: [...payload] }
        default:
            return state;
    }
}

export default GoodsListReducer;