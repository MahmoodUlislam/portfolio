import Image from 'next/image'
import Head from 'next/head'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import {


  VFooter
} from '../../utils'
import  Navbar from '../../utils/Navbar'

import styles from './about.module.scss'

import { useTypedText } from '../../utils/typingtext'

export default function VAbout() {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About me</title>
        <meta name="description" content="Karolina Hudziec Portfolio Page" />
        <meta name="author" content="Karolina Hudziec"/>
        <meta name="keywords" content="Karolina, Hudziec, Portfolio, Frontend"/>
        <link rel="shortcut icon" href="/Mi-logo.svg" type="image/x-icon"/>
      </Head>
      <Navbar activeTab="About"/>
      <div className={styles.content}>
        <div className={styles.summary}>
            <h1>
              Long story short about me
            </h1>
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
•	HTML, CSS, JavaScript,
•	React-Js, Next-Js,
•	Redux,
•	Node, Express,
•	Mongo-DB, Firebase,
•	React Native,
•	J-Query, PHP (basic level), 
•	Sass, Bootstrap, React-bootstrap, Material-UI, Next-UI,
•	Docker, Kubernetes,
•	UX & UI design by adobe-XD & Figma
•	Search Engine Optimization.

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
               layout='fixed'
               width='430vw'
               height='600vh'
               />
           
         
        </div>
      </div>
       
      </div>
      </div>
      <VFooter/>
    </div>
  )
}