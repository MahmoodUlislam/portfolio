import React from 'react'
import Head from 'next/head'
import { Fade } from 'react-awesome-reveal'
import {
  VFooter,
  VMenuBar,
  VTimelineGrid
} from '../../utils'
import  Navbar from '../../utils/Navbar'
import styles from './projects.module.scss'
import { useTypedText } from '../../utils/typingtext'

export default function VProjects() {
  return(
    <div className={styles.workContainer}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Mahmood ul Islam Portfolio: work history" />
        <meta name="author" content="Mahmood ul Islam"/>
        <meta name="keywords" content="Mahmood ul Islam, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/Mi-logo.svg" type="image/x-icon"/>
      </Head>
      <Navbar activeTab="Projects"/>
      <div className={styles.content}>
        <div className={styles.summary}>
            <h1>
              Projects
            </h1>
        
            <Fade>
            <h2>
        {useTypedText("Experienced in HTML, CSS, JavaScript, React-Js, Next-Js, Redux, Node, Express, Mongo-DB, Firebase, React Native, J-Query, PHP (basic level), Sass, Bootstrap, React-bootstrap, Material-UI, Next-UI, Docker, Kubernetes, UX & UI design by adobe-XD & Figma and Search Engine Optimization.", 30, 350)}
      </h2>
          
          </Fade>
        </div>
        <Fade>
          <div className={styles.timelineGridCotainer}>
          
            <VTimelineGrid/>
          </div>
        </Fade>
      </div>
      <VFooter/>
    </div>
  )
}