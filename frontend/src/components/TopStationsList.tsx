import { List, ListItem, ListItemText, Typography } from "@mui/material";

// Assuming `topStations` is an array of objects with `name` and `count` properties

const TopStationsList = ( props:any) => {
    const title = props.title;
    const topStations = props.stations;
    return (
        <>
            <Typography variant="h6" component="h2">{title}</Typography>
            <List>
                {topStations.map((station:any, index:any) => (
                    <ListItem key={station.finnishname}>
                        <ListItemText primary={`${index + 1}. ${station.finnishname}`} secondary={`${station.count} journeys`} />
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default TopStationsList;