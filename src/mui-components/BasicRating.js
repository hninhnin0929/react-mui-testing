import * as React from 'react';
import { Box, Rating, Typography } from '@mui/material';

export default function BasicRating(){
    const [value, setValue] = React.useState(2);

    return(
        <Box
            sx={{
                '& > legend': { mt: 2}
            }}
        >
            <Typography component="legend">Controlled</Typography>
            <Rating 
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <Typography component="legend">Read only</Typography>
            <Rating name='read-only' value={value} readOnly/>
            <Typography component="legent">Disabled</Typography>
            <Rating name="disabled" value={value} disabled />
            <Typography component="legend">No rating given</Typography>
            <Rating name="no-value" value={null} />
                <br></br>
            <Rating name="half-rating" defaultValue={3} precision={0.5}/>
        </Box>
    );
}