import { gitHubLogo, gitHubLogoHover, gmailLogo, gmailLogoHover, linkedInLogo, linkedInLogoHover } from '../../assets';
import { VIcon } from '../icon';
import { useTypedText } from '../typingtext';
import styles from './mainheader.module.scss';

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        Hello everyone!
        <br />
        I am Mahmood
      </h1>
      <h2 className={styles.heroBody}>
        {useTypedText("Welcome on my portfolio site! I'm a Software Developer, currently working as Full-stack Web Developer. Living in Saskatoon, Saskatchewan, Canada.", 30, 350)}
      </h2>
      <div className={styles.footer}>
        <div className={styles.icons}>
          <VIcon
            defaulIcon={linkedInLogo}
            onHoverIcon={linkedInLogoHover}
            href="https://www.linkedin.com/in/mahmoodislam/"
            height={30}
            width={30}
            name="LinkedIn" />
          <VIcon
            defaulIcon={gmailLogo}
            onHoverIcon={gmailLogoHover}
            href="mailto:mahmood.islam@gmail.com"
            height={30}
            width={30}
            name="Gmail" />
          <VIcon
            defaulIcon={gitHubLogo}
            onHoverIcon={gitHubLogoHover}
            href="https://github.com/MahmoodUlislam"
            height={30}
            width={30}
            name="GitHub" />
        </div>
      </div>
    </div>
  )
}