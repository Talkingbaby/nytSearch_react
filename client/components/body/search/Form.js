import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input/Input';
import InputLabel from 'material-ui/Input/InputLabel';
import FormControl from 'material-ui/Form/FormControl';
import Button from 'material-ui/Button';

import api_query from '../../../utils/query';

const styleSheet = createStyleSheet(theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
  }),
  input: {
      margin: theme.spacing.unit,
  },
    button: {
        margin: theme.spacing.unit,
    }
}));

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
      event.preventDefault();
      api_query.nytQuery(this.props.formInfo).then((results) => {
        this.props.nytQuery(results);
      });
  }

  render() {
    const classes = this.props.classes;
    return (
        <Paper className={classes.root} elevation={4}>
            <Grid container justify="center">
                <form onSubmit={this.handleSubmit}>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="topic">Topic</InputLabel>
                        <Input
                            required
                            className={classes.input}
                            onChange={this.props.handleTopic}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Input
                            type={'date'}
                            required
                            className={classes.input}
                            onChange={this.props.handleStart}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <Input
                            type={'date'}
                            required
                            className={classes.input}
                            onChange={this.props.handleEnd}
                        />
                    </FormControl>
                    <Button
                        raised
                        dense
                        type={'submit'}
                        className={classes.button}
                    >
                        Submit
                    </Button>
                </form>
            </Grid>
        </Paper>
    );
  }
}

export default withStyles(styleSheet)(Form);