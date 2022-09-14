import React from 'react';

import { makeStyles } from '@material-ui/core';

const Results = () => {
  const classes = useStyles();

  return (
    <div>
      <p>
        You are at <em>product/ProductListView Results.tsx</em>
      </p>
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

export default Results;
