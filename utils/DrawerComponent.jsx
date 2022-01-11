import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import SearchIcon from "@mui/icons-material/Search";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  gitHubLogo,
  gitHubLogoHover,
  gmailLogo,
  gmailLogoHover,
  linkedInLogo,
  linkedInLogoHover,
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
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
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
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
const DrawerComponent = () => {
  const useStyles = makeStyles((theme) => ({
    drawerContainer: { backgroundColor: "#0d0107", width: "280px" },
    iconButtonContainer: {
      position: "fixed",
      right: "0",
      color: "#ffffff",
    },
    menuIconToggle: {
      margin: "0 auto",

      fontSize: "6rem",
      width: "inherit",
    },
  }));

  const [openDrawer, setOpenDrawer] = useState(false);

  //Css
  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerContainer }}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
      >
        <List>
          <ListItem>
            <Image
              src="/Mi-logoWhite.svg"
              alt="obizatrik"
              width="220px"
              height="200px"
            />
          </ListItem>
          <ListItem
            style={{ textAlign: "center" }}
            button
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <Link href={`/`}>
                <a className={styles.link}>HOME</a>
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem
            style={{ textAlign: "center" }}
            button
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <Link href={`/work`}>
                <a className={styles.link}>WORK</a>
              </Link>{" "}
            </ListItemText>
          </ListItem>

          <ListItem
            style={{ textAlign: "center" }}
            button
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <Link href={`/projects`}>
                <a className={styles.link}>PROJECTS</a>
              </Link>{" "}
            </ListItemText>
          </ListItem>

          <ListItem
            style={{ textAlign: "center" }}
            button
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              {" "}
              <Link href={`/about`}>
                <a className={styles.link}>ABOUT</a>
              </Link>
            </ListItemText>
          </ListItem>

          <ListItem
            style={{ textAlign: "center" }}
            button
            onClick={() => setOpenDrawer(false)}
          >
            <ListItemText>
              <Link href={`/contacts`}>
                <a className={styles.link}>CONTACTS</a>
              </Link>{" "}
            </ListItemText>
          </ListItem>
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
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Button>
            <Link href="/contacts">
              <a className={styles.button}>send E-mail</a>
            </Link>
          </Button>

          <div style={{ marginTop: "3vh" }}>
            <div style={{ display: "flex" }}>
              <a
                className={styles.link}
                style={{ fontSize: "20px" }}
                rel={"external"}
                href="tel:+8801717077230"
              >
                {" "}
                <i className="fal fa-phone" />{" "}
                <PhoneInTalkIcon sx={{ width: "50px" }} />
                +88-01717077230
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
          <div style={{ display: "flex", marginTop: "2vh" }}>
            <VIcon
              defaulIcon={linkedInLogo}
              onHoverIcon={linkedInLogoHover}
              href="https://www.linkedin.com/in/mahmoodislam/"
              height="30px"
              width="30px"
              name="LinkedIn"
            />
            <VIcon
              defaulIcon={gmailLogo}
              onHoverIcon={gmailLogoHover}
              href="mailto:mahmood.islam@gmail.com"
              height="30px"
              width="30px"
              name="Gmail"
            />
            <VIcon
              defaulIcon={gitHubLogo}
              onHoverIcon={gitHubLogoHover}
              href="https://github.com/MahmoodUlislam"
              height="30px"
              width="30px"
              name="GitHub"
            />
          </div>
        </div>
      </Drawer>

      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
