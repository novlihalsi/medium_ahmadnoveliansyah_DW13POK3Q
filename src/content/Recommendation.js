import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";

const Recommendation = props => {
  // const id = props.id;
  // const userid = localStorage.getItem("id");
  // console.log(userid);
  // console.log(id);

  // const button = () => {
  //   if (id === 1) {
  //     return ;
  //   }
  //   console.log(id);
  // };

  return (
    <Card
      elevation="0"
      style={{ height: "180px", display: "flex", marginBottom: "20px" }}
    >
      <div style={{ flex: "1" }}>
        <CardContent>
          <CardActionArea>
            <Typography
              component="h5"
              variant="h6"
              style={{ fontWeight: "bold" }}
            >
              {props.judul}
            </Typography>
            <Typography variant="subtitle1">{props.content}</Typography>
            <Typography
              variant="subtitle2"
              color="black"
              style={{ fontSize: "12px" }}
            >
              {props.user}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {props.time}
            </Typography>
          </CardActionArea>
          {/* {id == userid && <Button>Delete</Button>} */}
        </CardContent>
      </div>
      <CardMedia
        style={{ width: "180px" }}
        image={props.url}
        title="Live from space album cover"
      />
    </Card>
  );
};

export default Recommendation;
