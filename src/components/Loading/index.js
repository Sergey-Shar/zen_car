import  React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const CircularIndeterminate = () => {
  return (
    <Box sx={{ display: 'flex', width:"100vw", height:"100vh", justifyContent:'center', alignItems:"center"  }}>
      <CircularProgress />
    </Box>
  );
}

export default(CircularIndeterminate)
