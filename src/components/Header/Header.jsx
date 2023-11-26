import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo-ilan.png";
import styles from "./Header.module.css";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    fontSize: 30, // Adjust the font size as needed
  },
  drawer: {
    [theme.breakpoints.up("md")]: {
      display: "none", // Hide the drawer on screens wider than md
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img className={styles.logo} src={logo} alt="" />
        </Link>
      </div>
      <nav className={styles.navBarr}>
        <ul className={styles.navBar__links}>
          <Link to="/about-us" onClick={toggleDrawer}>
            <li>About us</li>
          </Link>
          <li>What We Do</li>
          <li>Rehabilitation and Sports</li>
          <li>Rights Realization</li>
          <li>News</li>
          <li>Contact Us</li>
        </ul>
      </nav>
      {/* Hamburger Icon */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer}
        className={classes.drawer} // Apply the styles only for small screens
      >
        {drawerOpen ? (
          <CloseIcon className={classes.menuIcon} />
        ) : (
          <MenuIcon className={classes.menuIcon} />
        )}
      </IconButton>

      {/* Navigation Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        className={classes.drawer} // Apply the styles only for small screens
      >
        <div className={styles.drawer}>
          {/* Close Icon in Drawer */}
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>

          {/* Navigation Links in Drawer */}
          <nav className={styles.navBar}>
            <ul className={styles.navBar__links}>
              <Link to="/about-us" onClick={toggleDrawer}>
                <li>About us</li>
              </Link>
              <li>What We Do</li>
              <li>Rehabilitation and Sports</li>
              <li>Rights Realization</li>
              <li>News</li>
              <li>Contact Us</li>
            </ul>
          </nav>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
