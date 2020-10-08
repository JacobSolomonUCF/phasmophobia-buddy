import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EvidenceButtons from './EvidenceButtons';
import Ghosts from './Ghosts';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    color: theme.palette.text.primary,
    padding: 30,
  },
  container: {
    maxWidth: '750px',
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
  }
}));

export default function Root () {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper classes={{root: classes.container}}>
        <Typography variant="h5" className={classes.title}>
          Current Evidence
        </Typography>
        <EvidenceButtons />
        <Ghosts/>
      </Paper>
    </Box>
  );
}
