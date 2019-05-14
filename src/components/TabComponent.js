import React, { Component } from "react";
import { withStyles, IconButton } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Divider } from "@material-ui/core";
import TreeView from "./TreeView";
import TextField from "@material-ui/core/TextField";
import FullScreenIcon from '@material-ui/icons/Fullscreen';

const styles = {
  tabs: {
    minWidth: 0,
    padding: "0px 12px"
  },
  tabOverridden: {
    minWidth: 0,
    fontSize: 12,
    margin: -3
  },
  customButton:{
    fontSize: "17pt",
    border: "0px",
    background: "#ffffff00",
    cursor:"pointer",
    "&:hover": {
        borderRadius: 5,
        color: "orange"
      },
      "&:focus": {
        color: "orange"
      }
  }
};

function TabContainer(props) {
  return (
    <Typography
      component="div"
      style={{
        padding: 8 * 3,
        backgroundColor: "#e6e6e6",
        height: "fit-content"
      }}
    >
      {props.children}
    </Typography>
  );
}

class TabComponent extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div style={{ width: "27%" }}>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          scrollButtons="auto"
          className={classes.tabs}
        >
          <Tab className={classes.tabOverridden} label="All" />
          <Tab className={classes.tabOverridden} label="Board" />
          <Tab className={classes.tabOverridden} label="Graph" />
          <Tab className={classes.tabOverridden} label="Recent" />
        </Tabs>
        <Divider />
        {value === 0 && (
          <TabContainer>
            <div>
              <TextField
                autoFocus="true"
                className={classes.searchBox}
                id="filled-search"
                placeholder="DFIN"
                name="search"
                InputProps={{
                  disableUnderline: true,
                }}
              />
              <button className={classes.customButton}>+</button>
              <IconButton><FullScreenIcon/></IconButton>
            </div>
            <TreeView />
          </TabContainer>
        )}
        {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>}
        {value === 3 && <TabContainer>Item Four</TabContainer>}
      </div>
    );
  }
}
export default withStyles(styles)(TabComponent);
