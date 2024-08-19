import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function  AppBars() {
  return (
    <Box  sx={{ padding:'10px',width: '100%', maxWidth: '600px' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            color="inherit"
            aria-label="menu"
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
           
        </Toolbar>
      </AppBar>
    </Box>
  );
}
