import React from 'react'
import { VIcon } from '../icon'
import {
  
  cssLogo,
  cssLogoHover,
 
  gitLogo,
  gitLogoHover,
  htmlLogo,
  htmlLogoHover,
  jestLogo,
  jestLogoHover,
  jsLogo,
  jsLogoHover,
 
  nextLogo,
  nextLogoHover,
  
  npmLogo,
  npmLogoHover,
  
  reactLogo,
  reactLogoHover,
  sassLogo,
  sassLogoHover,
  tsLogo,
  tsLogoHover,
  vsLogo,
  vsLogoHover,
  
  yarnLogo,
  yarnLogoHover
} from '../../assets'
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
          height="55px"
          width="55px"
          name="JavaScript"
          tooltipID="js-tooltip" />
        <VIcon
          defaulIcon={reactLogo}
          onHoverIcon={reactLogoHover}
          height="55px"
          width="55px"
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
          defaulIcon={tsLogo}
          onHoverIcon={tsLogoHover}
          height="65px"
          width="65px"
          name="TypeScript"
          tooltipID="ts-tooltip" />
        <VIcon
          defaulIcon={sassLogo}
          onHoverIcon={sassLogoHover}
          height="60px"
          width="60px"
          name="Sass"
          tooltipID="sass-tooltip" />
        
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={npmLogo}
          onHoverIcon={npmLogoHover}
          height="65px"
          width="65px"
          name="Node Package Manager"
          tooltipID="npm-tooltip" />
        <VIcon
          defaulIcon={yarnLogo}
          onHoverIcon={yarnLogoHover}
          height="65px"
          width="65px"
          name="yarn"
          tooltipID="yarn-tooltip" />
        <VIcon
          defaulIcon={gitLogo}
          onHoverIcon={gitLogoHover}
          height="65px"
          width="65px"
          name="Git"
          tooltipID="git-tooltip" />
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
          defaulIcon={vsLogo}
          onHoverIcon={vsLogoHover}
          height="50px"
          width="50px"
          name="Visual Studio Code"
          tooltipID="vs-tooltip" />
      

      </div>
    </div>
  )
}
