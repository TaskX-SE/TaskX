import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./TaskX_Logo2.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div className="justify-content-center">
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image ="https://drive.google.com/file/d/1MuYvkYEgJ2J2p3ND1HvIzRMOFvyxEMfv/view?usp=sharing"
          title="TaskX"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
          TaskX is a web-application which can help the users to create and maintain schedules for their daily tasks in a smart and effective manner.
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Button size="small" color="primary">
          <a href="http://127.0.0.1:5000/auth/google/">Sign in with google </a>  
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}