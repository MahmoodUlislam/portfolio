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
                I'm a dedicated and versatile Software Engineer with strong expertise in full-stack web and mobile app development, cloud architecture, and modern DevOps practices. I thrive in fast-paced environments, learning and adapting to new technologies quickly to deliver secure, scalable, and efficient solutions.
              </span>

              <span className={styles.lineStyles}>
                • JavaScript, Python - strong foundation in modern programming
                • React.js, Next.js, Vue.js, React Native (Expo), Quasar - advanced frontend frameworks
                • Node.js, Express.js - robust backend and REST API development
                • PostgreSQL, MySQL, MongoDB, DynamoDB, Firebase - database design & optimization
                • AWS: Cognito, Lambda, API Gateway, Chime SDK, ECS (Fargate), RDS, S3, EventBridge - cloud-native systems
                • GraphQL, Apollo, WebSockets, Amazon Chime SDK, WebRTC - advanced API and real-time communication
                • Prisma, Sequelize - ORM and schema management
                • Auth0, OAuth 2.0, OIDC, bcrypt.js, Crypto.js - secure authentication practices
                • Docker, GitHub Actions, Vite, Webpack - containerization, CI/CD, and modern build tools
                • Chart.js, ECharts, vue-cal, PDFMake - data visualization & reporting
                • WordPress, Storyblok CMS - headless CMS integration
              </span>

              <span className={styles.lineStyles}>
                # Key Competencies and Skills
                • End-to-end project leadership in cloud-based healthcare platforms
                • Expertise in AWS architecture, deployment, and serverless infrastructure
                • Real-time telehealth solutions using Amazon Chime SDK and AI services
                • AI integration using Amazon Bedrock, Rekognition, Transcribe & HealthLake
                • Strong focus on UI/UX, testing, automation, and scalable system design
                • Effective collaboration with stakeholders, researchers, and cross-functional teams
                • Agile development, continuous deployment, and DevOps implementation
              </span>

              <span className={styles.lineStyles}>
                Currently, I'm leading full-stack development and DevOps for “Lifeline,” a virtual mental healthcare platform built with Vue.js, React Native, and AWS. From developing APIs to building custom native modules and AI integrations, I focus on delivering secure, accessible, and impactful digital health solutions. My past experience includes working on enterprise SaaS platforms, event booking systems, and data-driven applications across multiple industries.
              </span>
            </pre>
          </Fade>


          <div className={styles.timelineGridItemCard}>
            <h2 className={styles.hoverTip}>
              My resume
            </h2>
            <div className={styles.cardContent}>
              <div className={styles.resumeImageWrapper}>
                <Image
                  loader={myLoader}
                  alt="CV mahmood-page-1"
                  src='/CVmahmood-1.jpg'
                  width={850}
                  height={1100}
                />
                <Image
                  loader={myLoader}
                  alt="CV mahmood-page-2"
                  src='/CVmahmood-2.jpg'
                  width={850}
                  height={1100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <VFooter />
    </div>
  )
}