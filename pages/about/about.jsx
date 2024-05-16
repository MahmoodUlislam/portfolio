import Head from 'next/head'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter
} from '../../utils'
import Navbar from '../../utils/Navbar'
import styles from './about.module.scss'

let width = 0;
let height = 0;
const myLoader = () => {
  return `/CVmahmood-1.png?w=${width}h=${height}`
}


export default function VAbout() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About me</title>
        <meta name="description" content="Mahmood ul Islam Portfolio Page" />
        <meta name="author" content="Mahmood ul Islam" />
        <meta name="keywords" content="Mahmood ul Islam, Portfolio, About, About Mahmood" />
        <link rel="shortcut icon" href="/Mi-logo.svg" type="image/x-icon" />
      </Head>
      <Navbar activeTab="About" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h1>
            About me
          </h1>
          <p style={{ color: 'white', fontSize: '40px' }}>Long story short</p>

          <Fade>
            <pre className={styles.aboutMyself}>
              <span className={styles.lineStyles}>
                I am a quick learner and can rapidly adapt to new technologies. Therefore, if there is something that does not fit my technical skills, I am willing to learn to fit well in any position.
              </span>

              <span className={styles.lineStyles}>
                # Areas of expertise
                • JavaScript, TypeScript, React.js, React Native, Next.js
                • Node.js, Express.js, Mongo-DB, SQL
                • REST API, GraphQL, Apollo-GraphQL
                • Sass, Bootstrap, Tailwind CSS, HTML and CSS
                • Python, UI & testing libraries for React, PDF-make library
                • OAuth 2 + OIDC, Auth0, WordPress, Storyblok CMS
                • Git, GitHub, GitLab, Bitbucket, Jira, Trello
                • Docker, Search Engine Optimization
              </span>

              <span className={styles.lineStyles}>
                # Key competencies and skills
                • Full-stack Web and mobile APP development
                • Build process, Deployment, and Testing
                • Troubleshooting and identifying technical solutions
                • API & Microservice system development
                • Project, Team, and client management
                •	Experience working on complex analytics, data visualization, or mapping applications.
                •	Efficient problem-solving and analytical skills
              </span>

              <span className={styles.lineStyles}>
                I have good experience in React & its eco-system. Also in my current job, I am working for a React base system. I have enterprise-level experience in React, Next.js and all related libraries & frameworks.
              </span>
            </pre>
          </Fade>

          <div className={styles.timelineGridItemCard}>
            <h2 className={styles.hoverTip}>
              My resume
            </h2>
            <div className={styles.cardContent}>

              <Image
                loader={myLoader}
                alt="CV mahmood-1"
                src='/CVmahmood-1.png'
                width={430}
                height={556.47}
                layout="responsive"
              />
              <Image
                loader={myLoader}
                alt="CV mahmood-2"
                src='/CVmahmood-2.png'
                width={430}
                height={556.47}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
      <VFooter />
    </div>
  )
}