import { uploadcareLoader } from '@uploadcare/nextjs-loader'
import Head from 'next/head'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter
} from '../../utils'
import Navbar from '../../utils/Navbar'
import { useTypedText } from '../../utils/typingtext'
import styles from './about.module.scss'

export default function VAbout() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About me</title>
        <meta name="description" content="Mahmood ul Islam Portfolio Page" />
        <meta name="author" content="Mahmood ul Islam" />
        <meta name="keywords" content="Mahmood ul Islam, Portfolio, Frontend" />
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
                              •	Identifying technical solutions
                              •	Client facing skills
                              •	Troubleshooting
                              •	Web graphics
                              •	Bug fixing
                              •	Building UI & UX
                              •	Maintaining data integrity
                              •	Building functionality
                              •	Web application development
                              •	Mobile application development

                              	Experience:
                              •HTML, CSS, JavaScript & Typescript
                              •React js, Next js, Redux, Node, Express
                              •Mongo-DB & Firebase
                              •React-Native, 
                              •Docker
                              •Sass, Bootstrap, React-bootstrap, Material-UI, Ant-Design
                              •Search Engine Optimization

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
                alt="CV mahmood"
                src='/CV-mahmood-for-software-engineering.jpg'
                layout='responsive'
                width='764px'
                height='1080px'
                loader={uploadcareLoader}
              />
            </div>
          </div>
        </div>
      </div>
      <VFooter />
    </div>
  )
}