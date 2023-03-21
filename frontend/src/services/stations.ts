import axios from "axios";
const baseUrl = "http://localhost:8000/stations"

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data)
}

const getOne = (id:any) => {
    const request = axios.get(`${baseUrl}/${id}`);
    console.log("ID: "+id)
    return request.then(response => response.data)
}

export default {getAll, getOne};