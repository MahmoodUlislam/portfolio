'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/layout/Navbar'
import MainHeader from '@/components/sections/MainHeader'
import ToolsTech from '@/components/sections/ToolsTech'
import Footer from '@/components/layout/Footer'
import styles from './HomePage.module.css'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.homeContainer}>
      <Navbar activeTab="Home" />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroBackground} />

          <motion.div
            className={styles.heroContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.heroContent}>
              <motion.div
                className={styles.heroText}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <MainHeader />
              </motion.div>

              <motion.div
                className={styles.heroImageContainer}
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                <div className={styles.profileImageWrapper}>
                  {/* First Image (Closed Laptop) */}
                  <div className={`${styles.absoluteInset0} ${styles.firstImage} ${hasScrolled ? styles.fadeOut : ''}`}>
                    <Image
                      src="/pro-pic1.jpg"
                      alt="Mahmood ul Islam - Laptop Closed"
                      fill
                      sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 480px"
                      className={styles.profileImage}
                      priority
                    />
                  </div>

                  {/* Second Image (Open Laptop) */}
                  <div className={`${styles.absoluteInset0} ${styles.secondImage} ${hasScrolled ? styles.fadeIn : ''}`}>
                    <Image
                      src="/pro-pic2.jpg"
                      alt="Mahmood ul Islam - Laptop Open"
                      fill
                      sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 480px"
                      className={styles.profileImage}
                      priority
                    />
                  </div>

                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.decorativeElement} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className={styles.scrollIndicator}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className={styles.scrollIndicatorIcon} />
          </motion.div>
        </section>

        {/* Work History Section */}
        <section className={styles.workHistorySection}>
          <div className={styles.workHistoryBackground} />
          <motion.div
            ref={ref}
            className={styles.workHistoryContainer}
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <motion.div
              className={styles.workHistoryContent}
              variants={fadeInUp}
            >
              <h2 className={styles.workHistoryTitle}>
                Work<br />History
              </h2>
              <p className={styles.workHistoryDescription}>
                Here you can find out more about the companies I have collaborated with,
                and the experiences I have gained while working there...
              </p>
              <Link
                href="/work"
                className={styles.workHistoryButton}
              >
                Check out my work history
                <ArrowRight className={styles.arrowIcon} />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Technologies Section */}
        <section className={styles.technologiesSection}>
          <motion.div
            className={styles.technologiesContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.technologiesHeader}>
              <h2 className={styles.technologiesTitle}>
                Technologies and Tools I work with
              </h2>
            </div>
            <ToolsTech />
          </motion.div>
        </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutBackground} />
          <motion.div
            className={styles.aboutContainer}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>
                About me
              </h2>
              <p className={styles.aboutDescription}>
                Here you can find out more about my professional life and career...
              </p>
              <Link
                href="/about"
                className={styles.aboutButton}
              >
                Get to know more about me
                <ArrowRight className={styles.arrowIcon} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section className={styles.projectsSection}>
          <div className={styles.projectsBackground} />
          <motion.div
            className={styles.projectsContainer}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.projectsContent}>
              <h2 className={styles.projectsTitle}>
                My<br />Projects
              </h2>
              <p className={styles.projectsDescription}>
                Here you can find out more about the projects I have been part of,
                and experiences I have achieved while working with those projects...
              </p>
              <Link
                href="/projects"
                className={styles.projectsButton}
              >
                Check out some of my projects
                <ArrowRight className={styles.arrowIcon} />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div >
  )
}
