import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const SimpleCard = props => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title} >
        Applicants{bull}{props.applicants}
        </Typography>
        <Typography variant="h5" component="h2" className={classes.title} >
        Places{bull}{props.places}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          location:   {props.location}
        </Typography>
        <Typography variant="body2" component="p">
            {props.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" target="_blank" href={props.id}>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default SimpleCard;