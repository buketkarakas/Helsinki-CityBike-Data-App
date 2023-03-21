import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';

import StationService from '../services/stations'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

interface IStation {
    stationId: Number,
    finnishName: string,
    swedishName: string,
    englishName: string,
    finnishAddress: string,
    swedishAddress: string,
    finnishCity: string,
    swedishCity: string,
    operator: string,
    capacity: string,
    xCoord: string,
    yCoord: string

}

export default function Station() {
   
    const [station, setStation] = useState<IStation>();

    const {id}:any = useParams()
    
    useEffect(() => {
        StationService
        .getOne(id)
        .then( station => {
            setStation(station)
            console.log(station)
        }
        )
    }, [])

  console.log("station", station)
  return (
    <div style={{height: "100%",padding:"10%",  backgroundImage: `url("https://images.unsplash.com/photo-1511288561564-8fdcce26ad5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80")`}}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
        {station ? station.finnishName : "Loading"}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {station?.swedishName}
        </Typography>
        <Typography variant="body2">
          {station?.finnishAddress} ({station?.swedishAddress})
          <br />
          {station?.finnishCity} ({station?.swedishCity})
          <br />
          <b>Capacity: </b> {station?.capacity}
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}