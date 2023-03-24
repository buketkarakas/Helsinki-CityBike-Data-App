import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

import StationService from "../services/stations";

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
    averageDistance: number

}

export default function Station() {
   
    const [station, setStation] = useState<IStation>();
    const [journeyStats, setJourneyCounts] = useState<IJourneyStats>();

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
            .then(journeyCounts => {
                setJourneyCounts(journeyCounts)
            })
    }, []);

    return (
        <div style={{height: "100%",padding:"10%",  backgroundImage: "url(\"https://images.unsplash.com/photo-1511288561564-8fdcce26ad5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80\")"}}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        {station ? station.finnishname : "Loading"}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {station?.swedishname}
                    </Typography>
                    <Typography variant="body2">
                        {station?.finnishaddress} ({station?.swedishaddress})
                        <br />
                        {station?.finnishcity} ({station?.swedishcity})
                        <br />
                        <br />
                        <b>Capacity: </b> {station?.capacity}
                        <br />
                        <b>Starting Journeys:</b> {journeyStats?.startingJourneysCount}
                        <br />
                        <b>Ending Journeys:</b> {journeyStats?.endingJourneysCount}
                        <br />
                        <b>Average distance: </b> {Number(journeyStats?.averageDistance).toPrecision(3)} km
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}