import React, { ReactNode } from 'react';

import { makeStyles } from '@material-ui/core';

import NavigationBar from './navigation-bar';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    overflow: 'hidden',
    height: '100%',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));

type Props = {
  children?: ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavigationBar />

      <div className={classes.root}>
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>{children}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MainLayout;
