import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter,
  VTimelineGrid
} from '../../utils'
import Navbar from '../../utils/Navbar'
import styles from './work.module.scss'

export default function VWork() {
  return (
    <div className={styles.workContainer}>
      <Head>
        <title>Work history</title>
        <meta name="description" content="Mahmood ul Islam Portfolio: work history" />
        <meta name="author" content="Mahmood ul Islam" />
        <meta name="keywords" content="Mahmood ul Islam, Portfolio, Frontend" />
        <link rel="shortcut icon" href="/Mi-logo.svg" type="image/x-icon" />
      </Head>
      <Navbar activeTab="Work" />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h1>
            Work history
          </h1>
          <Fade>
            <h2>
              I am a Software Developer at Virtual Health Hub, where I lead the development of LifeLine, a virtual mental health treatment platform built with Vue.js, React.js, Quasar, and React Native (Expo). I specialize in full-stack development, cloud architecture, and AI/ML integrations, delivering HIPAA-compliant, scalable healthcare solutions. My work includes building REST APIs with Node.js and PostgreSQL, creating native modules to bridge Amazon Chime SDK with React Native, and architecting secure AWS infrastructure using ECS (Fargate), Cognito, EventBridge, and Bedrock. I&apos;ve also developed advanced features like appointment scheduling, medication reminders, and an AI-driven health chatbot, collaborating with medical professionals and researchers to shape impactful digital health tools.
            </h2>
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
            <VTimelineGrid />
          </div>
        </Fade>
      </div>
      <VFooter />
    </div>
  )
}