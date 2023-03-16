import Table from 'react-bootstrap/Table';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'departureTime',
    headerName: 'Departure Time',
    width: 150,
    editable: true,
  },
  {
    field: 'returnTime',
    headerName: 'Return Time',
    width: 150,
    editable: true,
  },
  {
    field: 'departureStationId',
    headerName: 'Departure Station Id',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'departureStationName',
    headerName: 'Departure Station Name',
    width: 110,
    editable: true,
  },
  {
    field: 'returnStationId',
    headerName: 'Return Station Id',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'returnStationName',
    headerName: 'Return Station Name',
    width: 110,
    editable: true,
  },
  {
    field: 'coveredDistance',
    headerName: 'Covered Distance (km)',
    type: 'number',
    width: 110,
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

function JourneyTable() {
  return (
    <div  style={{ height: 400, width: '80%', backgroundColor: "white" }}>
        <DataGrid
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
        
        />
    </div>
  );
}

export default JourneyTable;