import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { Fingerprint } from '@mui/icons-material';
import { ButtonGroup } from 'react-bootstrap';

export default function BasicButtons(){
    return(
        <Stack spacing={2} direction="row">
            <Button variant="text" size="small">Text</Button>
            <Button variant="contained" color="success" onClick={() => alert('clicked')}>Contained</Button>
            <Button variant="outlined">outlined</Button>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            <IconButton aria-label="fingerprint" color="secondary"> 
                <Fingerprint/>
            </IconButton>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </Stack>
    )
}