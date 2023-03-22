import axios from "axios";
const baseUrl = "http://localhost:8000/journeys"

const getAll = (page:string) => {
    const request = axios.get(`${baseUrl}/${page}`);
    return request.then(response => response.data)
}

export default {getAll};