import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SearchIcon from "@mui/icons-material/Search";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { alpha, styled } from "@mui/material/styles";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import {
  gitHubLogo,
  gitHubLogoHover,
  gmailLogo,
  gmailLogoHover,
  linkedInLogo,
  linkedInLogoHover
} from "../assets";
import styles from "./DrawerComponent.module.scss";
import { VIcon } from "./icon";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 0,
  width: "80%",
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#ffffff",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    color: "#ffffff",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = useState({ right: false });


  const toggleDrawer =
    (anchor, open) =>
      (event) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event).key === 'Tab' ||
            (event).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, backgroundColor: "#1c1c1c" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemButton >
          <Image
            loader={uploadcareLoader}
            src="/Mi-logoWhite.svg"
            alt="obizatrik"
            width={220}
            height={200}
          />
        </ListItemButton>
        <ListItemButton
          style={{ textAlign: "center" }}>
          <ListItemText>
            <Link href={`/`} className={styles.link}>
              HOME
            </Link>
          </ListItemText>
        </ListItemButton>

        <ListItemButton
          style={{ textAlign: "center" }}>
          <ListItemText>
            <Link href={`/work`} className={styles.link}>
              WORK
            </Link>{" "}
          </ListItemText>
        </ListItemButton>

        <ListItemButton
          style={{ textAlign: "center" }}>
          <ListItemText>
            <Link href={`/projects`} className={styles.link}>
              PROJECTS
            </Link>{" "}
          </ListItemText>
        </ListItemButton>

        <ListItemButton
          style={{ textAlign: "center" }}>
          <ListItemText>
            {" "}
            <Link href={`/about`} className={styles.link}>
              ABOUT
            </Link>
          </ListItemText>
        </ListItemButton>

        <ListItemButton style={{ textAlign: "center" }}>
          <ListItemText>
            <Link href={`/contacts`} className={styles.link}>
              CONTACTS
            </Link>{" "}
          </ListItemText>
        </ListItemButton>
      </List>
      <Divider style={{ width: "230", color: "#ffffff" }} variant="middle" />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center ",
        }}
      >
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase

            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Button>
          <Link href="/contacts" className={styles.button}>
            send E-mail
          </Link>
        </Button>

        <div style={{ marginTop: "3vh" }}>
          <div style={{ display: "flex" }}>
            <a
              className={styles.link}
              style={{ fontSize: "20px" }}
              rel={"external"}
              href="tel:+13062618482"
            >
              {" "}

              <PhoneInTalkIcon sx={{ width: "50px" }} />
              +13062618482
            </a>
          </div>
          <div style={{ display: "flex" }}>
            <a
              className={styles.link}
              style={{ fontSize: "16px" }}
              rel={"external"}
              href="mailto:mahmood.islam@gmail.com"
            >
              {" "}
              <i className="fal fa-phone" />{" "}
              <MailOutlineIcon sx={{ width: "50px", marginRight: "1vw" }} />
              mahmood.islam@gmail.com
            </a>
          </div>
        </div>
        <div style={{ display: "flex", margin: "2vh 0", gap: "2rem" }}>
          <VIcon
            defaulIcon={linkedInLogo}
            onHoverIcon={linkedInLogoHover}
            href="https://www.linkedin.com/in/mahmoodislam/"
            height={30}
            width={30}
            name="LinkedIn"
          />
          <VIcon
            defaulIcon={gmailLogo}
            onHoverIcon={gmailLogoHover}
            href="mailto:mahmood.islam@gmail.com"
            height={30}
            width={30}
            name="Gmail"
          />
          <VIcon
            defaulIcon={gitHubLogo}
            onHoverIcon={gitHubLogoHover}
            href="https://github.com/MahmoodUlislam"
            height={30}
            width={30}
            name="GitHub"
          />
        </div>
      </div>
    </Box>
  );

  return (
    <div>
      {(['right']).map((anchor) => (
        <React.Fragment key={anchor}>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
          <IconButton
            className={styles.iconButtonContainer}
            onClick={toggleDrawer(anchor, true)}
            disableRipple
          >
            <MenuIcon className={styles.menuIconToggle} />
          </IconButton>
        </React.Fragment>
      ))}
    </div>
  );
}