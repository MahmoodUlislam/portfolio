import { uploadcareLoader } from '@uploadcare/nextjs-loader'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fade } from "react-awesome-reveal"
import {
  chevronDown
} from '../../assets'
import {
  VFooter,
  VMainHeader,
  VToolsTech
} from '../../utils'
import Navbar from '../../utils/Navbar'
import styles from './home.module.scss'
export default function VHome() {
  return (
    <>
      <div className={styles.homeContainer}>
        <Head>
          <title>Mahmood ul Islam</title>
          <meta name="description" content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills." />
          <meta name="author" content="Mahmood ul Islam" />
          <meta name="keywords" content="Mahmood ul Islam, Portfolio, homepage, landing" />
          <meta property="og:image" content="https://portfolio-mahmoodulislam.vercel.app/" key="ogimage" />
          <link rel="shortcut icon" href="/Mi-logo.svg" type="image/x-icon" />
        </Head>

        <Navbar activeTab="Home" />
        <div className={styles.content}>
          <div className={styles.intro}>
            <div className={styles.introduction}>
              <VMainHeader />
              <div className={styles.profilePicture}>

              </div>
            </div>
            <div className={styles.swipeDownIcon}>
              <Image
                alt="Chevron down icon"
                loader={uploadcareLoader}
                src={chevronDown}
                width={40}
                height={15} />
            </div>
          </div>
          <div className={styles.workHistory}>
            <div className={styles.linkBox}>
              <Fade>
                <div >
                  <h1 className={styles.linkBoxTitle}>Work<br />History</h1>
                  <h2 className={styles.linkBoxTextContent}>Here you can find out more about the companies I have collaborated with, and the experiences I have gained while working there...</h2>
                  <Link href={`/work/work`} className={styles.linkBoxButton} >
                    Check out my work history

                  </Link>
                </div >
              </Fade>
            </div>
            <div className={styles.workHistoryBackground} />
          </div>
          <div className={styles.technologiesAndTools}>
            <Fade>

              <h1>Technologies and Tools I work with</h1>

              <VToolsTech />
            </Fade>
          </div>
          <div className={styles.personalProjects}>
            <div className={styles.linkBox}>
              <Fade>
                <h1 className={styles.linkBoxTitle}>About me</h1>
                <h2 className={styles.linkBoxTextContent}>Here you can find out more about my professional life and career...</h2>
                <Link href={`/about/about`} className={styles.linkBoxButton} >
                  Get to know more about me
                </Link>
              </Fade>
            </div>
            <div className={styles.personalProjectsBackground} />
          </div>
          <div className={styles.workHistory}>
            <div className={styles.linkBox}>

              <Fade>
                <div >

                  <h1 className={styles.linkBoxTitle}>My<br />Projects</h1>
                  <h2 className={styles.linkBoxTextContent}>Here you can find out more about the projects I have been part of, and experiences I have achieved while working with those projects...</h2>
                  <Link href={`/projects/projects`} className={styles.linkBoxButton} >
                    Check out some of my projects
                  </Link>

                </div >
              </Fade>
            </div>
            <div className={styles.workHistoryBackground} />
          </div>
        </div>
        <VFooter />
      </div>
    </>
  )
}
