import React from 'react'
import { Button } from "@mui/material";

type ButtonProps = {
  type?:any;
  label?: any;
  variant?: any;
  onClick?: (...args: any[]) => any;
};

export default function PrimaryButton(props: ButtonProps) {
  const {type, label, onClick, variant } = props;

  return (
    <Button type={type} className='my-2 rounded-1 fs-5 text-white fw-bold btn' sx={{background:'#242424'}} variant={variant} color="primary" fullWidth onClick={onClick}>
      {label}
    </Button>
  );
}
