import {useState, useEffect} from 'react';
import StationsTable from './StationsTable';
import StationService from '../services/stations'

const Stations = () => {

    return (
        <div style={{height: "100%", backgroundImage: `url("https://images.unsplash.com/photo-1511288561564-8fdcce26ad5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80")`}}>
            <StationsTable />
        </div>
    )
}

export default Stations;