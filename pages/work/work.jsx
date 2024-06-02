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
              I am a Software Engineer proficient in JavaScript, TypeScript, React.js, Next.js, React Native, Node.js, and MongoDB. With a focus on web and mobile app development, I excel in UI/UX design, troubleshooting, maintaining, and deploying robust solutions. At Saaska Software Inc., I contribute to securing childcare management software using React.js and React Native, optimizing architecture, testing, technical support, and enhancing reliability. At SELISE Digital Platforms, I helped create an event booking site with JavaScript, TypeScript, and Next.js. My experience also includes web development at Quantic Dynamics Ltd., where I built responsive websites and implemented search functions. I am proficient in Git, Graph-QL, UI/UX design, and Data Science. Also, I assisted customers as a Computing Advisor at Best Buy. I possess exceptional skills in managing projects, teams, and clients.
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