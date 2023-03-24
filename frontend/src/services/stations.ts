import axios from "axios";
const baseUrl = "http://localhost:8000/stations";

const getAll = (page:any) => {
    const request = axios.get(`${baseUrl}/paging/${page}`);
    return request.then(response => response.data);
};

const getOne = (id:any) => {
    const request = axios.get(`${baseUrl}/${id}`);
    return request.then(response => response.data);
};

const getJourneyStats = (id:any) => {
    const request = axios.get(`${baseUrl}/${id}/journeys`);
    return request.then(response => response.data);
}


export default {getAll, getOne, getJourneyStats};