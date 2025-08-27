'use client'

import { motion } from 'framer-motion'
import { useAutoScroll } from '@/hooks/useAutoScroll'
import TourIndicator from './TourIndicator'
import styles from './AutoScrollButton.module.css'

export default function AutoScrollButton() {
    const { isAutoScrolling, startAutoScroll } = useAutoScroll()

    return (
        <>
            {/* Tour Indicator */}
            <TourIndicator isActive={isAutoScrolling} />

            {/* Auto Scroll Button */}
            <motion.div
                className={`${styles.autoScrollButton} ${isAutoScrolling ? styles.active : ''}`}
                onClick={startAutoScroll}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title={isAutoScrolling ? "Click to stop auto-scroll" : "Click to auto-scroll page"}
            >
                <div className={styles.buttonContent}>
                    <div className={styles.buttonIcon}>
                        {isAutoScrolling ? (
                            <motion.div
                                className={styles.stopIcon}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                        ) : (
                            <div className={styles.playIcon} />
                        )}
                    </div>
                </div>
            </motion.div>
        </>
    )
}
