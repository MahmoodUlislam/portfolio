import { uploadcareLoader } from '@uploadcare/nextjs-loader';
import Image from 'next/image';
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
              <h2 className={styles.cardContentDetails}>1.2.2019 - 31.5.2022</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            job location: Dhaka, Bangladesh.<br />
            <br />
            Project's usage:<br />
            JavaScript, React.js, Next.js, MongoDB, Firebase, Material UI, Ant Design UI, React-bootstrap, SASS, bootstrap, CSS, GitHub, GitLab, Trello.<br />
            <br />
            • Learned to use SWR with Axios, Crypto.js, and Lodash as well as learned to use cookies and query parameters<br />
            • Implementation of Search and sort functions, and manipulation of data from the user by JavaScript<br />
            • Experienced using Material UI + Ant Design and SASS altogether<br />
            • Customized fully responsive websites with mobile, tablet and desktop views<br />
            • Architected for both frontend and backend sides of the app<br />
            • Creating asynchronous communication between client and server via REST API, experienced in setting up the server with the database<br />
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
              <h2 className={styles.cardContentDetails}>1.6.2022 - 5.9.2022</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Project: Sunrise-club (https://www.sunrise.ch/en/moments), an Event booking site for the Telco (Sunrise) user of Switzerland<br />
            <br />
            job location: Dhaka, Bangladesh.
            <br />
            <br />
            Project's usage:<br />
            JavaScript, TypeScript, React.js, Next.js, MongoDB, REST APIs, Storyblok CMS, Material UI, Ant Design UI, React-bootstrap, SASS, bootstrap, CSS, Git, GitHub, GitLab, Trello<br />
            <br />
            • Learned Next.js at the enterprise level, the pros, and cons of using Next.js to maintain URL redirection<br />
            • Created a website with high security and maintained a web firewall<br />
            • Learned to implement OAuth 2 + OIDC and learned to implement Adobe Analytics<br />
            • Experienced using Material UI + React-Bootstrap and SASS<br />
            • Proficient in using logger in the project, Building API in Next.js, implementing Storyblok CMS, MongoDB database<br />
            • Practiced using SWR with Axios, Crypto.js, and Lodash as well as learned to use cookies and query parameters<br />
            <br />
            Project's specific works:<br />
            • Maintained URL redirect with WAF (Web Application Firewall) in the production site. Creating an API & middleware through Next.js<br />
            • Maintained 3 test environments and helped my peer with fixing up commit history on the main branch in our project<br />
            • Created documentation with code standards of the codebase of our project, Implementing CSS modules into our main project<br />
            • Constructed a complete language translation system<br />
            <br />

            Languages: <b>JavaScript</b>, <b>TypeScript</b>, <b>React.js</b>, <b>Next.js</b>.<br />
            Database: <b>MongoDB</b>, <b>Firebase</b>.<br />
            Styling: <b>Material UI</b>, <b>Ant Design UI</b>, <b>React-boostrap</b>, <b>SASS</b>, <b>boostrap</b>, <b>CSS</b>.<br />
            Version Control System: <b>Git</b>, <b>GitHub</b>, <b>GitLab</b><br />
            Issue trancing: <b>Trello</b><br />
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
              <h2 className={styles.cardContentDetails}>05.4.2023 - 14.6.2024</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>

            Project: esiKidz (https://esikidz.com/),<br />
            Software solution for childcare institution management.<br />
            <br />
            job location: Saskatoon, Saskatchewan, Canada.
            <br />
            <br />
            Project's usage: <br />
            JavaScript, React.js, React Native, node.js, REST APIs, MySQL, SASS, CSS, Git, GitHub, GitLab, Trello, Jira<br />
            • SAAS development by React.js & React Native at the enterprise level<br />
            • Specialize in developing and managing secure web and mobile apps<br />
            • Learning data science by creating apps for web crawling, data extraction, and manipulation<br />
            • Creating & practicing various libraries for data extraction, filtration, and React UI styling<br />
            • Experiencing AWS Lambda, S3-Bucket, MySQL, and other related technologies<br />
            • Developing multiple internal applications & custom libraries to support the software system in efficiently managing clients<br />
            <br />
            Project's specific works: <br />
            • Working collaboratively in a team to maintain the overall architecture and develop a highly scalable system integrated with ReactJS & React-Native APPs, communicating via Node JS API services<br />
            • Performing optimization of developer toolchain to support instant provisioning of new services and infrastructure, fully automating the deployment, and minimizing development friction<br />
            • Designing and implementing to improve software's reliability, scalability, performance, and security<br />
            • Supporting Business Development and Marketing by creating internal software to enhance tasks<br />
            • Performing software testing, improving existing systems, and adding new features<br />
            • Creating and maintaining documentation on test and development operations<br />
            • Demonstrating the system to new customers and technical support to existing customers<br />
            <br />
            Languages: <b>JavaScript</b>, <b>TypeScript</b>, <b>React.js</b>, <b>Next.js</b>.<br />
            Database: <b>MongoDB</b>, <b>Firebase</b>.<br />
            Styling: <b>Material UI</b>, <b>Ant Design UI</b>, <b>React-boostrap</b>, <b>SASS</b>, <b>boostrap</b>, <b>CSS</b>.<br />
            Version Control System: <b>Git</b>, <b>GitHub</b>, <b>GitLab</b><br />
            Issue trancing: <b>Trello</b>,<b>Jira</b><br />
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