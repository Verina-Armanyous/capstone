import React, {useState} from 'react';
import Button from '@mui/material/Button';

export default function ResetProgressButton() {
    const clearCacheData = () => {
        localStorage.removeItem("levels-state");
        window.location.reload();

        }
  
    return (
      <div>
        <Button variant="outlined" style={{backgroundColor: "#21b6ae"}} onClick={clearCacheData}>
          Reset Progress
        </Button>
      </div>
    );
  }