import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Container from '@mui/material/Container';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import Link from 'next/link'
import styles from './menubar.module.scss'
import Image from 'next/image'
import BackTop from './BackTop'
import DrawerComponent from './DrawerComponent';

const useStyles = makeStyles(theme => ({
  navbar: {
    display: "flex", 
    justifyContent: 'flex-start',
    height: "20vh",
     backgroundColor: "#0d0107",
    alignItems: "center",
   
  
  },
  appBar: {
    background: "transparent",
    boxShadow:'none',
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    width:'100%',
     position:'absolute !important',
  },

}));
// type MenuBarProps = {
//   activeTab: "Home" | "Work"| "Projects" | "About" | "Contacts" 
// }
export default function Navbar(props) {

  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
  const theme = useTheme(); 
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  const handleClickTab = (e, newValue) => {
     setValue(newValue);
  };
  const handleOpenMenu = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  return (
    <div  className={classes.navbar}>
    
                {isMatch ? (
                <>
                
                  <div style={{ display: 'flex',    justifyContent: "center", alignItems:'center' }}>
                     
                      <DrawerComponent  />
                    <Image  src="/Mi-logoWhite.svg" alt="myFace" width="100px" height="82px"/>                
                  </div>
                </>
              ) : (
                <>
                <div style={{display: 'flex',   justifyContent: "center", alignItems:'center' }}>
                      
                      
                      <AppBar   className={classes.appBar}>
                       
                    <nav className={styles.menuBar}>
                          <Link href={`/`}>
        <a className={styles.title}> 
        <Image  src="/Mi-logoWhite.svg" alt="myFace" width="178px" height="146px"/>       
          <h3 className={styles.name}>
            Mahmood ul Islam
          </h3>
        </a>
      </Link>
                      <Link href={`/`}>
                        <a className={styles.tab}>
                          <h3 style={props.activeTab === "Home" ? {color: "#260316"} : {color: " #ffffff"}}>
                                  Home
                              </h3>
                             </a>
                        </Link>
                       <Link href={`/work`}>
                        <a className={styles.tab}>
                         <h3 style={props.activeTab === "Work" ? {color: "#260316"} : {color: "#ffffff"}}>
                          Work
                         </h3>
                      </a>
                      </Link>
                        <Link href={`/projects`}>
                            <a className={styles.tab}>
                            <h3 style={props.activeTab === "Projects" ? {color: "#260316"} : {color: "#ffffff"}}>
                            Projects
                           </h3>
                         </a>
                         </Link>
                             <Link href={`/about`}>
                               <a className={styles.tab}>
                           <h3 style={props.activeTab === "About" ? {color: "#260316"} : {color: "#ffffff"}}>
                                    About
                                 </h3>
                                  </a>
                                 </Link>
                            <Link href={`/contacts`}>
                           <a className={styles.tab}>
                             <h3 style={props.activeTab === "Contacts" ? {color: "#260316"} : {color: "#ffffff"}}>
                             Contacts
                               </h3>
                            </a>
                          </Link>
                         <BackTop/>
                      </nav>                     
                       
                      </AppBar>
          </div>
                </>
              )}  
            <Menu
              style={{ marginTop: '5px' }}
              id='menu'
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}>
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
