import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import data from './assets/MOCK_DATA (1).json'
import { AnyCnameRecord } from 'dns';
import { httpGetVisitors } from './http/visitors';
import { Button } from '@mui/material';




const columns: GridColDef[] = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  
  {
    field: 'clubName',
    headerName: 'Club Name',
    width: 150,
    editable: true,
  },
  {
    field: 'designation',
    headerName: 'Designation',
    width: 250,
    editable: true,
  },
  {
    field: 'code',
    headerName: 'Code',
    width: 200,
    editable: true,
  }
];



// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

export default function DataGridDemo() {
    const [visitors, setVisitors] = React.useState<[]>([])

    const getAllVisitors = async (skip: number, take: number) => {
        const visitorsData = await httpGetVisitors(skip, take);
        setVisitors([...visitors, ...visitorsData]);
    
    }
    const handleClick = () =>{
        getAllVisitors(0, 400);
    }
    console.log(visitors);
  return (
    <Box sx={{ height: 800, width: '100%' }}>
        <Button onClick={handleClick}>Click Me</Button>
      <DataGrid
        rows={visitors}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}