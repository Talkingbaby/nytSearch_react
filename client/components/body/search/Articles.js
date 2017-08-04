import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styleSheet = createStyleSheet(theme => ({
    card: {
        maxWidth: 345,
    },
      img: {
        width: '100%'
      }
}));



function Articles(props) {
  const classes = props.classes;
  const article = props.article;

  let imgURL = article.multimedia[0].url;

  return (
    <Grid item xs={10} sm={4}>
      <Card className={classes.card}>
        <CardMedia>
          <img className={classes.img} src={`https://www.nytimes.com/${imgURL}`} />
        </CardMedia>
        <CardContent>
          <Typography type="headline" component="h2">
            {article.headline.kicker}
          </Typography>
          <Typography component="p">
            {article.snippet}
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={article.web_url} dense color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default withStyles(styleSheet)(Articles);