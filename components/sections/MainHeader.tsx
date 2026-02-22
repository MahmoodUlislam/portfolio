'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import Image from 'next/image'
import { useTypingText } from '@/hooks/useTypingText'
import styles from './MainHeader.module.css'

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mahmoodislam/',
    icon: Linkedin,
    color: 'blue'
  },
  {
    name: 'GitHub',
    href: 'https://github.com/MahmoodUlislam',
    icon: Github,
    color: 'gray'
  },
  {
    name: 'Email',
    href: 'mailto:mahmood.islam@gmail.com',
    icon: Mail,
    color: 'red'
  }
]

export default function MainHeader() {
  const { text, isTyping } = useTypingText(
    "Welcome to my portfolio site! I'm a Senior Software Developer | Cloud & AI Specialist at Virtual Health Hub, currently working in Canada.",
    50
  )

  return (
    <motion.div
      className={styles.headerContainer}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Main Heading */}
      <div className={styles.headingContainer}>
        <motion.h1
          className={styles.mainHeading}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className={styles.greeting}>
            Hello!
          </span>
          <br />
          <span className={styles.name}>
            I am Mahmood
          </span>
        </motion.h1>

        <motion.h2
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {text}
          {isTyping && <span className={`${styles.cursor} ${styles.typing}`} />}
        </motion.h2>
      </div>

      {/* Social Links and CTA */}
      <motion.div
        className={styles.ctaButtons}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {/* Social Links */}
        <div className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.socialLink} ${styles[`socialLink${link.color.charAt(0).toUpperCase() + link.color.slice(1)}`]}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            >
              <link.icon className={styles.socialIcon} />
            </motion.a>
          ))}
        </div>

        {/* Download CV Button */}
        <motion.a
          href="/CVmahmood.pdf"
          download
          className={styles.primaryButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Download className={styles.downloadIcon} />
          Download CV
        </motion.a>
      </motion.div>

      {/* AWS Certification Badge */}
      <motion.div
        className={styles.certificationBadge}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
      >
        <a
          href="https://www.credly.com/badges/0e1a5b1c-f08c-483a-bf10-23ccdba8a23b/public_url"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.certificationLink}
        >
          <div className={styles.certificationImageWrapper}>
            <Image
              src="/aws-certified-machine-learning-engineer-associate.png"
              alt="AWS Certified Machine Learning Engineer – Associate"
              width={64}
              height={64}
              className={styles.certificationImage}
            />
          </div>
          <div className={styles.certificationInfo}>
            <span className={styles.certificationTitle}>AWS Certified</span>
            <span className={styles.certificationName}>Machine Learning Engineer – Associate</span>
          </div>
        </a>
      </motion.div>

      {/* Skills Tags */}
      <motion.div
        className={styles.skillsTags}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        {['React', 'Next.js', 'Vue.js', 'Node.js', 'AWS', 'React Native', 'Swift', 'TensorFlow', 'PyTorch',].map((skill, index) => (
          <motion.span
            key={skill}
            className={styles.skillTag}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.4 + index * 0.1 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}
