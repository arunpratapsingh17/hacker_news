import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from "react-router-dom";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius:10,
    margin:10
  },
  author:{
    textTransform:'capitalize'
  },
  learnMore:{
    textAlign:'center'
  }
});

export default function MediaCard({props:{author,title,id}}) {
  const history = useHistory();
  const classes = useStyles();
  console.log("REached card");
  console.log(id);
  // console.log(id);
  return (
      <Card className={classes.root} onClick={()=>{
        history.push({pathname:`/${id}`});
      }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.author}>
              <a className="highlight">AUTHOR</a>- {author}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          <Link to={`/${id}`} className={classes.learnMore} size="small" color="primary">
            Learn More
          </Link>
        </CardActions> */}
      </Card>
  );
}