import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';

const EVIDENCES = {
  emf_lvl5: {
    display: 'EMF LVL 5',
    selected: false,
  },
  orbs: {
    display: 'Ghost Orbs',
    selected: false,
  },
  ghost_writing: {
    display: 'Ghost Writing',
    selected: false,
  },
  fingerprints: {
    display: 'Fingerprints',
    selected: false,
  },
  freezing_temps: {
    display: 'Freezing Temps',
    selected: false,
  },
  spirit_box: {
    display: 'Spirit Box',
    selected: false,
  },
};

export default function EvidenceButtons () {
  const [state, setState] = useState(EVIDENCES);
  const handleClick = (item, key) => {
    const newState = { ...state, [key]: { ...item, selected: !item.selected } };
    const numOfSelected = Object.values(newState).filter(item => item.selected).length;
    numOfSelected <= 3 && setState(newState);
  };
  return (
    <Box>
      <Grid container spacing={0}>
        {Object.values(state).map((item, index) => {
          return <Item handleClick={item => handleClick(item, Object.keys(state)[index])} key={index} item={item}/>;
        })}
      </Grid>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  button: {
    height: 50,
    width: 200,
    display: 'flex',
    justifyContent: 'flex-start',
    paddingRight: 20,
    borderWidth: 3,
    '&:hover':{
      borderWidth: 3,
    }
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
  },
}));

const Item = ({ item, handleClick }) => {
  const classes = useStyles();
  const {selected} = item;
  return (
    <Grid classes={{ root: classes.root }} item xs={4}>
      <Button onClick={() => handleClick(item)} classes={{ root: classes.button}} color={selected ? 'secondary' : 'primary'} variant={selected ? 'outlined' : 'contained'}>
        {selected ? <CheckCircle style={{ marginRight: 5 }}/> : <Add style={{ marginRight: 5 }}/>}
        {item.display}
      </Button>
    </Grid>
  );
};
