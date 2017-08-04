import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Search from './search/Search';

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
}));

function Body(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <Search />
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styleSheet)(Body);