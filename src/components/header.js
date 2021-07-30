import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  List,
  Divider,
  ListItem,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const drawerWidth = 245;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#650264',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  link: {
    color: 'white',
    textDecoration: 'none',
  },

  text: {
    fontSize: 18,
    padding: 10,
    fontFamily: 'Poppins',
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />

        <List>
          <ListItem>
            <Link className={classes.link} to="/profile">
              <Typography className={classes.text}>Profile</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link className={classes.link} to="/chat">
              <Typography className={classes.text}>Messages</Typography>
            </Link>
          </ListItem>
          <ListItem>
            <Link className={classes.link} to="/signin">
              <Typography className={classes.text}>Sign-in</Typography>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
