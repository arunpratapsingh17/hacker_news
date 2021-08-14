import React from 'react';
import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    marginTop:'20%',
    marginLeft:'50%'
  },
  circle:{
    color:'white'
  }
}));

export default function LinearIndeterminate() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress className="circle" />
    </div>
  );

}
