import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Fade } from "react-awesome-reveal"

import {
  VFooter,
  VMainHeader,
  VToolsTech,
  
} from '../../utils'
import Navbar from '../../utils/Navbar';

import {
  chevronDown,
  profilePicture,
  profilePicture1
} from '../../assets'
import styles from './home.module.scss'



export default function VHome() {
  return (
    <>
    <div className={styles.homeContainer}>
      <Head>
        <title>Mahmood ul Islam</title>
        <meta name="description" content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills." />
        <meta name="author" content="Mahmood ul Islam"/>
        <meta name="keywords" content="Mahmood ul Islam, Portfolio, Frontend"/>
        <meta property="og:image" content="https://www.khudziec.com/portfolioPage.png" key="ogimage"/>
        <link rel="shortcut icon" href="/Mi-logo.svg" type="image/x-icon"/>
      </Head>
      
      <Navbar activeTab="Home"/>
      <div className={styles.content}>
        <div className={styles.intro}>
          <div className={styles.introduction}>
            <VMainHeader/>
            <div className={styles.profilePicture}>
              {/* <Image
                alt="Profile picture of Mahmood ul Islam."
                 width= '400px'
                 height= '534px'
                src={profilePicture}/> */}
             
          
            </div>
          </div>
          <div className={styles.swipeDownIcon}>
            <Image
              alt="Chevron down icon."
              src={chevronDown}
              width="40px"
              height="15px"/>
          </div>
        </div>
        <div className={styles.workHistory}>
          <div className={styles.linkBox}>
          
            <Fade>
            <div >
        
              <h1 className={styles.linkBoxTitle}>Work<br/>History</h1>
              <h2 className={styles.linkBoxTextContent}>Here you can find out more about the companies I've collaborated with, and the experiences I've gained while working there...</h2>
              <Link href={`/work/work`}>
                <a className={styles.linkBoxButton}>
                  Check out my work history
                </a>
              </Link>
      
              </div >
            </Fade>
          </div>
          <div className={styles.workHistoryBackground}/>
        </div>
        <div className={styles.technologiesAndTools}>
          <Fade>
            <h1>Technologies & Tools I work with</h1>
            <VToolsTech/>
          </Fade>
        </div>
        <div className={styles.personalProjects}>
            <div className={styles.linkBox}>
              <Fade>
                <h1 className={styles.linkBoxTitle}>About me</h1>
                <h2 className={styles.linkBoxTextContent}>Here you can find out more about my professional life and career...</h2>
                <Link href={`/about/about`}>
                  <a className={styles.linkBoxButton}>
                    Get to know more about me
                  </a>
                </Link>
              </Fade>
            </div>
          <div className={styles.personalProjectsBackground}/>
        </div>
        <div className={styles.workHistory}>
          <div className={styles.linkBox}>
          
            <Fade>
            <div >
        
              <h1 className={styles.linkBoxTitle}>My<br/>Projects</h1>
              <h2 className={styles.linkBoxTextContent}>Here you can find out more about the projects I've been part of, and experiences I've achieved while working with those projects...</h2>
              <Link href={`/projects/projects`}>
                <a className={styles.linkBoxButton}>
                  Check out some of my projects
                </a>
              </Link>
      
              </div >
            </Fade>
          </div>
          <div className={styles.workHistoryBackground}/>
        </div>
      </div>
      <VFooter/>
    </div>
</>
  )
}
