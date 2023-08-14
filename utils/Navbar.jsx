import AppBar from "@mui/material/AppBar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BackTop from "./BackTop";
import SwipeableTemporaryDrawer from "./DrawerComponent";
import styles from "./menubar.module.scss";

// type MenuBarProps = {
//   activeTab: "Home" | "Work"| "Projects" | "About" | "Contacts"
// }
const myLoader = () => {
  return `/Mi-logoWhite.svg?w=${width}`
}
export default function Navbar(props) {
  // const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <div className={styles.navbar}>
      {isMatch ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              margin: "1rem 0 0 0"

            }}
          >

            <Image
              loader={uploadcareLoader}
              src="/Mi-logoWhite.svg"
              alt="myFace"
              width={100}
              height={82}
            />

            <SwipeableTemporaryDrawer />

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
            <AppBar className={styles.appBar}>
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