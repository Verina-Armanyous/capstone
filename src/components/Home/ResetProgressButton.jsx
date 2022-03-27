import React, {useState} from 'react';
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';


export default function ResetProgressButton() {
    const clearCacheData = () => {
        localStorage.clear();
        window.location.reload();

        }
  
    return (
      <div>
        <AppBar style={{ background: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <Button variant="outlined" style={{backgroundColor: "#cc3300", color:'white'}} onClick={clearCacheData}>
              <RestartAltIcon style={{color: "white"}}/>
              Reset Progress
            </Button>
          </Toolbar>
        </AppBar>

      </div>
    );
  }