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
        <h1>2020</h1>

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
            Mainly focused on Next.js projects.
            Building from scratch a complete WebRTC Phone web application, based on SIP.js library. Major functionalities:<br />
            - making new, answering, and holding calls (conferences as well),<br />
            - contacts list with functionality of adding, deleting, and editing contacts. Search and sort options applied as well,<br />
            - account and phone input/output audio settings.<br />
            <br />
            My main responsibilities of the project:<br />
            -working collaboratively in team environment, resolving conflicts,<br />
            -writing a clean and high-quality codebase,<br />
            -refactoring of codebase,<br />
            -writing the documentation,<br />
            -implementation of the functionalities from the documentation, given previously by PM,<br />
            -creating responsive, accessible and efficient web views, based on previously given mockups,<br />
            -reviewing pull requests of my less experienced peers, and helping them with styling/creating components,<br />
            -writing efficient unit tests.<br />
            <br />
            Achievements I am most proud of:<br />
            -building a light version of main application that could be inserted into an iframe and creating an API via those two elements could communicate,<br />
            -helping my peer with fixing up commit history on main branch in out project, after his mistaken merging,<br />
            -creating documentation with code standards of codebase of our project,<br />
            -implementing CSS modules into our main project, which improved team workflow noticeably,<br />
            -constructing complete translation system which let the user to change language of application
            (if not chosen, language was detected automatically).
            <br />
            Languages: <b>JavaScript</b>, <b>TypeScript</b>, <b>React.js</b>, <b>Next.js</b>.<br />
            Database: <b>MongoDB</b>,<b>Firebase</b>.<br />
            Styling: <b>Material UI</b>, <b>Ant Design UI</b>, <b>React-boostrap</b>, <b>SASS</b>, <b>boostrap</b>, <b>CSS</b>.<br />
            Version Control System: <b>GitHub</b>,<b>GitLab</b><br />
            Issue trancing: <b>Trello</b>.
            Version control system: <b>Git</b>, <b>GitHub</b>, <b>GitLab</b>.<br />
            Testing: <b>React Testing Library, JEST</b>, <b>Puppeteer</b><br />
            Communication tool: <b>Microsoft Teams</b>, <b>Google meets</b>, <b>Zoom</b>.
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