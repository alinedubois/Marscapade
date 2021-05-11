import React from 'react';
import Exemple from './Exemple.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: "50%",
    marginBottom: 30,
    marginLeft:10,
  },
  media: {
    height: 200,
  },

  
});

export default function Activity( { title, image, description, price, duration, location, id } ) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title demo {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography variant="overline">
         Prix : {price} euros
         </Typography>

         <Typography variant="overline">
         Durée : {duration}
         </Typography>

         <Typography variant="overline">
         location: {location}
         </Typography>

        <Button size="small" color="primary">
          En savoir plus {/**link to detail*/}
        </Button>
      </CardActions>
    </Card>
  );
}



