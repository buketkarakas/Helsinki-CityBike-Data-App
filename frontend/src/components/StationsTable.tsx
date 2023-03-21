import * as React from "react";
import { DataGrid, GridColDef, gridClasses, GridEventListener, useGridApiEventHandler, useGridApiContext, GridFooter, GridCellParams, GridRenderCellParams  } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { redirect, useNavigate } from "react-router-dom";


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
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        '@media (hover: none)': {
          backgroundColor: 'lightgray',
        },
      },
      '&.Mui-selected': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY + theme.palette.action.selectedOpacity,
        ),
        '&:hover, &.Mui-hovered': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY +
              theme.palette.action.selectedOpacity +
              theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              ODD_OPACITY + theme.palette.action.selectedOpacity,
            ),
          },
        },
      },
    },
  }));



function StationsTable({data}:any) {
    const navigate = useNavigate()

    const columns: GridColDef[] = [
        { field: 'stationId', headerName: 'ID', width: 90 },
        {
          field: 'finnishName',
          headerName: 'Station Name',
          width: 170,
          editable: true,
        },
        {
          field: "Details",
          renderCell: (cellValues) => {
            
      
            return (
              <Button
                variant="contained"
                color="primary"
                onClick={(event) => navigate(`/station/${cellValues.id}`)}
              >
                Details
              </Button>
            );
          }
        },
    ]

  return (
    <Box sx={{ height: '90%', width: '100%' , padding: "5%"}}>
        <StripedDataGrid
            rows={data}
            getRowId={(row) => row.stationId}
            columns={columns}
            initialState={{
                pagination: {
                paginationModel: {
                    pageSize: 5,
                },
                },
            }
        }
        sx={{background:"lightgray"}}
        pageSizeOptions={[5]}
        getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }
        disableRowSelectionOnClick
            
        />
</Box>
  );
}

export default StationsTable;