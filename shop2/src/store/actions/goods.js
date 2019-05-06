import axios from "axios";

const getGoodsList = () => {
    return axios.get("http://localhost:3000/getGoodsList");
}
export function update(payload) {
    return function(dispatch) {
       
        return getGoodsList().then(res => {
            return dispatch({
                type: "GOODS_UPDATE",
                payload: res.data.data.categoryList
            })
        })
    }

}