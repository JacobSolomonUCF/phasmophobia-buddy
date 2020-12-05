import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FreeBreakfast from '@material-ui/icons/FreeBreakfast';
import { Tooltip } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppToolBar () {
  const classes = useStyles();

  return (
    <AppBar position="static" classes={{ root: classes.root }}>
      <Toolbar>
        <IconButton disabled edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Phasmophobia Buddy
        </Typography>
        <Tooltip title="Buy me a coffee!">
          <IconButton onClick={() => window.open('https://www.buymeacoffee.com/phasmobuddy', '_blank')} edge="start" className={classes.menuButton}
                      color="inherit" aria-label="menu">
            <FreeBreakfast/>
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}
