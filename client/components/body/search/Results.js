import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Articles from './Articles';

const styleSheet = createStyleSheet(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "4em",
  },
}));

function Results(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container>
          {props.results.map((article) => {
            return <Articles key={article._id} article={article}/>;
          })}
      </Grid>
    </div>
  );
}

export default withStyles(styleSheet)(Results);