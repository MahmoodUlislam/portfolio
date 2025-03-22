import { gitHubLogo, gitHubLogoHover, gmailLogo, gmailLogoHover, linkedInLogo, linkedInLogoHover } from '../../assets';
import { VIcon } from '../icon';
import { useTypedText } from '../typingtext';
import styles from './mainheader.module.scss';

export function VMainHeader() {
  return (
    <div className={styles.aboutInfo}>
      <h1 className={styles.header}>
        Hello!
        <br />
        I am Mahmood
      </h1>
      <h2 className={styles.heroBody}>
        {useTypedText("Welcome to my portfolio site! I'm a Lead Software Engineer | Cloud & AI Architect, currently working in Canada.", 30, 350)}
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