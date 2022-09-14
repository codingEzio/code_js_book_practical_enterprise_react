import React from 'react';

import { makeStyles } from '@material-ui/core';

const Header = () => {
  const classes = useStyles();

  return (
    <div>
      <h1>
        You are at <em>product/ProductListView Header.tsx</em>
      </h1>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': { marginLeft: theme.spacing(1) },
  },
}));

export default Header;
