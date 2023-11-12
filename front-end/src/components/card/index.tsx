import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "../button";

type CardProps = {
  onClick?: (...args: any[]) => any;
  onEditClick?: (...args: any[]) => any;
  onDeleteClick?: (...args: any[]) => any;
  name: string;
  email: string;
  body: string;
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CustomizedCard(props: CardProps) {
  const { name, email, body, onClick, onEditClick, onDeleteClick } = props;

  return (
    <Card sx={{ minWidth: 275, background: "#ebeeef" }} >
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2">{body}</Typography>
        <Typography sx={{ mb: 1.5, color:"blue" }} color="text.secondary" onClick={onClick}>
          more detail
        </Typography>
      </CardContent>
      <CardActions>
        <Button  variant="outlined" label="Edit" onClick={onEditClick}/>
        <Button  variant="outlined" label="Delete" onClick={onDeleteClick}/>
      </CardActions>
    </Card>
  );
}
