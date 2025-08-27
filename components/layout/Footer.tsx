'use client'

import { motion } from 'framer-motion'
import { Phone, Github, Linkedin, Mail, Heart } from 'lucide-react'
import styles from './Footer.module.css'

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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          {/* Contact Info */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.footerSectionTitle}>Get in Touch</h3>
            <a
              href="tel:+13062618482"
              className={styles.footerContactLink}
            >
              <Phone className={styles.phoneIcon} />
              +1 (306) 261-8482
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className={styles.footerCopyright}>
              © {new Date().getFullYear()} All rights reserved to{' '}
              <span className={styles.footerCopyrightLink}>Mahmood ul Islam</span>
            </p>
            <p className={styles.footerMadeWith}>
              Made with <Heart className={styles.heartIcon} /> using Next.js
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className={styles.footerSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className={styles.footerSectionTitle}>Connect</h3>
            <div className={styles.footerSocial}>
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
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <link.icon className={styles.socialIcon} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className={styles.footerBottomText}>
            Senior Software Developer | Cloud & AI Specialist
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
