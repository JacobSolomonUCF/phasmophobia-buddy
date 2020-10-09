import { Box } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
import CheckCircle from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function EvidenceButtons ({items, handleClick}) {
  return (
    <Box>
      <Grid style={{justifyContent: 'center'}} container spacing={0}>
        {Object.values(items).map((item, index) => {
          return <Item handleClick={item => handleClick(item)} key={index} item={item}/>;
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
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const fontSize = matches ? '0.65rem': '0.875rem';
  const classes = useStyles();
  const {selected} = item;
  return (
    <Grid classes={{ root: classes.root }} item xs={6} lg={4}>
      <Button onClick={() => handleClick(item)} classes={{ root: classes.button}} style={{fontSize}} color={selected ? 'secondary' : 'primary'} variant={selected ? 'outlined' : 'contained'}>
        {selected ? <CheckCircle style={{ marginRight: 5 }}/> : <Add style={{ marginRight: 5 }}/>}
        {item.display}
      </Button>
    </Grid>
  );
};
