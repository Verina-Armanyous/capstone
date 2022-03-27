import React, { useState } from "react";
import { RWebShare } from "react-web-share";
import Button from '@mui/material/Button';


function ShareButton(){
  return (
    <div>
      <RWebShare
        data={{
          text: "Learn more about other cultures and be a true global citizen",
          url: "https://cocky-mahavira-14d902.netlify.app/",
          title: "Debunk my misconceptions",
        }}
      >
        <Button size="medium" variant="contained" style={{backgroundColor: 'black'}}>Share with your friends 🔗</Button>
      </RWebShare>
    </div>
  );
};

export default ShareButton;