'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, ChevronUp } from 'lucide-react'
import styles from './Navbar.module.css'

interface NavbarProps {
  activeTab: 'Home' | 'Work' | 'Projects' | 'About' | 'Contacts'
}

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contacts', href: '/contacts' },
]

export default function Navbar({ activeTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const maxScroll = scrollHeight - clientHeight;

      // Show button when scrolled down, but hide when at the very bottom
      setIsScrolled(scrollY > 50 && scrollY < maxScroll - 10);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.navbarContainer}>
          {/* Logo */}
          <Link
            href="/"
            className={styles.logo}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <div className={styles.logoImage}>
              <Image
                src={isLogoHovered ? "/Mi-logo.svg" : "/Mi-logoWhite.svg"}
                alt="Mahmood ul Islam"
                fill
                sizes="(max-width: 768px) 120px, 150px"
                className={styles.logoImageInner}
              />
            </div>

          </Link>

          {/* Desktop Navigation */}
          <div className={styles.navLinks}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${activeTab === item.name ? styles.active : ''}`}
              >
                {item.name}
                {activeTab === item.name && (
                  <motion.div
                    className={styles.activeIndicator}
                    layoutId="activeTab"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={styles.mobileMenuButton}
          >
            {isOpen ? <X className={styles.menuIcon} /> : <Menu className={styles.menuIcon} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.mobileNavLinks}>
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`${styles.mobileNavLink} ${activeTab === item.name ? styles.active : ''}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Back to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            onClick={() => {

              // Stop auto-scroll first if it's running
              if (typeof window !== 'undefined' && (window as any).stopAutoScrollGlobal) {
                (window as any).stopAutoScrollGlobal();
              }
              // Direct scroll to top with immediate effect
              window.scrollTo(0, 0);
            }}
            className={styles.backToTopButton}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp className={styles.backToTopIcon} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
