import { useEffect, useState } from "react";
import { DataGrid, GridColDef, gridClasses} from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { alpha, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import StationService from "../services/stations";
import TablePagination from "@mui/material/TablePagination";


const ODD_OPACITY = 0.2;


/* const rows = [
    { id: 501, name: 'Hanasaari' },
    { id: 500, name: 'Hanasaari' },
    { id: 54, name: 'Hanasaari' },
    { id: 58, name: 'Hanasaari' },
    { id: 645, name: 'Hanasaari' },
    { id: 3254, name: 'Hanasaari' },
    { id: 345, name: 'Hanasaari' },
    { id: 67, name: 'Hanasaari' },
    { id: 347, name: 'Hanasaari' },
  ]; */

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.even`]: {
        backgroundColor: theme.palette.grey[200],
        "&:hover, &.Mui-hovered": {
            backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
            "@media (hover: none)": {
                backgroundColor: "lightgray",
            },
        },
        "&.Mui-selected": {
            backgroundColor: alpha(
                theme.palette.primary.main,
                ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
            "&:hover, &.Mui-hovered": {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity,
                ),
                // Reset on touch devices, it doesn't add specificity
                "@media (hover: none)": {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        ODD_OPACITY + theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    },
}));



function StationsTable() {
    const navigate = useNavigate();

    const [stations, setStations] = useState([]);
    const [page, setPage] = useState(0);
    const pageSize = 50;
    
    useEffect(() => {
        StationService
            .getAll(page.toString())
            .then( stations => {
                setStations(stations);
                console.log(stations);
            }
            );
    },  [page, pageSize]);

    function handlePageChange(event:any, value:any) {
        setPage(value);
    }


    const columns: GridColDef[] = [
        { field: "stationid", headerName: "ID", width: 90 },
        {
            field: "finnishname",
            headerName: "Station Name",
            width: 170
        },
        {
            field: "Details",
            renderCell: (cellValues) => {
            
      
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => navigate(`/station/${cellValues.id}`)}
                    >
                Details
                    </Button>
                );
            }
        },
    ];

    return (
        <Box sx={{ height: "90%", width: "100%" , padding: "5%"}}>
            <StripedDataGrid
                components={
                    {
                        Pagination: () => (
                            <TablePagination
                                component="div"
                                count = {-1}
                                page = {page}
                                onPageChange = {handlePageChange}  
                                rowsPerPage = {pageSize}
                                rowsPerPageOptions = {[-1]}
                            />
                        )
                    }
                }
                rows={stations}
                getRowId={(row) => row.stationid}
                columns={columns}
                sx={{background:"lightgray"}}
                getRowClassName={(params) =>
                    params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
                }
                disableRowSelectionOnClick
            
            />
        </Box>
    );
}

export default StationsTable;