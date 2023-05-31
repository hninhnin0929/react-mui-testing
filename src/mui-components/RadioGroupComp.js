import * as React from 'react';
import { Radio,RadioGroup,FormControlLabel,FormControl,FormLabel } from '@mui/material';

export default function RadioGroupComp(){

    const [value, setValue] = React.useState("female");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return(
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue="female"
                name="radio-buttons-group"   
                value={value}
                onChange={handleChange}             
            >
                <FormControlLabel value="female" control={<Radio/>} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio/>} label="Other" />

            </RadioGroup>

        </FormControl>
    );
}