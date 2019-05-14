import React, { Component } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  menuDiv: {
    margin: "1% 0%",
    display: "flex"
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
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
      anchorEl: null,
      checkedButton: false
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  handleSwitchChange = name => event => {
    this.setState({ [name]: event.target.checked });

  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const sideList = (
      <div className={classes.list}>
        <List>
          {["Module One", "Module Two", "Module Three", "Module Four"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
        <Divider />
      </div>
    );

    return (
      <div className={classes.menuDiv}>
        <Button onClick={this.toggleDrawer("left", true)}>
          <i class="material-icons">menu</i>
        </Button>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
        <TextField
          autoFocus="true"
          className={classes.searchBox}
          id="filled-search"
          placeholder="dfin"
          name="search"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />
        <Button className={classes.addNewMember}>
          <i class="material-icons">person_add</i>Invite Team Member
        </Button>
        <Button>
          <i class="material-icons">notifications_none</i>
        </Button>
        <Button onClick={this.handleClick}>
          <Avatar className={classes.purpleAvatar}>V</Avatar>
        </Button>
        <Menu
          id="simple-menu"
          style={{ marginTop: "3%" }}
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem>
            Dark Mode
            <Switch
              checked={this.state.checkedButton}
              onChange={this.handleSwitchChange("checkedButton")}
              value="checkedButton"
              color="primary"
            />
          </MenuItem>
          <MenuItem>Profile</MenuItem>
          <Divider />
          <MenuItem>What's new</MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuItem>Send Feedback</MenuItem>
          <MenuItem>Hints and shortcuts</MenuItem>
          <Divider />
          <MenuItem>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
