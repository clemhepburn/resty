import React from 'react';
import SidebarItem from './SidebarItem.jsx';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  sidebar: {
    width: '30vw',
  },
  h4: {
    marginLeft: '1.6rem'
  },
  ul: {
    listStyle: 'none'
  }
});

const Sidebar = ({ history }) => {
  const classes = useStyles();
  const sidebarElements = history.map((h, i) => {
    return (
      <li key={i}>
        <SidebarItem
          {...h}
        />
      </li>
    );
  });

  return (
    <div className={classes.sidebar}>
      <h4 className={classes.h4}>Recent fetches:</h4>
      <ul className={classes.ul}>
        {sidebarElements}
      </ul>
    </div>
  );
};

export default Sidebar;
