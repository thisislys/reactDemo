const defaultState = {
    shopcarList: [{
        "name": "苹果",
        "price": 10,
        "address": "shandong",
        "img": "//img11.360buyimg.com/n2/s240x240_jfs/t23839/6/2329458134/547797/e0c3ca7d/5b7cb504Ne746d2e6.jpg!q70.jpg",
        "count": 0,
        "isCheck": false
    }],
    summary: 0,
    total: 0,
}

const ShopcarReducers = (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'UPDATE':
            return { ...state, shopcarList: payload }
        case 'PLUS':
            return { ...state, shopcarList: [...payload] }
        case 'MINUS':
            return { ...state, shopcarList: [...payload] }
        case 'TOTAL':
            return { ...state, total: payload }
        case 'SUMMARY':
            return { ...state, summary: payload }
        case "CHECKED":
            return { ...state, shopcarList: [...payload] }
        default:
            return state;
    }
}

export default ShopcarReducers