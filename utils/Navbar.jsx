import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { makeStyles } from 'tss-react/mui';
import BackTop from "./BackTop";
import DrawerComponent from "./DrawerComponent";
import styles from "./menubar.module.scss";

const useStyles = makeStyles()((theme) => ({
  navbar: {
    display: "flex",
    justifyContent: "flex-start",
    height: "20vh",
    backgroundColor: "#3466aa",
    alignItems: "center",
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "absolute !important",
  },
}));
// type MenuBarProps = {
//   activeTab: "Home" | "Work"| "Projects" | "About" | "Contacts"
// }
const myLoader = () => {
  return `/Mi-logoWhite.svg?w=${width}`
}
export default function Navbar(props) {
  // const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const { classes } = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  // const handleClickTab = (e, newValue) => {
  //   setValue(newValue);
  // };
  // const handleOpenMenu = (e) => {
  //   setAnchorEl(e.currentTarget);
  // };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.navbar}>
      {isMatch ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DrawerComponent />
            <Image
              loader={uploadcareLoader}
              src="/Mi-logoWhite.svg"
              alt="myFace"
              width={100}
              height={82}
            />
          </div>
        </>
      ) : (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "transparent"
            }}
          >
            <AppBar className={classes.appBar}>
              <nav className={styles.menuBar}>
                <Link className={styles.title} href={`/`} >

                  <Image
                    loader={uploadcareLoader}
                    src="/Mi-logoWhite.svg"
                    alt="myFace"
                    width={178}
                    height={146}
                  />
                  <h3 className={styles.name}>Mahmood ul Islam</h3>

                </Link>
                <Link className={styles.tab} href={`/`} >

                  <h3
                    style={
                      props.activeTab === "Home"
                        ? { color: "#82b7dc" }
                        : { color: " #ffffff" }
                    }
                  >
                    Home
                  </h3>

                </Link>
                <Link className={styles.tab} href={`/work`} >

                  <h3
                    style={
                      props.activeTab === "Work"
                        ? { color: "#82b7dc" }
                        : { color: "#ffffff" }
                    }
                  >
                    Work
                  </h3>

                </Link>
                <Link className={styles.tab} href={`/projects`} >

                  <h3
                    style={
                      props.activeTab === "Projects"
                        ? { color: "#82b7dc" }
                        : { color: "#ffffff" }
                    }
                  >
                    Projects
                  </h3>

                </Link>
                <Link className={styles.tab} href={`/about`} >

                  <h3
                    style={
                      props.activeTab === "About"
                        ? { color: "#82b7dc" }
                        : { color: "#ffffff" }
                    }
                  >
                    About
                  </h3>

                </Link>
                <Link className={styles.tab} href={`/contacts`} >

                  <h3
                    style={
                      props.activeTab === "Contacts"
                        ? { color: "#82b7dc" }
                        : { color: "#ffffff" }
                    }
                  >
                    Contacts
                  </h3>

                </Link>
                <BackTop />
              </nav>
            </AppBar>
          </div>
        </>
      )}
      <Menu
        style={{ marginTop: "5px" }}
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleCloseMenu}>ABOUT</MenuItem>
        <MenuItem onClick={handleCloseMenu}>PROJECTS</MenuItem>
        <MenuItem onClick={handleCloseMenu}>EMERGENCY RESPONSE</MenuItem>
        <MenuItem onClick={handleCloseMenu}>OUR SUPPORTERS</MenuItem>
        <MenuItem onClick={handleCloseMenu}>GALLERY</MenuItem>
        <MenuItem onClick={handleCloseMenu}>REPORTS</MenuItem>
      </Menu>
    </div>
  );
}
