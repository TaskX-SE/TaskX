import React from 'react'
import { TextField } from '@material-ui/core';

export default function MultiLine(props) {

    const { name, label, value,error=null, onChange, ...other } = props;
    return (
        <TextField
            id="outlined-multiline-static"
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            multiline
            rows={3}
            // defaultValue="Default Value"
            {...other}
            {...(error && {error:true,helperText:error})}
        />
    )
}
