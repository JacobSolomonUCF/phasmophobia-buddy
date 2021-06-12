import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Tooltip } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import EvidenceButtons from './EvidenceButtons';
import Ghosts, { GhostInfo } from './Ghosts';
import AcUnit from '@material-ui/icons/AcUnit';
import Radio from '@material-ui/icons/Radio';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import SettingsRemoteIcon from '@material-ui/icons/SettingsRemote';
import ReplayIcon from '@material-ui/icons/Replay';

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
  },
  header: {
    marginRight: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {}
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
  const [possibleGhost, setPossibleGhost] = useState(GhostInfo);

  const handleClick = (item) => {
    const newState = { ...state, [item.key]: { ...item, selected: !item.selected } };
    const numOfSelected = Object.values(newState).filter(item => item.selected).length;
    numOfSelected <= 3 && setState(newState);
  };

  useEffect(() => {
    const currentEvidence = Object.values(state).filter(item => item.selected);
    if (currentEvidence.length === 0) return setPossibleGhost(GhostInfo);
    setPossibleGhost(GhostInfo.filter(ghost => {
      let numOfMatched = 0;
      currentEvidence.forEach(item => {
        if (ghost.evidence.includes(item.key)) {
          numOfMatched++;
        }
      });
      return numOfMatched === currentEvidence.length ? ghost : false;
    }));
  }, [state]);

  return (
    <Box className={classes.root}>
      <Paper classes={{ root: classes.container }}>
        <Box className={classes.header}>
          <Box style={{ width: 75 }}/>
          <Typography variant="h5" className={classes.title}>
            Current Evidence
          </Typography>
          <Tooltip arrow title={'Reset'} placement="top">
            <Button onClick={() => setState(EVIDENCES)}>
              <ReplayIcon classes={{ root: classes.icon }}/>
            </Button>
          </Tooltip>
        </Box>
        <EvidenceButtons items={state} ghost={possibleGhost} handleClick={item => handleClick(item)}/>
        <Ghosts evidence={state} ghost={possibleGhost}/>
      </Paper>
    </Box>
  );
}
