import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export default function BoxComp() {
//   return (
//     <Container maxWidth="sm">
//         <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
//         <Button>Save</Button>
//         </Box>
//     </Container>

//   );
    <Box
    sx={{
    width: 300,
    height: 300,
    backgroundColor: 'primary.dark',
    '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7],
    },
    }}
/>
}


// serves as a wrapper component for most of the CSS utility needs.
