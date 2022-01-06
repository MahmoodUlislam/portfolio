import React from 'react'
import {
  adobeXDLogo,
  adobeXDLogoHover, antDesignLogo,
  antDesignLogoHover,
  boostrapLogo,
  boostrapLogoHover, cssLogo,
  cssLogoHover, figmaLogo,
  figmaLogoHover, gitLogo,
  gitLogoHover,
  htmlLogo,
  htmlLogoHover,
  jestLogo,
  jestLogoHover,
  jsLogo,
  jsLogoHover, lessLogo,
  lessLogoHover, materialUILogo,
  materialUILogoHover, nextLogo,
  nextLogoHover, reactLogo,
  reactLogoHover,
  reduxLogo,
  reduxLogoHover,
  sassLogo,
  sassLogoHover, tsLogo,
  tsLogoHover, vsLogo,
  vsLogoHover
} from '../../assets'
import { VIcon } from '../icon'
import styles from './toolstech.module.scss'

export function VToolsTech() {
  return (
    <div className={styles.technologiesIcons}>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={htmlLogo}
          onHoverIcon={htmlLogoHover}
          height="76px"
          width="76px"
          name="HTML"
          tooltipID="html-tooltip" />
        <VIcon
          defaulIcon={cssLogo}
          onHoverIcon={cssLogoHover}
          height="76px"
          width="76px"
          name="CSS"
          tooltipID="css-tooltip" />
        <VIcon
          defaulIcon={jsLogo}
          onHoverIcon={jsLogoHover}
          height="65px"
          width="65px"
          name="JavaScript"
          tooltipID="js-tooltip" />
        <VIcon
          defaulIcon={tsLogo}
          onHoverIcon={tsLogoHover}
          height="65px"
          width="65px"
          name="TypeScript"
          tooltipID="ts-tooltip" />
        <VIcon
          defaulIcon={reactLogo}
          onHoverIcon={reactLogoHover}
          height="65px"
          width="65px"
          name="React"
          tooltipID="react-tooltip" />
        <VIcon
          defaulIcon={nextLogo}
          onHoverIcon={nextLogoHover}
          height="100px"
          width="100px"
          name="next.js"
          tooltipID="next.js-tooltip" />
        <VIcon
          defaulIcon={reduxLogo}
          onHoverIcon={reduxLogoHover}
          height="65px"
          width="65px"
          name="redux"
          tooltipID="redux-tooltip" />
        
        
        <VIcon
          defaulIcon={jestLogo}
          onHoverIcon={jestLogoHover}
          height="50px"
          width="50px"
          name="Jest"
          tooltipID="jest-tooltip" />
      </div>
      <div className={styles.technologiesIconsRow}>
       
       
        <VIcon
          defaulIcon={boostrapLogo}
          onHoverIcon={boostrapLogoHover}
          height="65px"
          width="65px"
          name="boostrap"
          tooltipID="boostrap-tooltip" />
        <VIcon
          defaulIcon={materialUILogo}
          onHoverIcon={materialUILogoHover}
          height="65px"
          width="65px"
          name="Sass"
          tooltipID="materialUI-tooltip" />
        <VIcon
          defaulIcon={antDesignLogo}
          onHoverIcon={antDesignLogoHover}
          height="65px"
          width="65px"
          name="AntDesign"
          tooltipID="AntDesign-tooltip" />
          <VIcon
            defaulIcon={lessLogo}
            onHoverIcon={lessLogoHover}
            height="65px"
            width="65px"
            name="Less"
            tooltipID="less-tooltip" />
        <VIcon
          defaulIcon={sassLogo}
          onHoverIcon={sassLogoHover}
          height="65px"
          width="65px"
          name="Sass"
          tooltipID="sass-tooltip" />
        <VIcon
          defaulIcon={gitLogo}
          onHoverIcon={gitLogoHover}
          height="65px"
          width="65px"
          name="Git"
          tooltipID="git-tooltip" />
 {/* <VIcon
          defaulIcon={yarnLogo}
          onHoverIcon={yarnLogoHover}
          height="65px"
          width="65px"
          name="yarn"
          tooltipID="yarn-tooltip" /> */}
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={vsLogo}
          onHoverIcon={vsLogoHover}
          height="50px"
          width="50px"
          name="Visual Studio Code"
          tooltipID="vs-tooltip" />
        <VIcon
          defaulIcon={adobeXDLogo}
          onHoverIcon={adobeXDLogoHover}
          height="50px"
          width="50px"
          name="adobeXD"
          tooltipID="adobeXD-tooltip" />
        <VIcon
          defaulIcon={figmaLogo}
          onHoverIcon={figmaLogoHover}
          height="50px"
          width="50px"
          name="figma"
          tooltipID="figma-tooltip" />
      
      

      </div>
    </div>
  )
}
