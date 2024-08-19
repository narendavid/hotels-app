import axios from "axios"

const http = axios.create({
    baseURL: import.meta.env.BASE_URL
})

export default http