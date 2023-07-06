import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import InputBase from "@mui/material/InputBase";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { alpha, styled } from "@mui/material/styles";
import * as React from 'react';




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
type Anchor = 'top' | 'left' | 'bottom' | 'right';
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
//   <Drawer
//     anchor="left"
//     classes={{ paper: classes.drawerContainer }}
//     onClose={() => setOpenDrawer(false)}
//     open={openDrawer}
//     onOpen={() => setOpenDrawer(true)}
//   >
//     <List>
//       <ListItemButton >
//         <Image
//           loader={uploadcareLoader}
//           src="/Mi-logoWhite.svg"
//           alt="obizatrik"
//           width={220}
//           height={200}

//         />
//       </ListItemButton>
//       <ListItemButton
//         style={{ textAlign: "center" }}

//         onClick={() => setOpenDrawer(false)}
//       >
//         <ListItemText>
//           <Link href={`/`} className={styles.link}>
//             HOME
//           </Link>
//         </ListItemText>
//       </ListItemButton>

//       <ListItemButton
//         style={{ textAlign: "center" }}
//         onClick={() => setOpenDrawer(false)}
//       >
//         <ListItemText>
//           <Link href={`/work`} className={styles.link}>
//             WORK
//           </Link>{" "}
//         </ListItemText>
//       </ListItemButton>

//       <ListItemButton
//         style={{ textAlign: "center" }}
//         onClick={() => setOpenDrawer(false)}
//       >
//         <ListItemText>
//           <Link href={`/projects`} className={styles.link}>
//             PROJECTS
//           </Link>{" "}
//         </ListItemText>
//       </ListItemButton>

//       <ListItemButton
//         style={{ textAlign: "center" }}
//         onClick={() => setOpenDrawer(false)}
//       >
//         <ListItemText>
//           {" "}
//           <Link href={`/about`} className={styles.link}>
//             ABOUT
//           </Link>
//         </ListItemText>
//       </ListItemButton>

//       <ListItemButton
//         style={{ textAlign: "center" }}
//         onClick={() => setOpenDrawer(false)}
//       >
//         <ListItemText>
//           <Link href={`/contacts`} className={styles.link}>
//             CONTACTS
//           </Link>{" "}
//         </ListItemText>
//       </ListItemButton>
//     </List>
//     <Divider style={{ width: "230", color: "#ffffff" }} variant="middle" />
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center ",
//       }}
//     >
//       <Search>
//         <SearchIconWrapper>
//           <SearchIcon />
//         </SearchIconWrapper>
//         <StyledInputBase
//           placeholder="Search…"
//           inputProps={{ "aria-label": "search" }}
//         />
//       </Search>

//       <Button>
//         <Link href="/contacts" className={styles.button}>
//           send E-mail
//         </Link>
//       </Button>

//       <div style={{ marginTop: "3vh" }}>
//         <div style={{ display: "flex" }}>
//           <a
//             className={styles.link}
//             style={{ fontSize: "20px" }}
//             rel={"external"}
//             href="tel:+13062618482"
//           >
//             {" "}

//             <PhoneInTalkIcon sx={{ width: "50px" }} />
//             +13062618482
//           </a>
//         </div>
//         <div style={{ display: "flex" }}>
//           <a
//             className={styles.link}
//             style={{ fontSize: "16px" }}
//             rel={"external"}
//             href="mailto:mahmood.islam@gmail.com"
//           >
//             {" "}
//             <i className="fal fa-phone" />{" "}
//             <MailOutlineIcon sx={{ width: "50px", marginRight: "1vw" }} />
//             mahmood.islam@gmail.com
//           </a>
//         </div>
//       </div>
//       <div style={{ display: "flex", marginTop: "2vh" }}>
//         <VIcon
//           defaulIcon={linkedInLogo}
//           onHoverIcon={linkedInLogoHover}
//           href="https://www.linkedin.com/in/mahmoodislam/"
//           height="30px"
//           width="30px"
//           name="LinkedIn"
//         />
//         <VIcon
//           defaulIcon={gmailLogo}
//           onHoverIcon={gmailLogoHover}
//           href="mailto:mahmood.islam@gmail.com"
//           height="30px"
//           width="30px"
//           name="Gmail"
//         />
//         <VIcon
//           defaulIcon={gitHubLogo}
//           onHoverIcon={gitHubLogoHover}
//           href="https://github.com/MahmoodUlislam"
//           height="30px"
//           width="30px"
//           name="GitHub"
//         />
//       </div>
//     </div>
//   </Drawer>

//   <IconButton
//     className={classes.iconButtonContainer}
//     onClick={() => setOpenDrawer(!openDrawer)}
//     disableRipple
//   >
//     <MenuIcon className={classes.menuIconToggle} />
//   </IconButton>
// </>
// };
