import Image from 'next/image'
import { getDate } from '../date'
import styles from './timelinegrid.module.scss'


export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>2019</h1>
        <div className={styles.timelinePoint} />
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>
          Hover to zoom...
        </h2>

      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemWide}>
        <h1>2019</h1>

      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo} >
              <Image
                unoptimized
                alt="Quantic Dynamics logo."
                src='/quanticDynamicsLogo.png'
                height={50}
                width={150} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Quantic Dynamics ltd.</h1>
              <h2 className={styles.cardContentDetails}>Senior Web Developer</h2>
              <h2 className={styles.cardContentDetails}>1.2.2019 – 31.5.2022</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building on my own a responsive web application,
            which had a catalogue of all company servers, displayed in the
            tree structure. Server data was taken and parsed from XML file to JSON.
            Anyone logged could browse through lists of servers.
            Search and sort by name function were applied.
            App had system of accounts as well. Admins, technical and user ones.
            Admins could manage accounts by editing them, deleting and authorize
            (every new user had to be authorized by admin). Admins could also
            see what user is logged at the moment.<br />
            <br />
            Main responsibilities:<br />
            - designing both frontend and backend side of the app,<br />
            - creating an asynchronous communication between client and server via <b>REST API</b>,<br />
            - setting up server with database.<br />
            <br />
            Languages: <b>JavaScript</b>, <b>React.js</b>, <b>Next.js</b>.<br />
            Database: <b>MongoDB</b>,<b>Firebase</b>.<br />
            Styling: <b>Material UI</b>, <b>Ant Design UI</b>, <b>React-boostrap</b>, <b>SASS</b>, <b>boostrap</b>, <b>CSS</b>.<br />
            Version Control System: <b>GitHub</b>,<b>GitLab</b><br />
            Issue trancing: <b>Trello</b>.
          </p>
        </div>
      </div>

      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />

      <div className={styles.timelineGridItemWide}>
        <h1>2022</h1>

      </div>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo} >
              <Image
                unoptimized
                alt="Selise Digital Platform logo."
                src='/seliseLogo.png'
                height={50}
                width={150} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Selise Digital Platform</h1>
              <h2 className={styles.cardContentDetails}>Software Engineer</h2>
              <h2 className={styles.cardContentDetails}>1.6.2022 – {getDate()}</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            SELISE Digital Platforms - Dhaka<br />
            1.6.2022 to {getDate()}<br /><br />
            Project: Sunrise-club (https://www.sunrise.ch/en/moments), an Event booking site for the Telco (Sunrise) user of Switzerland
            <br />
            <br />
            My main responsibilities for the project:<br />
            # Working collaboratively in the team environment, resolving conflicts,<br />
            # Writing a clean and high-quality codebase,<br />
            # Refactoring of the codebase,<br />
            # Writing the documentation,<br />
            # Implementation of the functionalities from the documentation, given previously by the Project Manager,<br />
            # Creating responsive, accessible, and efficient web views, based on previously given mockups,<br />
            # Reviewing pull requests of my less experienced peers, and helping them with styling/creating components,<br />
            # Writing efficient unit tests.<br /><br />


            Achievements I am most proud of:
            # Maintaining URL redirect with WAF in production site, along with URL prefix in request. Creating an API & middleware through Next.js,<br />
            # Maintaining 3 test environments and helping my peer with fixing up commit history on the main branch in our project, after his mistaken merging,<br />
            # Creating documentation with code standards of the codebase of our project,<br />
            # Implementing CSS modules into our main project, which improved team workflow noticeably,<br />
            # Constructing a complete translation system that let the user change the language of the application (if not chosen, language was detected automatically).<br /><br />

            Languages: <b>JavaScript</b>, <b>TypeScript</b>, <b>React.js</b>, <b>Next.js</b>.<br />
            Database: <b>MongoDB</b>, <b>Firebase</b>.<br />
            Styling: <b>Material UI</b>, <b>Ant Design UI</b>, <b>React-boostrap</b>, <b>SASS</b>, <b>boostrap</b>, <b>CSS</b>.<br />
            Version Control System: <b>Git</b>, <b>GitHub</b>, <b>GitLab</b><br />
            Issue trancing: <b>Trello</b><br />
            Communication tools:<b>Microsoft Teams</b>, <b>Google meets</b>, <b>Zoom</b>.<br />
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint} />
        <h1>{
          // get full year at current date
          new Date().getFullYear()
        }</h1>
      </div>
    </div>
  )
}