import axios from "axios";

export function getShopcarList() {
    return axios.get("/getShopcarList")
}