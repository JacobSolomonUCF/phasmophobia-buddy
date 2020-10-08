import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EvidenceButtons from './EvidenceButtons';
import Ghosts from './Ghosts';
import AcUnit from '@material-ui/icons/AcUnit';
import Radio from '@material-ui/icons/Radio';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';

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

const EVIDENCES = {
  emf_lvl5: {
    display: 'EMF LVL 5',
    selected: false,
    key: 'emf_lvl5',
    icon: <SettingsRemoteIcon/>,
  },
  orbs: {
    display: 'Ghost Orbs',
    selected: false,
    key: 'orbs',
    icon: <FiberManualRecordIcon/>,
  },
  ghost_writing: {
    display: 'Ghost Writing',
    selected: false,
    key: 'ghost_writing',
    icon: <ImportContactsIcon/>
  },
  fingerprints: {
    display: 'Fingerprints',
    selected: false,
    key: 'fingerprints',
    icon: <FingerprintIcon/>,
  },
  freezing_temps: {
    display: 'Freezing Temps',
    selected: false,
    key: 'freezing_temps',
    icon: <AcUnit/>,
  },
  spirit_box: {
    display: 'Spirit Box',
    selected: false,
    key: 'spirit_box',
    icon: <Radio/>,
  },
};

export default function Root () {
  const classes = useStyles();
  const [state, setState] = useState(EVIDENCES);
  const handleClick = (item) => {
    const newState = { ...state, [item.key]: { ...item, selected: !item.selected } };
    const numOfSelected = Object.values(newState).filter(item => item.selected).length;
    numOfSelected <= 3 && setState(newState);
  };

  return (
    <Box className={classes.root}>
      <Paper classes={{root: classes.container}}>
        <Typography variant="h5" className={classes.title}>
          Current Evidence
        </Typography>
        <EvidenceButtons items={state} handleClick={item => handleClick(item)}/>
        <Ghosts evidence={state}/>
      </Paper>
    </Box>
  );
}