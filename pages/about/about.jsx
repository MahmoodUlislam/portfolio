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
                • JavaScript, TypeScript, Python, C, C++
                • React.js, Next.js, React Native
                • Node.js, Express.js, Mongo-DB, MySQL
                • REST API, GraphQL, Apollo-GraphQL • HTML, CSS, Sass, WordPress, Storyblok CMS
                • UI, utility, and testing libraries for React.js
                • OAuth 2 + OIDC, Auth0, NumPy, Matplotlib.
                • Git, GitHub, GitLab, Bitbucket, Jira, Trello
                • Docker, Search Engine Optimization
              </span>

              <span className={styles.lineStyles}>
                # Key competencies and skills
                • Full-stack Web and mobile APP development
                • Build process, Deployment, and Testing
                • Troubleshooting and identifying technical solutions
                • API & Microservice system development
                •	Experience working on complex analytics, data visualization, or mapping applications.
                •	Machine learning, Deep learning, and Nural Network
                • Project, Team, and client management
                • Efficient problem-solving and analytical skills
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
                src='/CVmahmood-1.jpg'
                width={430}
                height={556.47}
                layout="responsive"
              />
              <Image
                loader={myLoader}
                alt="CV mahmood-2"
                src='/CVmahmood-2.jpg'
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