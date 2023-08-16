import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Image from 'next/image';
import { getDate } from '../date';
import styles from './timelinegrid.module.scss';

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
                loader={uploadcareLoader}
                alt="Quantic Dynamics logo."
                src='/quanticDynamicsLogo.png'
                height={25}
                width={73.7} />
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
            job location: Dhaka, Bangladesh.
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
                loader={uploadcareLoader}
                alt="Selise Digital Platform logo."
                src='/seliseLogo.png'
                height={25}
                width={52} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Selise Digital Platform</h1>
              <h2 className={styles.cardContentDetails}>Software Engineer</h2>
              <h2 className={styles.cardContentDetails}>1.6.2022 – 5.9.2022</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Project: Sunrise-club (https://www.sunrise.ch/en/moments), an Event booking site for the Telco (Sunrise) user of Switzerland
            <br />
            job location: Dhaka, Bangladesh.

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

      <div className={styles.timelineGridItemWide}>
        <h1>2023</h1>

      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItem} />
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo} >
              <Image
                loader={uploadcareLoader}
                alt="Saaska Software logo."
                src='/SaaskaLogo.png'
                height={41}
                width={52} />
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Saaska Software Inc.</h1>
              <h2 className={styles.cardContentDetails}>Software Engineer and Technical Support Assistant</h2>
              <h2 className={styles.cardContentDetails}>05.4.2023 – {getDate()}</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>

            Project: esiKidz (https://esikidz.com/),<br />
            Software solution for childcare institution management.
            <br />
            job location: Saskatoon, Saskatchewan, Canada.

            <br />
            My main responsibilities for the project:<br />
            #  Working collaboratively in a team to maintain overall architecture and development of a highly scalable system integrated with ReactJS & React-Native APPs, communicating via Node JS API services and Lambda functions,<br />
            # Performing optimization of developer toolchain to support instant provisioning of new services and infrastructure, fully automating the deployment, and minimizing development friction,<br />
            # Designing and implementing to improve software’s reliability, scalability, performance, and security,<br />
            # Supporting Business Development and Marketing by creating internal software to enhance tasks,<br />
            # Performing software testing, improving existing systems, and adding new features,<br />
            # Creating and maintaining documentation on test and development operations,<br />
            # Demonstrating the system to new customers and technical support to existing customers,<br /><br />


            Achievements I am most proud of:
            # Learned React.js at the enterprise level,<br />
            # Created a web app with high security,<br />
            # Learned data science by creating crawling, data extraction, data filtration & alteration apps,<br />
            # Experience AWS Lambda, S3-Bucket, MySQL etc,<br />
            # Practiced various libraries for data extraction, filtration, and writing,<br />
            # Achieve enterprise-level knowledge of mobile app development,<br />
            # Building various internal apps to assist the software to manage childcare centers.<br />

            Languages: <b>JavaScript</b>, <b>TypeScript</b>, <b>React.js</b>, <b>Next.js</b>.<br />
            Database: <b>MongoDB</b>, <b>Firebase</b>.<br />
            Styling: <b>Material UI</b>, <b>Ant Design UI</b>, <b>React-boostrap</b>, <b>SASS</b>, <b>boostrap</b>, <b>CSS</b>.<br />
            Version Control System: <b>Git</b>, <b>GitHub</b>, <b>GitLab</b><br />
            Issue trancing: <b>Trello</b>,<b>Jira</b><br />
            Communication tools:<b>Microsoft Teams</b>, <b>Google meets</b>, <b>Zoom</b>.<br />
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard} />
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