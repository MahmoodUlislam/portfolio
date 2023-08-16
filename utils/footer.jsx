import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import {
  gitHubLogo,
  gitHubLogoHover, gmailLogo,
  gmailLogoHover,
  linkedInLogo,
  linkedInLogoHover
} from '../assets';
import styles from './footer.module.scss';
import { VIcon } from './icon';

export function VFooter() {
  return (
    <footer className={styles.footer}>

      <a
        className={styles.goUpSquare}
        rel={"external"}
        href="tel:+13062618482"
      >
        <PhoneInTalkIcon sx={{ width: "50px" }} />
      </a>

      <h4 className={styles.copyrights}>
        ©{new Date().getFullYear()}
        <br />
        All rights reserve to <span>Mahmood</span>
      </h4>
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
    </footer>
  )
}