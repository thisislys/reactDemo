import axios from "axios";

export function getProductList(id) {
    return axios.get("/getProductList",{
        params:{
            id
        }
    })
}