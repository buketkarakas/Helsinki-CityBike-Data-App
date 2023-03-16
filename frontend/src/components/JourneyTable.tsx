import Table from 'react-bootstrap/Table';
import { DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';

const ODD_OPACITY = 0.2;


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'departureTime',
    headerName: 'Departure Time',
    width: 170,
    editable: true,
  },
  {
    field: 'returnTime',
    headerName: 'Return Time',
    width: 170,
    editable: true,
  },
  {
    field: 'departureStationId',
    headerName: 'Departure Station Id',
    type: 'number',
    width: 140,
    editable: true,
  },
  {
    field: 'departureStationName',
    headerName: 'Departure Station Name',
    width: 180,
    editable: true,
  },
  {
    field: 'returnStationId',
    headerName: 'Return Station Id',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'returnStationName',
    headerName: 'Return Station Name',
    width: 180,
    editable: true,
  },
  {
    field: 'coveredDistance',
    headerName: 'Covered Distance (km)',
    type: 'number',
    width: 160,
    editable: true,
  },
  {
    field: 'duration',
    headerName: 'Duration (min)',
    type: 'number',
    width: 110,
    editable: true,
  },
]

const rows = [
    { id: 1, departureTime: '2021-05-31 23:57:25', returnTime: '2021-06-01 00:05:46', departureStationId: 94,departureStationName: "Laajalahden aukio", returnStationId: 100, "returnStationName": "Teljäntie",  coveredDistance: 2043, duration: 500 },
    { id: 2, departureTime: '2021-05-31 23:57:25', returnTime: '2021-06-01 00:05:46', departureStationId: 94,departureStationName: "Laajalahden aukio", returnStationId: 100, "returnStationName": "Teljäntie",  coveredDistance: 2043, duration: 500 },
    { id: 3, departureTime: '2021-05-31 23:57:25', returnTime: '2021-06-01 00:05:46', departureStationId: 94,departureStationName: "Laajalahden aukio", returnStationId: 100, "returnStationName": "Teljäntie",  coveredDistance: 2043, duration: 500 },
    { id: 4, departureTime: '2021-05-31 23:57:25', returnTime: '2021-06-01 00:05:46', departureStationId: 94,departureStationName: "Laajalahden aukio", returnStationId: 100, "returnStationName": "Teljäntie",  coveredDistance: 2043, duration: 500 },
    { id: 5, departureTime: '2021-05-31 23:57:25', returnTime: '2021-06-01 00:05:46', departureStationId: 94,departureStationName: "Laajalahden aukio", returnStationId: 100, "returnStationName": "Teljäntie",  coveredDistance: 2043, duration: 500 },
    { id: 6, departureTime: '2021-05-31 23:57:25', returnTime: '2021-06-01 00:05:46', departureStationId: 94,departureStationName: "Laajalahden aukio", returnStationId: 100, "returnStationName": "Teljäntie",  coveredDistance: 2043, duration: 500 },
    { id: 7, departureTime: '2021-05-31 23:57:25', returnTime: '2021-06-01 00:05:46', departureStationId: 94,departureStationName: "Laajalahden aukio", returnStationId: 100, "returnStationName": "Teljäntie",  coveredDistance: 2043, duration: 500 },
    { id: 8, departureTime: '2021-05-31 23:57:25', returnTime: '2021-06-01 00:05:46', departureStationId: 94,departureStationName: "Laajalahden aukio", returnStationId: 100, "returnStationName": "Teljäntie",  coveredDistance: 2043, duration: 500 },
    { id: 9, departureTime: '2021-05-31 23:57:25', returnTime: '2021-06-01 00:05:46', departureStationId: 94,departureStationName: "Laajalahden aukio", returnStationId: 100, "returnStationName": "Teljäntie",  coveredDistance: 2043, duration: 500 },
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

function JourneyTable() {
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
            
        />
        {/* <DataGrid
            sx={{
            boxShadow: 2,
            border: 2,
            bgcolor: "lightgray",
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
              color: 'primary.main',
            },
            }}
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
            pageSizeOptions={[5]}
        
        /> */}
</Box>
  );
}

export default JourneyTable;