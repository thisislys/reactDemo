import axios from "axios";

export function getRankList(argument) {
    const url = "http://localhost:3000/getRankList";
    return axios.get(url);
}