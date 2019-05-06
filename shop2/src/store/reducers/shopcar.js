const defaultState = {
    shopcarList: []
}

const ShopcarReducer = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "PLUS":
            return { ...state, shopcarList: [...payload] }
        case "MINUS":
            return { ...state, shopcarList: [...payload] }
        case "UPDATE":
        	console.log(payload)
            return { ...state, shopcarList: [...payload] }
        case "CHECK_ITEM":
            return { ...state, shopcarList: [...payload] }
        default:
            return state;
    }
}

export default ShopcarReducer;