import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  header: {
    borderBottom: [1, 'solid', 'black'],
    padding: '0.5rem',
    margin: 0,
    height: 70,
    display: 'flex',
    alignItems: 'center'
  },
  h1: {
    margin: 0,
    fontSize: '2rem'
  }
})

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <h1 className={classes.h1}>Reposante</h1>
    </header>
  );
}

export default Header;