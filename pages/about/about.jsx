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
  return `/CVmahmood.png?w=${width}h=${height}`
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
                An imaginative Full-stack developer with expertise in creating web and mobile applications of all standards. Highly aware of industry issues and trends, especially in accessibility, usability, emerging technologies, and open-source CMS.
              </span>

              <span className={styles.lineStyles}>
                # Areas of expertise
                • JavaScript, TypeScript, React.js, React Native Next.js
                • Redux, Node.js, Express.js, Mongoose, Mongo-DB, Firebase
                • REST API, GraphQL, Apollo-GraphQL • Sass, Bootstrap, Tailwind CSS, HTML and CSS
                • React-bootstrap, Material-UI, Ant-Design, Tailwind CSS • OAuth 2 + OIDC, Auth0, WordPress, Storyblok CMS
                • Git, GitHub, GitLab
                • Docker, Search Engine Optimization
              </span>

              <span className={styles.lineStyles}>
                # Key competencies and skills
                • Web & Mobile APP development
                • Build process, Deployment, and Testing
                • Troubleshooting, Identifying technical solutions
                • UI/UX design
                • Project, Team, and client management
                • Efficient problem-solving and analytical skills
              </span>

              <span className={styles.lineStyles}>
                Responsible for overseeing all aspects of web development, from initiation to completion.
              </span>
            </pre>
          </Fade>

          <div className={styles.timelineGridItemCard}>
            <h2 className={styles.hoverTip}>
              Hover to zoom [CV]...
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