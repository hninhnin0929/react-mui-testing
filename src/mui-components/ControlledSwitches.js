import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches(){

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        console.log("This is handleChange");
    };

    return(
        <Switch 
            checked = {checked}
            onChange = {handleChange}
            inputProps =  {{ 'aria-label': 'controlled' }}
        />
    );
}