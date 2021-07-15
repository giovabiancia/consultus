import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import ModalRequest from "../ModalRequest";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function CardConsulente(props) {
  const classes = useStyles();
  const history = useHistory();
  const handleLink = (item) => {
    history.push({
      pathname: "/consulente/" + item.nome + "-" + item.cognome + "",
      state: item,
    });
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleLink(props.consulente)}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="100"
          image={props.consulente.foto}
          style={{ height: 230, objectFit: "cover" }}
          title="Contemplative Reptile"
        />
        <CardContent>
          <div className="d-flex">
            <h5>
              {props.consulente.nome} {props.consulente.cognome}
            </h5>
          </div>

          <Typography variant="body2" color="textSecondary" component="p">
            {props.consulente.about}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ModalRequest></ModalRequest>
      </CardActions>
    </Card>
  );
}
