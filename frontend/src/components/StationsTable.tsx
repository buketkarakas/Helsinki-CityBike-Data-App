import * as React from "react";
import { DataGrid, GridColDef, gridClasses, GridEventListener, useGridApiEventHandler, useGridApiContext, GridFooter } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';

const ODD_OPACITY = 0.2;


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Station Name',
    width: 170,
    editable: true,
  }
]

const rows = [
    { id: 501, name: 'Hanasaari' },
    { id: 501, name: 'Hanasaari' },
    { id: 501, name: 'Hanasaari' },
    { id: 501, name: 'Hanasaari' },
    { id: 501, name: 'Hanasaari' },
    { id: 501, name: 'Hanasaari' },
    { id: 501, name: 'Hanasaari' },
    { id: 501, name: 'Hanasaari' },
    { id: 501, name: 'Hanasaari' },
  ];

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

function Footer() {
    const [message, setMessage] = React.useState('');
    const apiRef = useGridApiContext();
  
    const handleRowClick: GridEventListener<'rowClick'> = (params) => {
      setMessage(`Movie "${params.row.title}" clicked`);
    };
  
    useGridApiEventHandler(apiRef, 'rowClick', handleRowClick);
  
    return (
      <React.Fragment>
        <GridFooter />
        {message && <Alert severity="info">{message}</Alert>}
      </React.Fragment>
    );
  }

function StationsTable() {
  return (
    <Box sx={{ height: '90%', width: '100%' , padding: "5%"}}>
        <StripedDataGrid
            rows={rows}
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
        slots={{footer: Footer}}
        disableRowSelectionOnClick
            
        />
</Box>
  );
}

export default StationsTable;