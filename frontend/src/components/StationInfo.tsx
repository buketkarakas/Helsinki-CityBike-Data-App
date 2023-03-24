import Typography from "@mui/material/Typography";


const StationInfo = (props:any) => {
    const station = props.station;
    const journeyStats = props.journeyStats;
    return <>
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
    </>;
};

export default StationInfo;

