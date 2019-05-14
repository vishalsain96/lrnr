import React, { Component } from "react";
import {
  withStyles,
  Typography,
  Divider,
  Grid,
  Button
} from "@material-ui/core";
import SelectionMenu from "selection-menu";

const styles = {
  buttonStyle: {
    color: "white"
  }
};

const $ = window.$;

class TextEditor extends Component {
  constructor() {
    super();
    this.state = {
      selectedWord: ""
    };
  }

  openWordEditorMenu = () => {
    console.log("Entered openWordEditorMenu method");
    this.state.selectedWord = "";
    new SelectionMenu({
      container: document.querySelector("#article"),
      content: document.querySelector("#myTextEditor"),
      handler: function(event) {
        this.hide(true); // hide the selection after hiding the menu; useful if opening a link in a new tab
      },
      debug: false
    });
    this.state.selectedWord = window.getSelection().toString();
  };

  openHeadingMenu = () => {
    console.log("entered this method");
    this.state.selectedWord = "";
    new SelectionMenu({
      container: document.querySelector("#topicHeading"),
      content: document.querySelector("#myHeadingMenu"),
      handler: function(event) {
        this.hide(true); // hide the selection after hiding the menu; useful if opening a link in a new tab
      },
      debug: false
    });
    this.state.selectedWord = window.getSelection().toString();
  };

  changeTextStyle = style => {
    var highlight = this.state.selectedWord;
    console.log(highlight);
    if (style === "B")
      var span = '<span style="font-weight:bolder">' + highlight + "</span>";
    else if (style === "I")
      var span = '<span style="font-style:italic">' + highlight + "</span>";
    else if (style === "tag")
      var span =
        '<span style="font-weight:bolder">&lt;' +
        highlight +
        "&gt;</span> &nbsp;";

    var text = $("#article").html();
    var parent = this.getSelectionParentElement();
    if ($(parent).hasClass("bold")) {
      $("#article").html(text.replace(span, highlight));
    } else {
      $("#article").html(text.replace(highlight, span));
    }
  };

  changeHeading = newTagName => {
    console.log(newTagName);
    var n = document.createElement(newTagName);
    var el = document.getElementById("topicHeading");
    var attr = el.attributes;
    for (var i = 0, len = attr.length; i < len; ++i) {
      n.setAttribute(attr[i].name, attr[i].value);
    }
    n.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(n, el);
  };

  getSelectionParentElement = () => {
    var parentEl = null,
      sel;
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
        parentEl = sel.getRangeAt(0).commonAncestorContainer;
        if (parentEl.nodeType != 1) {
          parentEl = parentEl.parentNode;
        }
      }
    } else if ((sel = document.selection) && sel.type != "Control") {
      parentEl = sel.createRange().parentElement();
    }
    return parentEl;
  };

  render() {
    const { classes } = this.props;
    return (
      <div id="wrapper">
        <div
          id="myTextEditor"
          // class="selection-menu"
          style={{
            visibility: "hidden",
            position: "absolute",
            top: "-15% !important",
            left: "-5% !important"
          }}
        >
          <Grid
            style={{
              backgroundColor: "black",
              padding: 6,
              borderRadius: "2%"
            }}
          >
            <Button
              className={classes.buttonStyle}
              onClick={() => this.changeTextStyle("B")}
            >
              B
            </Button>
            <Button
              className={classes.buttonStyle}
              onClick={() => this.changeTextStyle("I")}
              style={{ fontStyle: "italic" }}
            >
              I
            </Button>
            <Button
              className={classes.buttonStyle}
              onClick={() => this.changeTextStyle("tag")}
              style={{ fontStyle: "italic" }}
            >
              &lt; &gt;
            </Button>
          </Grid>
        </div>
        <div
          id="myHeadingMenu"
          // class="selection-menu"
          style={{
            visibility: "hidden",
            position: "absolute",
            top: "-15% !important",
            left: "-5% !important"
          }}
        >
          <Grid
            style={{
              backgroundColor: "black",
              padding: 6,
              borderRadius: "2%"
            }}
          >
            <Button
              className={classes.buttonStyle}
              onClick={() => this.changeHeading("p")}
            >
              p
            </Button>
            <Button
              className={classes.buttonStyle}
              onClick={() => this.changeHeading("h1")}
            >
              h1
            </Button>
            <Button
              className={classes.buttonStyle}
              onClick={() => this.changeHeading("h2")}
            >
              h2
            </Button>
            <Button
              className={classes.buttonStyle}
              onClick={() => this.changeHeading("h3")}
            >
              h3
            </Button>
          </Grid>
        </div>
        <h1
          style={{ fontWeight: "normal", fontSize: "42px", marginBottom: "8%" }}
        >
          WYSIWYG Editor
        </h1>
        <Typography
          id="article"
          style={{ fontFamily: "Lato", fontSize: "large" }}
          onMouseUp={this.openWordEditorMenu}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure in reprehenderit in
          voluptate velit esse cillum eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum
        </Typography>
        <Divider style={{ marginTop: "4%" }} />
        <h1
          id="topicHeading"
          style={{ fontWeight: "normal", marginBottom: "2%" }}
          onMouseUp={this.openHeadingMenu}
        >
          Topic name
        </h1>
        <Typography style={{ fontFamily: "Lato", fontSize: "large" }}>
          Fusce sapien lacus, posuere in tempor yel, fringilla id ipsum, Donec
          varius, ante quis accumsan viverra, quam mi accumsan urna, sed tempor
          ante ex efficitur ipsum. Oroin massa justo, egestas vitae nisl at,
          scelerique accumsan lectus.
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(TextEditor);
