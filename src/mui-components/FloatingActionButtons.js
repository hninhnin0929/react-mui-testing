import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import { FavoriteBorder } from '@mui/icons-material';

export default function FloatingActionButtons() {
    return(
        <Box sx={{ '& > : not(style)': { m : 1}}}>
            <Fab color="primary" aria-label='add'>
                <AddIcon/>
            </Fab>
            <Fab color='secondary' aria-label='edit'>
                <EditIcon/>
            </Fab>
            <Fab variant='extended'>
                <NavigationIcon sx={{mr: 1 }} />
                Navigate
            </Fab>
            <Fab disable aria-label="like">
                <FavoriteBorder />
            </Fab>
        </Box>
    );
}
