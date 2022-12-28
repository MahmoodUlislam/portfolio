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
          height={76}
          width={76}
          name="HTML"
        />
        <VIcon
          defaulIcon={cssLogo}
          onHoverIcon={cssLogoHover}
          height={76}
          width={76}
          name="CSS"
        />
        <VIcon
          defaulIcon={jsLogo}
          onHoverIcon={jsLogoHover}
          height={65}
          width={65}
          name="JavaScript"
        />
        <VIcon
          defaulIcon={tsLogo}
          onHoverIcon={tsLogoHover}
          height={65}
          width={65}
          name="TypeScript"
        />
        <VIcon
          defaulIcon={reactLogo}
          onHoverIcon={reactLogoHover}
          height={65}
          width={65}
          name="React"
        />
        <VIcon
          defaulIcon={nextLogo}
          onHoverIcon={nextLogoHover}
          height={100}
          width={100}
          name="next.js"
        />
        <VIcon
          defaulIcon={reduxLogo}
          onHoverIcon={reduxLogoHover}
          height={65}
          width={65}
          name="Redux"
        />


        <VIcon
          defaulIcon={jestLogo}
          onHoverIcon={jestLogoHover}
          height={50}
          width={50}
          name="Jest"
        />
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={boostrapLogo}
          onHoverIcon={boostrapLogoHover}
          height={65}
          width={65}
          name="boostrap"
        />
        <VIcon
          defaulIcon={materialUILogo}
          onHoverIcon={materialUILogoHover}
          height={65}
          width={65}
          name="Sass"
        />
        <VIcon
          defaulIcon={antDesignLogo}
          onHoverIcon={antDesignLogoHover}
          height={65}
          width={65}
          name="AntDesign"
        />
        <VIcon
          defaulIcon={lessLogo}
          onHoverIcon={lessLogoHover}
          height={65}
          width={65}
          name="Less"
        />
        <VIcon
          defaulIcon={sassLogo}
          onHoverIcon={sassLogoHover}
          height={65}
          width={65}
          name="Sass"
        />
        <VIcon
          defaulIcon={gitLogo}
          onHoverIcon={gitLogoHover}
          height={65}
          width={65}
          name="Git"
        />
        {/* <VIcon
          defaulIcon={yarnLogo}
          onHoverIcon={yarnLogoHover}
          height={65}
          width={65}
          name="yarn"
          ip" /> */}
      </div>
      <div className={styles.technologiesIconsRow}>
        <VIcon
          defaulIcon={vsLogo}
          onHoverIcon={vsLogoHover}
          height={50}
          width={50}
          name="Visual Studio Code"
        />
        <VIcon
          defaulIcon={adobeXDLogo}
          onHoverIcon={adobeXDLogoHover}
          height={50}
          width={50}
          name="adobeXD"
        />
        <VIcon
          defaulIcon={figmaLogo}
          onHoverIcon={figmaLogoHover}
          height={50}
          width={50}
          name="figma"
        />



      </div>
    </div>
  )
}
