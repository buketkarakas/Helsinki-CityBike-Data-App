import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";

import StationService from "../services/stations";
import TopStationsList from "./TopStationsList";
import StationInfo from "./StationInfo";

interface IStation {
    stationid: number,
    finnishname: string,
    swedishname: string,
    englishname: string,
    finnishaddress: string,
    swedishaddress: string,
    finnishcity: string,
    swedishcity: string,
    operator: string,
    capacity: string,
    xCoord: string,
    yCoord: string

}

interface IJourneyStats {
    startingJourneysCount: number,
    endingJourneysCount: number,
    averageDistance: number,
    topDepartureStations: [],
    topReturnStations: []

}

export default function Station() {
   
    const [station, setStation] = useState<IStation>();
    const [journeyStats, setJourneyStats] = useState<IJourneyStats>();


    const {id}:any = useParams();
    
    useEffect(() => {
        StationService
            .getOne(id)
            .then( station => {
                setStation(station);
                console.log(station);
            }
            );
        StationService
            .getJourneyStats(id)
            .then(journeyStats => {
                setJourneyStats(journeyStats);
            });
    }, []);

    return (
        <div style={{height: "100%",padding:"10%",  backgroundImage: "url(\"https://images.unsplash.com/photo-1511288561564-8fdcce26ad5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80\")"}}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <StationInfo station={station} journeyStats={journeyStats}  />
                        </Grid>
                        <Grid item xs={4}>
                            <TopStationsList title="Top Departure Stations" stations = {journeyStats?.topDepartureStations || []}/>
                        </Grid>
                        <Grid item xs={4}>
                            <TopStationsList title="Top Return Stations" stations = {journeyStats?.topReturnStations || []}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            
        </div>
    );
}