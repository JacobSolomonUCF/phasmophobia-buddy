import { Box } from '@material-ui/core';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '15px 25px 75px 25px',
    overflowY: 'scroll',
    maxHeight: 'calc(100vh - 315px)',
    '&::-webkit-scrollbar': {
      display: 'none',
    }
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    borderBottom: '1px solid #FFF',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingTop: 10,
    '&:last-child': {
      marginBottom: 100,
    }
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
  },
  right: {
    paddingTop: 15,
    width: 225,
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    paddingRight: 5,
  },
  desc: {
    paddingTop: 5,
    paddingBottom: 5,
    color: theme.palette.text.secondary,
  }
}));

export default function Ghosts ({ ghost, evidence }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const classes = useStyles();

  const alignment = matches ? 'flex-end' : 'flex-start';
  return (
    <Box className={classes.root}>
      {ghost.map((item) =>
        <Box key={item.name} className={classes.item}>
          <Grid container spacing={0}>
            <Grid xs={12} md={9} item className={classes.col}>
              <Typography variant={'h6'}>{item.name}</Typography>
              <Typography className={classes.desc} variant={'caption'}>{item.desc}</Typography>
              <Typography variant={'caption'}><span style={{ fontWeight: 'bold' }}>{matches}Strengths:</span> {item.strengths}</Typography>
              <Typography variant={'caption'}><span style={{ fontWeight: 'bold' }}>Weaknesses:</span> {item.weaknesses}</Typography>
            </Grid>
            <Grid xs={12} md={3} item key={item.name} style={{ alignItems: alignment }} className={classes.right}>
              {item.evidence.map(key =>
                <Box key={`${item.name}-${key}`} className={classes.row}>
                  <Typography className={classes.label} color={evidence[key].selected ? 'secondary' : 'initial'}
                              variant={'caption'}>{evidence[key].display}</Typography>
                  {React.cloneElement(evidence[key].icon, { color: evidence[key].selected ? 'secondary' : 'inherit' })}
                </Box>
              )}
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
}

export const GhostInfo = [
  {
    name: 'Spirit',
    evidence: ['emf_lvl5', 'spirit_box', 'ghost_writing'],
    desc: 'A Spirit is the most common Ghost you will come across however it is still very powerful and dangerous. They are usually discovered at one of their hunting grounds after an unexplained death.',
    strengths: 'None',
    weaknesses: 'Using Smudge Sticks on a Spirit will stop it attacking for a long period of time.',
  },
  {
    name: 'Wraith',
    evidence: ['dots', 'emf_lvl5', 'spirit_box'],
    desc: 'A Wraith is one of the most dangerous Ghost you will find. It is also the only known Ghost that has the ability of flight and has sometimes been known to travel through walls.',
    strengths: 'Almost never touch the ground meaning it can\'t be tracked by footsteps.',
    weaknesses: 'Has a toxic reaction to salt.',
  },
  {
    name: 'Phantom',
    evidence: ['dots', 'fingerprints', 'spirit_box'],
    desc: 'A Phantom is a Ghost that can posses the living, most commonly summoned by a Ouija Board. It also induces fear into those around it.',
    strengths: 'Looking at a it will considerably drop your sanity.',
    weaknesses: 'Taking a photo of the Ghost will make it temporarily disappear.',
  },
  {
    name: 'Poltergeist',
    evidence: ['spirit_box', 'fingerprints', 'ghost_writing'],
    desc: 'One of the most famous Ghost, a Poltergeist, also known as a noisy Ghost can manipulate objects around it to spread fear into it\'s victims.',
    strengths: 'Can throw huge amounts of objects at once.',
    weaknesses: 'Is almost ineffective in an empty room.',
  },
  {
    name: 'Banshee',
    evidence: ['dots', 'fingerprints', 'orbs'],
    desc: 'A Banshee is a natural hunter and will attack anything. It has been known to stalk it\'s prey one at a time until making it\'s kill.',
    strengths: 'Will only target one person at a time.',
    weaknesses: 'Fears the Crucifix and will be less aggressive when near one.',
  },
  {
    name: 'Jinn',
    evidence: ['emf_lvl5', 'fingerprints', 'freezing_temps'],
    desc: 'A Jinn is a territorial Ghost that will attack when threatened. It has also been known to be able to travel at significant speed.',
    strengths: 'Will travel at a faster speed if it\'s victim is far away.',
    weaknesses: 'Turning off the locations power source will prevent the Ghost from using it\'s ability.',
  },
  {
    name: 'Mare',
    evidence: ['ghost_writing', 'orbs', 'spirit_box'],
    desc: 'A Mare is the source of all nightmares, making it most powerful in the dark.',
    strengths: 'Will have an increased chance to attack in the dark.',
    weaknesses: 'Turning the lights on around the Ghost will lower it\'s chance to attack.',
  },
  {
    name: 'Revenant',
    evidence: ['freezing_temps', 'orbs', 'ghost_writing'],
    desc: 'A Revenant is slow but violent Ghost that will attack indiscriminately. It has been rumored to travel at significantly higher speed when hunting.',
    strengths: 'Will travel at a significantly faster speed when hunting a victim.',
    weaknesses: 'Hiding from the Ghost will cause it to move very slowly.',
  },
  {
    name: 'Shade',
    evidence: ['emf_lvl5', 'freezing_temps', 'ghost_writing'],
    desc: 'A Shade is known to be a Shy Ghost. There is evidence that a Shade will stop all paranormal activity if there are multiple people nearby.',
    strengths: 'Being shy means the Ghost will be harder to find.',
    weaknesses: 'The Ghost will not enter hunting mode if there is multiple people nearby.',
  },
  {
    name: 'Demon',
    evidence: ['fingerprints', 'ghost_writing', 'freezing_temps'],
    desc: 'A Demon is one of the worst Ghosts you can encounter. It has been known to attack without reason.',
    strengths: 'It will attack more often then any other Ghost.',
    weaknesses: 'Asking it successful questions on the Ouija Board won\'t lower the users sanity.',
  },
  {
    name: 'Yurei',
    evidence: ['orbs', 'dots', 'freezing_temps'],
    desc: 'A Yurei is a Ghost that has returned to the physical world, usually for the purpose of revenge or hatred.',
    strengths: 'Has been known to have a stronger effect on people\'s sanity.',
    weaknesses: 'Smudging the Ghost\'s room will cause it to not wander around the location for a long time.',
  },
  {
    name: 'Oni',
    evidence: ['emf_lvl5', 'dots', 'freezing_temps'],
    desc: 'Oni\'s are cousin to the Demon and posses extreme strength. There have been rumours that they become more active around their prey.',
    strengths: 'Are more active when people are nearby and have been seen moving at great speed.',
    weaknesses: 'Being more active will make the Ghost easier to find and identify.',
  },
  {
    name: 'Yokai',
    evidence: ['spirit_box', 'orbs', 'dots'],
    desc: 'A Yokai is a common type of ghost that is attracted to human voices. They can usually be found haunting family homes.',
    strengths: 'Talking near a Yokai will anger it and increase it\'s chance of attacking.',
    weaknesses: 'When hunting a Yokai can only hear voices close to it.',
  },
  {
    name: 'Hantu',
    evidence: ['fingerprints', 'orbs', 'freezing_temps'],
    desc: 'A Hantu is a rare ghost that can be found in hot climates. They are known to attack often during cold weather.',
    strengths: 'Lower temperatures can cause the Hantu to move at faster speeds.',
    weaknesses: 'A Hantu will move slower in warmer areas.',
  },
  {
    name: 'Myling',
    evidence: ['emf_lvl5', 'fingerprints', 'ghost_writing'],
    desc: 'A Myling is very vocal and active ghost. They are rumoured to be quite when hunting their prey.',
    strengths: 'Known to be quieter when hunting.',
    weaknesses: 'More frequently makes paranormal sounds.',
  },
  {
    name: 'Goryo',
    evidence: ['emf_lvl5', 'fingerprints', 'dots'],
    desc: 'Using a video camera is the only way to view a Goryo, when it passes through a DOTS projector.',
    strengths: 'Will usually only show itself on camera if there are no people nearby.',
    weaknesses: 'They are rarely seen far from their death place.'
  },
  {
    name: 'Onryo',
    evidence: ['spirit_box', 'orbs', 'freezing_temps'],
    desc: 'The Onryo is often referred to as "The Wrathful Spirit". It steals souls from dying victims\' bodies to seek revenge. ' +
      'This ghost has been known to fear any form of fire, and will do anything to be far from it',
    strengths: 'Extinguishing a flame can cause an Onryo to attack.',
    weaknesses: 'When threatened, this ghost will be less likely to hunt.'
  },
  {
    name: 'The Twins',
    evidence: ['emf_lvl5', 'spirit_box', 'freezing_temps'],
    desc: 'These ghosts have been reported to mimic each other\'s actions. They alternate their attack to confuse their prey.',
    strengths: 'Either Twin can be angered and initiate an attack on their prey.',
    weaknesses: 'The Twins will often interact with the environment at the same time.'
  },
  {
    name: 'Raiju',
    evidence: ['emf_lvl5', 'orbs', 'dots'],
    desc: 'A Raiju is a demon that thrives on electrical current. While generally calm, they can become agitated when overwhelmed with power.',
    strengths: 'A Raiju can siphon power from nearby electrical devices, making it move master.',
    weaknesses: 'Raiju are constantly disrupting electronic equipment, making it easier to track when attacking.'
  },
  {
    name: 'Obake',
    evidence: ['emf_lvl5', 'fingerprints', 'orbs'],
    desc: 'Obake are terrifying shape-shifters, capable of taking on many forms. They have been seen taking on humanoid shapes to attract their prey.',
    strengths: 'When interacting with the environment, an Obake will rarely leave a trace.',
    weaknesses: 'Sometimes this ghost will shapeshift, leaving behind unique evidence.'
  },
  {
    name: 'The Mimic',
    evidence: ['spirit_box', 'fingerprints', 'freezing_temps'],
    desc: 'The Mimic is an elusive, mysterious, copycat ghost that mirrors traits and behaviours from others, including other ghost types.',
    strengths: "We're unsure what this ghost is capable of. Be Careful.",
    weaknesses: 'Several reports have noted ghost orb sighting near mimics'
  }
];
