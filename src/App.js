import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TabComponent from './components/TabComponent';
import Header from "./components/Header"

import './App.css';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuDiv: {
    margin: "1%",
    display: "flex",
  },
  searchBox: {
    borderRadius: 3,
    border: "1px solid #ced4da",
    paddingLeft: "10px",
    fontSize: 12,
    width: "70%",
    marginBottom: 2,
    marginTop: 2,
    height: 30,
    "&:focus": {
      borderColor: "#e3773c"
    }
  },
  purpleAvatar: {
    color: "#fff",
    width: "30px",
    height: "30px",
    fontSize: "smaller",
    backgroundColor: "#673ab7"
  },
};


class App extends Component {
  render() {
    return (
      <Grid>
      <Header/>
      <TabComponent />
      </Grid>
    );
  }
}



export default withStyles(styles)(App);
