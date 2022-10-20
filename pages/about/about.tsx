// import { uploadcareLoader } from '@uploadcare/nextjs-loader'
import Head from 'next/head'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter
} from '../../utils'
import Navbar from '../../utils/Navbar'
import { useTypedText } from '../../utils/typingtext'
import styles from './about.module.scss'

let width = 0;
const myLoader = () => {
  return `/CVmahmood.jpg?w=${width}`
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
            <h2>
              {useTypedText(`An energetic and imaginative Full-stack developer along with the ability to create web & mobile applications of all standards. High awareness of industry issues and trends; particularly regarding accessibility, usability, emerging technologies, and open-source CMS.
                              	Full-stack web development:
                              •UI and UX design
                              •Responsive design skills
                              •Project management, Team management
                              •Troubleshooting, Identifying technical solutions
                              •Client facing skills
                              •Excellent problem-solving skills
                              •Analytical skills
                              •Build process, Deployment, Logger implementation
                              •Testing and debugging, Bug fixing
                              •Web application development
                              
                              	Experience:
                              •HTML, CSS, JavaScript & TypeScript
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

                              Responsible for all the works that belong to the web development from start to finish.
                              `, 30, 350)}
            </h2>
          </Fade>

          <div className={styles.timelineGridItemCard}>
            <h2 className={styles.hoverTip}>
              Hover to zoom [CV]...
            </h2>
            <div className={styles.cardContent}>

              <Image
                loader={myLoader}
                alt="CV mahmood"
                src='/CVmahmood.jpg'
                width={764}
                height={1080}
              // loader={uploadcareLoader}
              />
            </div>
          </div>
        </div>
      </div>
      <VFooter />
    </div>
  )
}