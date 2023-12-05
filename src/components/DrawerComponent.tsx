import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import SwitchMode from "./SwitchMode";

const useStyles = makeStyles(()=>({
  main:{
    backgroundColor: "#ffff",
    color: "#002",
    opacity: .7
  },
  link:{
    textDecoration:"none",
    color: "#fff",
    fontSize: "20px",
  },
  icon:{
    color: "#fff"
  }
}));

function DrawerComponent() {
const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        className={classes.main}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
         <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/">Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/Favorite">Favorite</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <SwitchMode></SwitchMode>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;