import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DateTimePicker from '@material-ui/lab/DateTimePicker';

export default function BasicDateTimePicker(props) {

    const { name, label, value, onChange } = props

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker variant="inline" inputVariant="outlined"
        renderInput={(props) => <TextField {...props} />}
        label={label}
        // format="MMM/dd/yyyy"
        name={name}
        value={value}
        minDateTime={new Date()}
        // minDate={new Date()}
        // minTime={new Date()}
        onChange={date => onChange(convertToDefEventPara(name,date))}
      />
    </LocalizationProvider>
  );
}
