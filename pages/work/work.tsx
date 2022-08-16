import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter,
  VTimelineGrid
} from '../../utils'
import Navbar from '../../utils/Navbar'
import { useTypedText } from '../../utils/typingtext'
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
              {useTypedText(`Experienced in •HTML, CSS, JavaScript & TypeScript
                              •React.js, Next.js, Redux, Node.js, Express.js, Mongoose
                              •Mongo-DB & Firebase
                              •React-Native(Expo CLI)
                              •Python
                              •REST API, GraphQL, Apollo-GraphQL
                              •Sass, Bootstrap, Tailwind CSS,
                              •React-bootstrap, Material-UI, Ant-Design, NextUI
                              •OAuth 2 + OIDC, Auth0
                              •Wordpress, Storyblok
                              •Git, GitHub, GitLab
                              •Docker
                              •Search Engine Optimization, Adobe Analytics
                              `, 30, 350)
              }
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