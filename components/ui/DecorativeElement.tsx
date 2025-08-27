'use client'

import { motion } from 'framer-motion'
import { useAutoScroll } from '@/hooks/useAutoScroll'
import TourIndicator from './TourIndicator'
import styles from './DecorativeElement.module.css'

interface DecorativeElementProps {
  page?: 'home' | 'work' | 'projects' | 'about'
}

export default function DecorativeElement({ page = 'home' }: DecorativeElementProps) {
  const { isAutoScrolling, startAutoScroll } = useAutoScroll()

  return (
    <>
      {/* Tour Indicator - Fixed to viewport */}
      <TourIndicator isActive={isAutoScrolling} />

      {/* Decorative Element */}
      <motion.div
        className={`${styles.decorativeElement} ${isAutoScrolling ? styles.autoScrolling : ''} ${page === 'home' ? styles.homePage : ''}`}
        onClick={startAutoScroll}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        title={isAutoScrolling ? "Click to stop auto-scroll" : "Click to auto-scroll page"}
      />
    </>
  )
}
