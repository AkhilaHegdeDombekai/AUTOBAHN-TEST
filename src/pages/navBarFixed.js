import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import '../App.css'

const theme = createTheme();
export default function NavBarFixed() {
    return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
<AppBar position="relative">
<Link to="/" className='link-color' style={{ textDecoration: "none", ml: 3,color: 'white' }}> <Toolbar>
          <AgricultureIcon sx={{ mr: 1, width:'2em', height:'3em' }} />
          <Typography variant="h6" color="inherit" noWrap>
          AUTOBAHN TEST
          </Typography>
          {/* <Typography variant="h6" color="inherit" noWrap sx={{ml:5}}>
          <Link to='/create'>CREATE</Link>
          </Typography> */}
        </Toolbar>
        </Link>
      </AppBar>
      </ThemeProvider>
    );
}