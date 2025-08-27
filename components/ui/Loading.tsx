'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import styles from './Loading.module.css'

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={styles.loadingContent}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className={styles.loaderIcon} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.loadingText}
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  )
}
