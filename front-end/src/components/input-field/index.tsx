import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type InputFieldProps = {
    label : string;
    value: any; 
    onChange?: (...args: any[]) => any;
}

export default function InputField( props: InputFieldProps ) {
    const {label, value, onChange} = props

  return (
    <Box
      component="form"
      sx={{
        marginY:'10px'
        // "& > :not(style)": { },
      }}
    //   noValidate
    //   autoComplete="off"
    >
      <TextField label={label}  value={value} onChange={onChange} color="primary" focused  fullWidth />
    </Box>
  );
}
