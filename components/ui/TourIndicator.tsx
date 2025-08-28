'use client'

import { motion } from 'framer-motion'
import { Play, Pause, X } from 'lucide-react'
import styles from './TourIndicator.module.css'

interface TourIndicatorProps {
    isActive: boolean
    onStop?: () => void
}

export default function TourIndicator({ isActive, onStop }: TourIndicatorProps) {
    if (!isActive) return null

    return (
        <motion.div
            className={styles.tourIndicator}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className={styles.tourContent}>
                <div className={styles.iconContainer}>
                    <Play className={styles.playIcon} />
                </div>
                <div className={styles.textContent}>
                    <span className={styles.mainText}>Touring...</span>
                    <span className={styles.subText}>Click anywhere to stop</span>
                </div>
                {onStop && (
                    <button
                        className={styles.stopButton}
                        onClick={onStop}
                        aria-label="Stop tour"
                    >
                        <X className={styles.stopIcon} />
                    </button>
                )}
            </div>
        </motion.div>
    )
}
