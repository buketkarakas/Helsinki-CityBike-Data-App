import { useEffect, useState } from 'react';
import { DataGrid, GridColDef, gridClasses } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { alpha, styled } from '@mui/material/styles';
import journeyService from '../services/journeys'
import TablePagination from '@mui/material/TablePagination';

const ODD_OPACITY = 0.2;


const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'departuretime',
    headerName: 'Departure Time',
    width: 170,
    editable: true,
  },
  {
    field: 'returntime',
    headerName: 'Return Time',
    width: 170,
    editable: true,
  },
  {
    field: 'departurestationid',
    headerName: 'Departure Station Id',
    type: 'number',
    width: 140,
    editable: true,
  },
  {
    field: 'departurestationname',
    headerName: 'Departure Station Name',
    width: 180,
    editable: true,
  },
  {
    field: 'returnstationid',
    headerName: 'Return Station Id',
    type: 'number',
    width: 120,
    editable: true,
  },
  {
    field: 'returnstationname',
    headerName: 'Return Station Name',
    width: 180,
    editable: true,
  },
  {
    field: 'covereddistance',
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
  const [journeys, setJourneys] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [rowCount, setRowCount] = useState(0);

  const fetchData = async () => {
    journeyService
      .getAll(page.toString())
      .then( journeys => {
          setJourneys(journeys)
          setRowCount(journeys.count);
      })
  }
  useEffect(() => {
      fetchData()
  }, [page, pageSize])

  function handlePageChange(event:any, value:any) {
    setPage(value);
  }
  function handleChangeRowsPerPage(event:any) {
    setPageSize(parseInt(event.target.value, 50));
    setPage(0);
  }

  return (
    <Box sx={{ height: '90%', width: '100%' , padding: "5%"}}>
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
                onRowsPerPageChange = {handleChangeRowsPerPage}
                rowsPerPageOptions = {[10, 25, 50]}
              />
              )
            }
          }
          columns={columns}
          rows={journeys}  
          sx={{background:"lightgray"}}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
          }         
        />
       
</Box>
  );
}

export default JourneyTable;