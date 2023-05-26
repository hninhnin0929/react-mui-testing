import * as React from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';


const label = { inputProps: { 'aria-label': 'Checkbox demo' }};

export default function Checkboxes() {
    return (
        // <div>
        //     <Checkbox {...label} defaultChecked/>
        //     <Checkbox {...label} />
        //     <Checkbox {...label} disable />
        //     <Checkbox {...label} disabled checked />
        // </div>
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel required control={<Checkbox />} label="Required" />
            <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
    )
}