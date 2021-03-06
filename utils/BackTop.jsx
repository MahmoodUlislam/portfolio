import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Zoom from "@mui/material/Zoom";
import PropTypes from "prop-types";
import * as React from "react";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", right: "5px", bottom: "5px" }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackTop(props) {
  return (
    <React.Fragment>
      <CssBaseline />

      <Toolbar id="back-to-top-anchor" />

      <ScrollTop {...props}>
        <Fab
          sx={{
            color: "#ff0072 !important",
            fontSize: "50px",
            paddingTop: "15px",
          }}
          size="small"
          aria-label="scroll back to top"
        >
          ^
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
