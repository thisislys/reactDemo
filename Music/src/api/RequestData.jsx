import axios from 'axios'

export function getTopListInfo() {
    return axios.get('/TopListInfo')
}
