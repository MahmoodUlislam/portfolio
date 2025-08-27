'use client'

import { motion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'
import styles from './TourIndicator.module.css'

interface TourIndicatorProps {
    isActive: boolean
}

export default function TourIndicator({ isActive }: TourIndicatorProps) {
    if (!isActive) return null

    return (
        <motion.div
            className={styles.tourIndicator}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div className={styles.tourContent}>
                <Play className={styles.playIcon} />
                <span>Auto-scrolling...</span>
            </div>
        </motion.div>
    )
}
