import * as React from 'react';
import Switch from '@mui/material/Switch';
import { FormGroup } from 'react-bootstrap';
import { FormControlLabel } from '@mui/material';

const label = { inputProps: {'aria-label': 'Switch demo'}};

export default function BasicSwitches(){
    return(
        <>
            <div>
                <Switch defaultChecked></Switch>
                <Switch></Switch>
                <Switch disabled defaultChecked></Switch>
                <Switch disabled></Switch>
            </div>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked/>} label="Label"></FormControlLabel>
                <FormControlLabel  required control={<Switch size='small'/>} label="Required"/>
                <FormControlLabel disabled control={<Switch />} label="Disabled" />
            </FormGroup>
        </>
    );
}

// Switches toggle the state of a single setting on or off.
// Switches are the preferred way to adjust settings on mobile.

// Text Fields let users enter and edit text.
// Text fields allow users to enter text into a UI. They typically appear in forms and dialogs.