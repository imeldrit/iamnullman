import React from "react";

import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loading(props) {
    const { size } = props;

    return (
        <div style={{"zIndex":"9999"}}>
        <Box position="absolute" left="50%" top="50%" textAlign="center" style={{ transform: "translate(-50%, -50%)" }} className="transform duration-[100ms] transition-opacity">
            <p style={{"fontSize":"20px","fontFamily":"'Source Sans Pro', sans-serif"}}>NullMan.TecH</p>
            <CircularProgress
                size={size}
                disableShrink={true}
            />
        </Box>
        </div>
    );
}