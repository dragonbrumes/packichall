import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import BriefForm from "./features/briefForm";
import BriefList from "./features/briefList";
import "./App.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    color: theme.palette.text.primary
  },
  form: {
    padding: theme.spacing.unit * 2,
    textAlign: "center"
  },
  list: {
    padding: theme.spacing.unit * 2,
    textAlign: "left",
    maxHeight: 315,
    overflow: "auto"
  }
});

const App = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        alignItems="flex-start"
        justify="center"
        spacing={0}
      >
        <Grid item xs={12} sm={4} lg={4}>
          <Paper className={classes.form}>
            <Typography variant="h2" gutterBottom>
              Challenge
            </Typography>
            <BriefForm />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} lg={4}>
          <Paper className={classes.list}>
            <BriefList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(App);
